import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, NavigationCancel, Router, RouterStateSnapshot} from "@angular/router";
import {SPQNavigationService} from "../../services/navigation.service";
import {SPQStorageService} from "../../services/storage.service";

@Injectable()
export class SPQAuthGuard implements CanActivate, CanActivateChild {

    constructor(private storageService: SPQStorageService,
                private navigationService: SPQNavigationService,
                private router: Router) {
        this.setNavigationCancel(router);
    }

    canActivate(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): boolean {
        return Boolean(
            this.storageService.getToken()
            && this.storageService.getUsername()
            && this.storageService.getId()
        );
    }

    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.canActivate(childRoute, state);
    }

    //TODO: Реализовать сообщение пользователю с помощью MatSnackBar или аналогичных компонентов
    setNavigationCancel(router: Router): void {
        router.events.subscribe(event => {
            if (event instanceof NavigationCancel) {
                alert("Для доступа к этому разделу требуетя аудентифакция.");
                router.navigate(["/"]);
            }
        });
    }
}

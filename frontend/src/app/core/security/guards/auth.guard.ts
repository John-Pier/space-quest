import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree} from "@angular/router";
import {SPQRoutesMap, SPQRoutesString} from "../../../app-routers";
import {SPQNavigationService} from "../../../services/navigation.service";
import {SPQStorageService} from "../../../services/storage.service";

@Injectable()
export class SPQAuthGuard implements CanActivate, CanActivateChild, CanLoad {

    constructor(private storageService: SPQStorageService,
                private navigationService: SPQNavigationService,
                private router: Router) {
    }

    public canActivate(route: ActivatedRouteSnapshot,
                       state: RouterStateSnapshot): boolean | UrlTree {
        return this.isLogged() ? true : this.router.parseUrl(SPQRoutesMap[SPQRoutesString.SPQ_AUTH]);

    }

    public canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
        return this.canActivate(childRoute, state);
    }

    public canLoad(route: Route, segments: UrlSegment[]): Promise<boolean> | boolean {
        return this.isLogged() ? true : this.router.navigateByUrl(SPQRoutesMap[SPQRoutesString.SPQ_AUTH])
    }

    private isLogged(): boolean {
        return !!this.storageService.getToken()
            && !!this.storageService.getUsername()
            && !!this.storageService.getId();
    }
}

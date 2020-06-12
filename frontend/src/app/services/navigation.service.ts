import {Location} from "@angular/common";
import {Injectable, Optional} from "@angular/core";
import {NavigationEnd, NavigationExtras, Router} from "@angular/router";
import {filter} from "rxjs/operators";
import {defaultAbsoluteRoute} from "../app-routers";
import {SPQNavigationHistoryService} from "./navigation-history.service";

const dontUseHistoryKey = "dontUseHistory";

const dontUseHistoryExtras: (boolean?) => NavigationExtras = () => ({
    state: {
        [dontUseHistoryKey]: true
    }
});

@Injectable()
export class SPQNavigationService {

    private readonly isHistoryServiceUse: boolean = false;

    constructor(private router: Router,
                private historyService: SPQNavigationHistoryService,
                @Optional() private location: Location) {
        if (!this.location) {
            this.isHistoryServiceUse = true;
            this.subscribeToRouterEvents();
        }
    }

    public get getCurrentUrl(): string {
       return this.historyService.lastURL || this.router.url;
    }

    public getPreviousUrl(): string {
       return this.historyService.previousURL || defaultAbsoluteRoute;
    }

    public navigateTo(rote: string): Promise<boolean> {
        return this.router.navigateByUrl(rote);
    }

    public navigateToWithParams(rote: string, params: any): Promise<boolean> {
        return this.router.navigate([rote, params]);
    }

    public navigateWithoutHistory(rote: string): Promise<boolean> {
        return this.router.navigateByUrl(rote, dontUseHistoryExtras());
    }

    public navigateToDefault(): Promise<boolean> {
        return this.navigateTo(defaultAbsoluteRoute);
    }

    public back(defaultRoute?: string): Promise<boolean> | void {
       return this.executeBasedOnHistoryServiceUse(
            () => {
                if (this.historyService.isHistoryEmpty()) {
                    console.log("navigateToDefault");
                    return defaultRoute ? this.navigateTo(defaultRoute) : this.navigateToDefault();
                } else {
                    const lt = this.historyService.popRouteFromHistory();
                    console.log(lt);
                    return this.navigateWithoutHistory(lt);
                }
            },
            () => {
                return this.location.back();
            }
        );
    }

    private subscribeToRouterEvents(): void {
        this.router.events
            .pipe(
                filter(event => event instanceof NavigationEnd)
            )
            .subscribe((event: NavigationEnd) => {
                const navigationExtras = this.router.getCurrentNavigation().extras;
                if (!navigationExtras.state || !navigationExtras.state[dontUseHistoryKey]) {
                    this.historyService.addRouteToHistory(event.urlAfterRedirects);
                }
            });
    }

    private executeBasedOnHistoryServiceUse<T = void, V = void>(ifUse: () => T, ifDontUse: () => V): T | V {
        if (this.isHistoryServiceUse) {
           return ifUse();
        } else {
          return ifDontUse();
        }
    }
}

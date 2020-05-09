import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {defaultAbsoluteRoute} from "../app-routers";
import {SPQNavigationHistoryService} from "./navigation-history.service";

@Injectable()
export class SPQNavigationService {

    constructor(private router: Router,
                private historyService: SPQNavigationHistoryService) {
    }

    public navigateTo(rote: string): Promise<boolean> {
        return this.router.navigateByUrl(rote);
    }

    public navigateToWithParams(rote: string, params: any): Promise<boolean> {
        return this.router.navigate([rote, params]);
    }

    public navigateWithoutHistory(rote: string): Promise<boolean> {
        return this.router.navigateByUrl(rote);
    }

    public navigateToDefault(defaultRoute?: string): Promise<boolean> {
        return defaultRoute ? this.navigateWithoutHistory(defaultRoute) : this.navigateWithoutHistory(defaultAbsoluteRoute);
    }

    public back(defaultRoute?: string): Promise<boolean> {
        return this.historyService.isHistoryEmpty() ?
            this.navigateToDefault() :
            this.navigateWithoutHistory(this.historyService.popRouteFromHistory());
    }
}

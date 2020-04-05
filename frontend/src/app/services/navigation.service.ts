import {Injectable} from "@angular/core";
import {Router} from "@angular/router";

@Injectable({
    providedIn: "root"
})
export class SPQNavigationService {
    constructor(private routerExt: Router) {}

    public navigateTo(rote: string): void {
        this.routerExt.navigateByUrl(rote).then(console.log);
    }
}

import {Component, HostBinding} from "@angular/core";
import {finalize, tap} from "rxjs/operators";
import {SPQUserModel} from "../../core/models/user.model";
import {SPQUserService} from "./services/user.service";

@Component({
    selector: "spq-user-profile",
    templateUrl: "user-profile.component.html",
    providers: [
        SPQUserService
    ]
})
export class SPQUserProfileComponent {

    public _user: SPQUserModel;

    private loading: boolean = false;

    @HostBinding("class.spq-user-profile")
    private hostClass: boolean = true;

    constructor(private service: SPQUserService) {
        this.subscribeToGetUser();
    }

    private subscribeToGetUser(): void {
        this.loading = true;
        this.service.getUser()
            .pipe(
                tap(user => {
                    this._user = user;
                    console.log(user);
                }),
                finalize(() => {
                    this.loading = false;
                })
            )
            .subscribe();
    }
}

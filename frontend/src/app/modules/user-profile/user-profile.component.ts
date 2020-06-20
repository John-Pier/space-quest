import {Component, HostBinding, Inject} from "@angular/core";
import {MatBottomSheet} from "@angular/material";
import {finalize, tap} from "rxjs/operators";
import {SPQ_CONTACTS_DATA_CONFIG, SPQContactsDataConfig} from "../../app.config";
import {SPQUserModel} from "../../core/models/user.model";
import {SPQChangePIComponent} from "./components/embed/change-profile-image.component";
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

    constructor(private service: SPQUserService,
                @Inject(SPQ_CONTACTS_DATA_CONFIG) private contactsDataConfig: SPQContactsDataConfig,
                private bottomSheetService: MatBottomSheet) {
        this.subscribeToGetUser();
    }

    public _onChangeProfileImageClick(): void {
        this.bottomSheetService.open(SPQChangePIComponent);
    }

    public _onChangeProfileInfoClick(): void {
        //
    }

    public _onNavigateToEmailClick(): void {
        location.href = "mailto:" + this.contactsDataConfig.adminEmail;
    }

    private subscribeToGetUser(): void {
        this.loading = true;
        this.service.getUser()
            .pipe(
                tap(user => {
                    this._user = user;
                }),
                finalize(() => {
                    this.loading = false;
                })
            )
            .subscribe();
    }
}

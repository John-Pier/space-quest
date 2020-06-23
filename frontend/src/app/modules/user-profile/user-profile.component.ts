import {Component, HostBinding, Inject} from "@angular/core";
import {MatBottomSheet} from "@angular/material";
import {finalize, take, tap} from "rxjs/operators";
import {SPQ_CONTACTS_DATA_CONFIG, SPQContactsDataConfig} from "../../app.config";
import {SPQLoaderService} from "../../components/loader/services/loader.service";
import {routerAnimations} from "../../core/core.animations";
import {SPQUserModel} from "../../core/models/user.model";
import {SPQChangePIComponent} from "./components/embed/change-profile-image.component";
import {SPQUserService} from "./services/user.service";

@Component({
    selector: "spq-user-profile",
    templateUrl: "user-profile.component.html",
    providers: [
        SPQUserService
    ],
    animations: [
        routerAnimations
    ]
})
export class SPQUserProfileComponent {

    public _user: SPQUserModel;

    @HostBinding("class.spq-user-profile")
    private hostClass: boolean = true;

    constructor(private service: SPQUserService,
                @Inject(SPQ_CONTACTS_DATA_CONFIG) private contactsDataConfig: SPQContactsDataConfig,
                private loaderService: SPQLoaderService,
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
        window.open("mailto:" + this.contactsDataConfig.adminEmail, "_blank");
    }

    private subscribeToGetUser(): void {
        this.loaderService.setLoading(true);
        this.service.getUser()
            .pipe(
                take(1),
                tap(user => {
                    this._user = user;
                }),
                finalize(() => this.loaderService.setLoading(false))
            )
            .subscribe();
    }
}

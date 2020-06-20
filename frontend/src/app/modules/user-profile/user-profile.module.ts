import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {MatBottomSheetModule, MatButtonModule, MatExpansionModule} from "@angular/material";
import {RouterModule, Routes} from "@angular/router";
import {SPQPageHeaderModule} from "../../components/page-header/page-header.module";
import {SQPUserDataService} from "../../services/data/user-data.service";
import {SPQChangePIComponent} from "./components/embed/change-profile-image.component";
import {SPQUserProfileComponent} from "./user-profile.component";

const UserProfileRoutes: Routes = [
    {
        path: "",
        component: SPQUserProfileComponent
    }
];

@NgModule({
    declarations: [
        SPQUserProfileComponent,
        SPQChangePIComponent
    ],
    exports: [
        SPQUserProfileComponent
    ],
    entryComponents: [
        SPQChangePIComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(UserProfileRoutes),
        SPQPageHeaderModule,
        MatBottomSheetModule,
        MatExpansionModule,
        MatButtonModule
    ],
    providers: [
        SQPUserDataService
    ]
})
export class SPQUserProfileModule {}

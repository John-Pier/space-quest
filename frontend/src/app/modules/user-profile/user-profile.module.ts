import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {SPQUserProfileComponent} from "./user-profile.component";

const UserProfileRoutes: Routes = [
    {
        path: "",
        component: SPQUserProfileComponent
    }
];

@NgModule({
    declarations: [
        SPQUserProfileComponent
    ],
    exports: [
        SPQUserProfileComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(UserProfileRoutes)
    ]
})
export class SPQUserProfileModule {}

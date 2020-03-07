import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {SPQAuthComponent} from "./auth.component";

const AuthRouters: Routes = [
    {
        path: "",
        component: SPQAuthComponent
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(AuthRouters)
    ],
    declarations: [
        SPQAuthComponent
    ],
    exports: [
        SPQAuthComponent
    ],
    providers: [

    ]
})
export class SPQAuthModule {}

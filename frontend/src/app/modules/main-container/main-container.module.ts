import {CommonModule} from "@angular/common";
import {NgModule, Type} from "@angular/core";
import {MatButtonModule} from "@angular/material/button";
import {RouterModule, Routes} from "@angular/router";
import {SPQHeaderModule} from "../../components/header/header.module";
import {SPQMainContainerComponent} from "./main-container.component";
import {MAIN_ROUTES} from "./main-routing";

const SPQMainContainerRoutes: Routes = [
    {
        path: "",
        component: SPQMainContainerComponent,
        children: MAIN_ROUTES
    }
];

const spqModules: Type<any>[] = [
    SPQHeaderModule
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(SPQMainContainerRoutes),
        ...spqModules,
        MatButtonModule
    ],
    declarations: [
        SPQMainContainerComponent
    ],
    exports: [
        SPQMainContainerComponent
    ],
    providers: [

    ]
})
export class SPQMainContainerModule {}

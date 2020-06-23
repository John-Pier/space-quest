import {CommonModule} from "@angular/common";
import {NgModule, Type} from "@angular/core";
import {MatIconModule, MatMenuModule} from "@angular/material";
import {MatButtonModule} from "@angular/material/button";
import {RouterModule, Routes} from "@angular/router";
import {SPQHeaderModule} from "../../components/header/header.module";
import {SPQNotFoundModule} from "../../components/not-found/not-found.module";
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
    SPQHeaderModule,
    SPQNotFoundModule
];

const matModules: Type<any>[] = [
    MatButtonModule,
    MatMenuModule,
    MatIconModule
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(SPQMainContainerRoutes),
        ...spqModules,
        ...matModules
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

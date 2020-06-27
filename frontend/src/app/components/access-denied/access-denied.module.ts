import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {SPQAccessDeniedComponent} from "./access-denied.component";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        SPQAccessDeniedComponent
    ],
    exports: [
        SPQAccessDeniedComponent
    ],
    providers: []
})
export class SPQAccessDeniedModule {}

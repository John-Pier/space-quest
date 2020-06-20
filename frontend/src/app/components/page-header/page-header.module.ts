import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {MatButtonModule} from "@angular/material";
import {SPQPageHeaderComponent} from "./page-header.component";

@NgModule({
    imports: [
        CommonModule,
        MatButtonModule
    ],
    declarations: [
        SPQPageHeaderComponent
    ],
    exports: [
        SPQPageHeaderComponent
    ],
    providers: []
})
export class SPQPageHeaderModule {}

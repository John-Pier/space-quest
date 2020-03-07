import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {SPQHeaderComponent} from "./header.component";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        SPQHeaderComponent
    ],
    exports: [
        SPQHeaderComponent
    ],
    providers: []
})
export class SPQHeaderModule {}

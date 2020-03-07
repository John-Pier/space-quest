import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {SPQAuthComponent} from "./auth.component";

@NgModule({
    declarations: [
        SPQAuthComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        SPQAuthComponent
    ],
    providers: [

    ]
})
export class AuthModule {}

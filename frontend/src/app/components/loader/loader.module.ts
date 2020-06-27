import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {MatProgressSpinnerModule} from "@angular/material";
import {SPQLoaderComponent} from "./loader.component";
import {SPQLoaderService} from "./services/loader.service";

@NgModule({
    imports: [
        CommonModule,
        MatProgressSpinnerModule
    ],
    declarations: [
        SPQLoaderComponent
    ],
    exports: [
        SPQLoaderComponent
    ],
    providers: [
        SPQLoaderService
    ]
})
export class SPQLoaderModule {
}

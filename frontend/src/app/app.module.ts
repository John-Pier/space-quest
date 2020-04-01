import {NgModule} from "@angular/core";
import {MatSliderModule} from "@angular/material/slider";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {spqRoutes} from "./app-routers";
import {AppComponent} from "./app.component";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(spqRoutes),
        MatSliderModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}

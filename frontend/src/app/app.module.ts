import {NgModule} from "@angular/core";
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
        RouterModule.forRoot(spqRoutes)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}

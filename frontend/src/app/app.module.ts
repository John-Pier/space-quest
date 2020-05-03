import {HttpClientModule} from "@angular/common/http";
import {NgModule} from "@angular/core";
import {MatSliderModule} from "@angular/material/slider";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {PreloadAllModules, RouterModule, Routes} from "@angular/router";
import {SPQRoutesString} from "./app-routers";
import {AppComponent} from "./app.component";
import {localAppAPIConfig, SPQ_APP_API_CONFIG} from "./app.config";
import {SPQAuthGuard} from "./core/security/guards/auth.guard";
import {SPQSecurityModule} from "./core/security/security.module";

export const spqRoutes: Routes = [
    {
        path: SPQRoutesString.SPQ_AUTH,
        loadChildren: () => import("./modules/auth/auth.module").then(m => m.SPQAuthModule)
    },
    {
        path: SPQRoutesString.SPQ_MAIN,
        canActivate: [SPQAuthGuard],
        loadChildren: () => import("./modules/main-container/main-container.module").then(m => m.SPQMainContainerModule)
    },
    {
        path: "",
        pathMatch: "full",
        redirectTo: SPQRoutesString.SPQ_MAIN
    },
    {
        path: "**",
        redirectTo: SPQRoutesString.SPQ_MAIN
    }
];

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(spqRoutes, {preloadingStrategy: PreloadAllModules, onSameUrlNavigation: "reload"}),
        HttpClientModule,
        SPQSecurityModule.forRoot(),
        MatSliderModule
    ],
    providers: [
        {
            provide: SPQ_APP_API_CONFIG,
            useValue: localAppAPIConfig
        },
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}

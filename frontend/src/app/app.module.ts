import {HttpClientModule} from "@angular/common/http";
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {PreloadAllModules, Router, RouterModule, Routes} from "@angular/router";
import {environment} from "../environments/environment";
import {SPQRoutesString} from "./app-routers";
import {AppComponent} from "./app.component";
import {contactsDataConfig, SPQ_APP_API_CONFIG, SPQ_CONTACTS_DATA_CONFIG} from "./app.config";
import {SPQAuthGuard} from "./core/security/guards/auth.guard";
import {SPQSecurityModule} from "./core/security/security.module";
import {SPQNavigationHistoryService} from "./services/navigation-history.service";
import {SPQNavigationService} from "./services/navigation.service";

export const spqRoutes: Routes = [
    {
        path: SPQRoutesString.SPQ_AUTH,
        loadChildren: () => import("./modules/auth/auth.module").then(m => m.SPQAuthModule)
    },
    {
        path: SPQRoutesString.SPQ_MAIN,
        canActivate: [SPQAuthGuard],
        canActivateChild: [SPQAuthGuard],
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
        RouterModule.forRoot(spqRoutes, { preloadingStrategy: PreloadAllModules, onSameUrlNavigation: "reload" }),
        HttpClientModule,
        SPQSecurityModule.forRoot()
    ],
    providers: [
        {
            provide: SPQ_APP_API_CONFIG,
            useValue: environment.config
        },
        {
            provide: SPQ_CONTACTS_DATA_CONFIG,
            useValue: contactsDataConfig
        },
        SPQNavigationHistoryService,
        {
            provide: SPQNavigationService,
            useClass: SPQNavigationService,
            deps: [
                Router,
                SPQNavigationHistoryService,
                // Location - use the platform"s history
            ]
        }

    ],
    bootstrap: [AppComponent]
})
export class AppModule {}

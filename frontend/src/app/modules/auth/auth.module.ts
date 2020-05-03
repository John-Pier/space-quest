import {CommonModule} from "@angular/common";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {SPQAuthDataService} from "../../services/data/auth-data.service";
import {SPQStorageService} from "../../services/storage.service";
import {SPQAuthComponent} from "./auth.component";
import {SPQAuthGuard} from "./auth.guard";
import {SPQAuthInterceptor} from "./services/auth-interceptor.service";
import {SessionStorageService} from "./services/session-storage.service";

const authRouters: Routes = [
    {
        path: "",
        component: SPQAuthComponent
    }
];

const httpInterceptorProviders = [
    {
        provide: HTTP_INTERCEPTORS,
        useClass: SPQAuthInterceptor,
        multi: true
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(authRouters)
    ],
    declarations: [
        SPQAuthComponent
    ],
    exports: [
        SPQAuthComponent
    ],
    providers: [
        {
            provide: SPQStorageService,
            useClass: SessionStorageService
        },
        SPQAuthGuard,
        SPQAuthDataService,
        ...httpInterceptorProviders
    ]
})
export class SPQAuthModule {}

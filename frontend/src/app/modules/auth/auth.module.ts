import {CommonModule} from "@angular/common";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {SPQStorageService} from "../../services/storage.service";
import {SPQAuthComponent} from "./auth.component";
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
        ...httpInterceptorProviders
    ]
})
export class SPQAuthModule {}

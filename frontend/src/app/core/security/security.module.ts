import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {ModuleWithProviders, NgModule, Provider} from "@angular/core";
import {SPQStorageService} from "../../services/storage.service";
import {SPATokenDecoderService} from "../../services/token-decoder.service";
import {SPQAuthGuard} from "./guards/auth.guard";
import {SPQAuthErrorInterceptor} from "./services/auth-error.interseptor";
import {SPQAuthInterceptor} from "./services/auth.interceptor.service";
import {SPAJwtTokenDecoderService} from "./services/jwt-token-decoder.service";
import {SPQLocalStorageService} from "./services/local.storage.service";

export type SPQSecurityModuleConfig = {
    storageService?: Provider
};

const httpInterceptorProviders = [
    {
        provide: HTTP_INTERCEPTORS,
        useClass: SPQAuthInterceptor,
        multi: true
    },
    {
        provide: HTTP_INTERCEPTORS,
        useClass: SPQAuthErrorInterceptor,
        multi: true
    }
];

@NgModule()
export class SPQSecurityModule {
    public static forRoot(moduleConfig: SPQSecurityModuleConfig = {}): ModuleWithProviders {
        return {
            ngModule: SPQSecurityModule,
            providers: [
                moduleConfig.storageService ?
                    moduleConfig.storageService :
                    {
                        provide: SPQStorageService,
                        useClass: SPQLocalStorageService
                    },
                SPQAuthGuard,
                {
                    provide: SPATokenDecoderService,
                    useClass: SPAJwtTokenDecoderService
                },
                ...httpInterceptorProviders
            ]
        };
    }
}

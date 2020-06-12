import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {ModuleWithProviders, NgModule, Provider} from "@angular/core";
import {SPQStorageService} from "../../services/storage.service";
import {SPATokenDecoderService} from "../../services/token-decoder.service";
import {SPQAuthGuard} from "./guards/auth.guard";
import {SPQAuthInterceptor} from "./services/auth-interceptor.service";
import {SPAJwtTokenDecoderService} from "./services/jwt-token-decoder.service";
import {SPQSessionStorageService} from "./services/session-storage.service";

export type SPQSecurityModuleConfig = {
    storageService?: Provider
};

const httpInterceptorProviders = [
    {
        provide: HTTP_INTERCEPTORS,
        useClass: SPQAuthInterceptor,
        multi: true
    }
];

@NgModule({
    imports: [],
    exports: [],
})
export class SPQSecurityModule {
    public static forRoot(moduleConfig: SPQSecurityModuleConfig = {}): ModuleWithProviders {
        return {
            ngModule: SPQSecurityModule,
            providers: [
                moduleConfig.storageService ?
                    moduleConfig.storageService :
                    {
                        provide: SPQStorageService,
                        useClass: SPQSessionStorageService
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

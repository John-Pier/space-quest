import {InjectionToken} from "@angular/core";

export const SPQ_APP_API_CONFIG: InjectionToken<SPQAppAPIConfig> = new InjectionToken<SPQAppAPIConfig>("SPQ_APP_API_CONFIG");

export type SPQAppAPIConfig = Readonly<{
    PORT: string | number;
    HOST_NAME: string;
    PROTOCOL: string;
    API_ADDRESS: string;
    API_VERSION: string | number;
}>

export const localAppAPIConfig: SPQAppAPIConfig = {
    PORT: 3000,
    HOST_NAME: location.hostname,
    PROTOCOL: "http",
    API_ADDRESS: "/api/v/n/",
    API_VERSION: 1.0
}

export const deployAppAPIConfig: SPQAppAPIConfig = {
    PORT: 8080,
    HOST_NAME: location.hostname,
    PROTOCOL: "http",
    API_ADDRESS: "/api/v/n/",
    API_VERSION: 1.0
}

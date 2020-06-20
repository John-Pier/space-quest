import {InjectionToken} from "@angular/core";

export const SPQ_APP_API_CONFIG: InjectionToken<SPQAppAPIConfig> = new InjectionToken<SPQAppAPIConfig>("SPQ_APP_API_CONFIG");
export const SPQ_CONTACTS_DATA_CONFIG: InjectionToken<SPQContactsDataConfig> = new InjectionToken<SPQContactsDataConfig>("SPQ_CONTACTS_DATA_CONFIG");

export type SPQAppAPIConfig = Readonly<{
    PORT: string | number;
    HOST_NAME: string;
    PROTOCOL: string;
    API_ADDRESS: string;
    API_VERSION: string | number;
}>;

export type SPQContactsDataConfig = Readonly<{
    adminEmail: string;
    repoLink: string;
    repoText: string;
}>;

export const mockAppAPIConfig: SPQAppAPIConfig = {
    PORT: 3000,
    HOST_NAME: location.hostname,
    PROTOCOL: "http:",
    API_ADDRESS: "/api/v/n/",
    API_VERSION: 1.0
};

export const localAppAPIConfig: SPQAppAPIConfig = {
    PORT: 8080,
    HOST_NAME: location.hostname,
    PROTOCOL: "http:",
    API_ADDRESS: "/api/v/n/",
    API_VERSION: 1.0
};

export const deployAppAPIConfig: SPQAppAPIConfig = {
    PORT: location.port,
    HOST_NAME: location.hostname,
    PROTOCOL: location.protocol,
    API_ADDRESS: "/api/v/n/",
    API_VERSION: 1.0
};

export const contactsDataConfig = {
    adminEmail: "quest.super.user@gmail.com",
    repoLink: "https://github.com/John-Pier/space-quest",
    repoText: "[github.com] Space Quest"
};

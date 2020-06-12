export enum SPAStorageKeys {
    TOKEN_KEY = "AuthToken",
    LOGIN_KEY = "AuthLogin",
    ROLES_KEY = "UserRoles",
    FIRST_NAME_KEY = "FirstName",
}

export const TOKEN_HEADER_KEY = "Authorization";

export type SPQAuthDataModel = Readonly<{
    login: string;
    password: string;
}>;

export type SPQRegistrationDataModel = SPQAuthDataModel & Readonly<{
    email: string;
    firstName: string;
}>;

export const TOKEN_KEY = 'AuthToken';
export const USERNAME_KEY = 'AuthUsername';
export const USER_ID_KEY = 'UserId';
export const AUTHORITIES_KEY = 'AuthAuthorities';
export const TOKEN_HEADER_KEY = 'Authorization';

export type SPQAuthDataModel = Readonly<{
    login: string;
    pass: string;
}>

export type SPQRegistrationDataModel = SPQAuthDataModel & Readonly<{
    firstName: string;
    lastName?: string;
}>

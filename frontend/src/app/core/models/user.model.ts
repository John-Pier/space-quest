export interface SPQUserModel {
    readonly uuid: string;
    readonly login: string;
    readonly password: string;
    readonly email: string;
    readonly firstName: string;
    readonly second_name?: string;
    readonly country?: string;
    readonly city?: string;
    readonly gender?: string;
    readonly age?: string;
}

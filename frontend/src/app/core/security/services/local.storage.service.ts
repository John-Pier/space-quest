import {Injectable} from "@angular/core";
import {SPAStorageKeys} from "../../../modules/auth/types/auth.type";
import {SPQStorageService} from "../../../services/storage.service";

@Injectable()
export class SPQLocalStorageService implements SPQStorageService {

    public getLogin(): string {
        return localStorage.getItem(SPAStorageKeys.LOGIN_KEY);
    }

    public getFirstName(): string {
        return localStorage.getItem(SPAStorageKeys.FIRST_NAME_KEY);
    }

    public getRoles(): string[] {
        const roles = JSON.parse(localStorage.getItem(SPAStorageKeys.ROLES_KEY));
        return roles ? roles : [];
    }

    public getToken(): string {
        return localStorage.getItem(SPAStorageKeys.TOKEN_KEY);
    }

    public goOut(): void {
        Array.from(Object.values(SPAStorageKeys))
            .forEach(key => localStorage.removeItem(key));
    }

    public isLoggedIn(): boolean {
        return !!this.getToken() && !!this.getLogin() && !!this.getFirstName();
    }

    public saveFirstName(name: string): void {
        localStorage.setItem(SPAStorageKeys.FIRST_NAME_KEY, name);
    }

    public saveLogin(username: string): void {
        localStorage.setItem(SPAStorageKeys.LOGIN_KEY, username);
    }

    public saveRoles(roles: string[]): void {
        localStorage.setItem(SPAStorageKeys.ROLES_KEY, JSON.stringify(roles));
    }

    public saveToken(token: string): void {
        localStorage.setItem(SPAStorageKeys.TOKEN_KEY, token);
    }
}

import {Injectable} from "@angular/core";
import {SPAStorageKeys} from "../../../modules/auth/types/auth.type";
import {SPQStorageService} from "../../../services/storage.service";

@Injectable()
export class SPQSessionStorageService implements SPQStorageService {

    public getToken(): string {
        return sessionStorage.getItem(SPAStorageKeys.TOKEN_KEY);
    }

    public saveToken(token: string): void {
        sessionStorage.setItem(SPAStorageKeys.TOKEN_KEY, token);
    }

    public getLogin(): string {
        return sessionStorage.getItem(SPAStorageKeys.LOGIN_KEY);
    }

    public saveLogin(login: string): void {
        sessionStorage.setItem(SPAStorageKeys.LOGIN_KEY, login);
    }

    public getRoles(): string[] {
        const roles = JSON.parse(sessionStorage.getItem(SPAStorageKeys.ROLES_KEY));
        return roles ? roles : [];
    }

    public saveRoles(roles: string[]): void {
        sessionStorage.setItem(SPAStorageKeys.ROLES_KEY, JSON.stringify(roles));
    }

    public getFirstName(): string {
        return sessionStorage.getItem(SPAStorageKeys.FIRST_NAME_KEY);
    }

    public saveFirstName(name: string) {
        sessionStorage.setItem(SPAStorageKeys.FIRST_NAME_KEY, name);
    }

    public isLoggedIn(): boolean {
        return !!this.getToken() && !!this.getLogin() && !!this.getFirstName();
    }

    public goOut(): void {
        Array.from(Object.values(SPAStorageKeys))
            .forEach(key => sessionStorage.removeItem(key));
    }
}

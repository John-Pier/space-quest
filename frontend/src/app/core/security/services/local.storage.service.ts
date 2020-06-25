import {Injectable} from "@angular/core";
import {SPAStorageKeys} from "../../../modules/auth/types/auth.type";
import {SPQStorageService} from "../../../services/storage.service";

@Injectable()
export class SPQLocalStorageService implements SPQStorageService {

    public getLogin(): string {
        return localStorage.getItem(SPAStorageKeys.LOGIN_KEY);
    }

    public getFirstName(): string {
        return "";
    }

    public getRoles(): string[] {
        return [];
    }

    public getToken(): string {
        return "";
    }

    public goOut(): void {
    }

    public isLoggedIn(): boolean {
        return false;
    }

    public saveFirstName(name: string): void {
    }

    public saveLogin(username: string): void {
    }

    public saveRoles(roles: string[]): void {
    }

    public saveToken(token: string): void {
    }
}

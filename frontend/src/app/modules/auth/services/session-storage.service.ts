import {Injectable} from "@angular/core";
import {SPQStorageService} from "../../../services/storage.service";
import {AUTHORITIES_KEY, TOKEN_KEY, USER_ID_KEY, USERNAME_KEY} from "../types/auth.type";

@Injectable()
export class SessionStorageService implements SPQStorageService {

    private roles: Array<string>;

    public goOut(): void {
        window.sessionStorage.clear();
    }

    public saveToken(token: string): void {
        window.sessionStorage.removeItem(TOKEN_KEY);
        window.sessionStorage.setItem(TOKEN_KEY, token);
    }

    public getToken(): string {
        return sessionStorage.getItem(TOKEN_KEY);
    }

    public saveUsername(username: string): void {
        window.sessionStorage.removeItem(USERNAME_KEY);
        window.sessionStorage.setItem(USERNAME_KEY, username);
    }

    public saveId(id: number): void {
        window.sessionStorage.removeItem(USER_ID_KEY);
        window.sessionStorage.setItem(USER_ID_KEY, String(id));
    }

    public getId(): number {
        return Number(sessionStorage.getItem(USER_ID_KEY));
    }

    public getUsername(): string {
        return sessionStorage.getItem(USERNAME_KEY);
    }

    public saveAuthorities(authorities: string[]): void {
        window.sessionStorage.removeItem(AUTHORITIES_KEY);
        window.sessionStorage.setItem(AUTHORITIES_KEY, JSON.stringify(authorities));
    }

    public getAuthorities(): string[] {
        this.roles = [];
        if (sessionStorage.getItem(TOKEN_KEY)) {
            JSON.parse(sessionStorage.getItem(AUTHORITIES_KEY))
                .forEach(authority => {
                    this.roles.push(authority.authority);
                });
        }
        return this.roles;
    }
}

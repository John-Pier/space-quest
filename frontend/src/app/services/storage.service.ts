import {ID} from "../core/base.types";

export abstract class SPQStorageService {

    abstract goOut(): void;

    abstract saveToken(token: string): void;

    abstract getToken(): string;

    abstract saveUserEmail(username: string): void;

    abstract saveId(id: ID): void;

    abstract getId(): number;

    abstract getUserEmail(): string;

    abstract saveAuthorities(authorities: string[]): void;

    abstract getAuthorities(): string[];

    abstract isLoggedIn(): boolean;
}

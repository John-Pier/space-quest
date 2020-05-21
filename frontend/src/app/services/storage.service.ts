export abstract class SPQStorageService {

    abstract getToken(): string;

    abstract saveToken(token: string): void;

    abstract getLogin(): string;

    abstract saveLogin(username: string): void;

    abstract getFirstName(): string;

    abstract saveFirstName(name: string): void;

    abstract getRoles(): string[];

    abstract saveRoles(roles: string[]): void;

    abstract goOut(): void;

    abstract isLoggedIn(): boolean;
}

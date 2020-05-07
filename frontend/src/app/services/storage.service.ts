export abstract class SPQStorageService {

    abstract goOut(): void;

    abstract saveToken(token: string): void;

    abstract getToken(): string;

    abstract saveUserEmail(username: string): void;

    abstract saveId(id: number): void;

    abstract getId(): number;

    abstract getUserEmail(): string;

    abstract saveAuthorities(authorities: string[]): void;

    abstract getAuthorities(): string[];
}

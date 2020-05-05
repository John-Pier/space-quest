export abstract class SPQStorageService {

    abstract goOut(): void;

    abstract saveToken(token: string): void;

    abstract getToken(): string;

    abstract saveUsername(username: string): void;

    abstract saveId(id: number): void;

    abstract getId(): number;

    abstract getUsername(): string;

    abstract saveAuthorities(authorities: string[]): void;

    abstract getAuthorities(): string[];
}

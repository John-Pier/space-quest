import {Injectable} from "@angular/core";

@Injectable()
export class SPQNavigationHistoryService {

    public maxCapacity: number = 50;

    private lastUrl: string;

    private previousUrl: string;

    private history: string[] = [];

    public get previousURL(): string {
        return this.previousUrl;
    }

    public get lastURL(): string {
        return this.lastUrl;
    }

    public addRouteToHistory(absoluteUrl: string): void {
        if (this.isUniqueUrl(absoluteUrl)) {
            this.setPreviousUrl();
            this.resetIfOverflowing();
            this.history.push(absoluteUrl);
            this.lastUrl = absoluteUrl;
        } else {
            this.popIfNonUnique(absoluteUrl);
        }
    }

    public popRouteFromHistory(): string {
        if (!this.isHistoryEmpty()) {
            this.lastUrl = this.previousUrl;
            const url = this.history.pop();
            this.setPreviousUrl();
            return url;
        } else {
            throw "Routes history is empty!";
        }
    }

    public isHistoryEmpty(): boolean {
        return this.history.length < 1;
    }

    public reset(): void {
        this.resetHistory();
        this.resetUrls();
    }

    private setPreviousUrl(): void {
        if (!this.isHistoryEmpty()) {
            this.previousUrl = this.history[this.history.length - 1];
        }
    }

    private isUniqueUrl(url: string): boolean {
        return this.lastUrl !== url && this.previousUrl !== url;
    }

    private popIfNonUnique(url: string): void {
        if (this.previousUrl === url) {
            this.popRouteFromHistory();
        }
    }

    private resetIfOverflowing(): void {
        if (this.history.length >= this.maxCapacity) {
            this.resetHistory();
            this.history.push(this.previousUrl);
        }
    }

    private resetHistory(): void {
        this.history = [];
        this.lastUrl = null;
        this.previousUrl = null;
    }

    private resetUrls(): void {
        this.lastUrl = null;
        this.previousUrl = null;
    }
}

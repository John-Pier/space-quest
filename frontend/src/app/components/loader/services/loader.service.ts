import {Injectable} from "@angular/core";
import {Observable, Subject} from "rxjs";

@Injectable()
export class SPQLoaderService {

    public loading$: Observable<boolean>;

    private loader$: Subject<boolean> = new Subject<boolean>();

    constructor() {
        this.loading$ = this.loader$.asObservable();
    }

    public setLoading(loading: boolean): void {
        this.loader$.next(loading);
    }

    public _complete(): void {
        this.loader$.complete();
    }
}

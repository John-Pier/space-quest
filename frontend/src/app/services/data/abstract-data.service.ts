import {HttpClient} from "@angular/common/http";
import {Inject} from "@angular/core";
import {Observable} from "rxjs";
import {SPQ_APP_API_CONFIG, SPQAppAPIConfig} from "../../app.config";

export class SPQDataService {

    constructor(@Inject(SPQ_APP_API_CONFIG) private config: SPQAppAPIConfig,
                private http: HttpClient) {
    }

    public getAbsoluteAddress(): string {
        return `${this.config.PROTOCOL}://${this.config.HOST_NAME}:${this.config.PORT}${this.config.API_ADDRESS}${this.config.API_VERSION}/`;
    }

    public get<T>(address: string, options?: any): Observable<T> {
        // @ts-ignore
        return this.http.get<T>(this.makeURL(address), options ? options : {});
    }

    public post<T,M=T>(address: string, value: T, options: any = {}): Observable<M> {
        // @ts-ignore
        return this.http.post<M>(this.makeURL(address), value, options);
    }

    private makeURL(address: string): string {
        return this.getAbsoluteAddress() + address;
    }
}

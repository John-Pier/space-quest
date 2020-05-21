import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Inject} from "@angular/core";
import {Observable} from "rxjs";
import {SPQ_APP_API_CONFIG, SPQAppAPIConfig} from "../../app.config";

export const defaultHttpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
    observe: "body",
    responseType: "json"
};

export class SPQDataService {

    constructor(@Inject(SPQ_APP_API_CONFIG) private config: SPQAppAPIConfig,
                private http: HttpClient) {
    }

    public get<T>(address: string, options: any = defaultHttpOptions): Observable<T> {
        // @ts-ignore
        return this.http.get<T>(this.makeURL(address), options);
    }

    public post<T>(address: string, value: any, options: any = defaultHttpOptions): Observable<T> {
        // @ts-ignore
        return this.http.post<T>(this.makeURL(address), value, options);
    }

    protected getAbsoluteAddress(): string {
        return `${this.config.PROTOCOL}://${this.config.HOST_NAME}:${this.config.PORT}${this.config.API_ADDRESS}${this.config.API_VERSION}/`;
    }

    private makeURL(address: string): string {
        return this.getAbsoluteAddress() + address;
    }
}

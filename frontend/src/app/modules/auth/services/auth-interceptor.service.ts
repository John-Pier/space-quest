import {HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {SPQStorageService} from "../../../services/storage.service";
import {TOKEN_HEADER_KEY} from "../types/auth.type";

@Injectable()
export class SPQAuthInterceptor implements HttpInterceptor {

    constructor(private token: SPQStorageService) {}

    intercept(httpRequest: HttpRequest<any>, next: HttpHandler) {
        let authRequest = httpRequest;
        const token = this.token.getToken();
        if (token != null) {
            authRequest = httpRequest.clone({ headers: httpRequest.headers.set(TOKEN_HEADER_KEY, this.makeAuthToken(token)) });
        }
        return next.handle(authRequest);
    }

    private makeAuthToken(token: string): string {
        return  "Bearer " + token;
    }
}

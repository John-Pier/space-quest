import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";
import {SPQRoutesMap, SPQRoutesString} from "../../../app-routers";
import {SPQNavigationService} from "../../../services/navigation.service";

@Injectable()
export class SPQAuthErrorInterceptor implements HttpInterceptor {

    constructor(private navigationService: SPQNavigationService) {
    }

    public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req)
            .pipe(
                tap(() => {}, error => {
                    if (error instanceof HttpErrorResponse) {
                        if (error.status === 401) {
                            this.navigationService.navigateWithoutHistory(SPQRoutesMap[SPQRoutesString.SPQ_AUTH]);
                        } else if (error.status === 403) {
                            // access id denied;
                        }
                    }
                })
            );
    }
}

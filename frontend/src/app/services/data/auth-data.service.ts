import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {SPAEncodedResponse} from "../../core/security/types/response.type";
import {SPQAuthDataModel, SPQRegistrationDataModel} from "../../modules/auth/types/auth.type";
import {SPQDataService} from "./abstract-data.service";

@Injectable()
export class SPQAuthDataService extends SPQDataService {

    private loginURL = "authenticate";

    private logoutURL = "logout";

    private registrationURL = "registration";

    public attemptAuthentication(authDataModel: SPQAuthDataModel): Observable<SPAEncodedResponse> {
        return this.post<SPAEncodedResponse>(this.loginURL, authDataModel); // use { withCredentials: true } in prod
    }

    public attemptRegistration(registrationDataModel: SPQRegistrationDataModel): Observable<SPAEncodedResponse> {
        return this.post<SPAEncodedResponse>(this.registrationURL, registrationDataModel);
    }

    public logout(): Observable<void> {
        return this.post<void>(this.logoutURL, {});
    }
}

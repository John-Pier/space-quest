import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {SPQJwtResponseModel} from "../../core/security/types/jwt-response.type";
import {SPQAuthDataModel, SPQRegistrationDataModel} from "../../modules/auth/types/auth.type";
import {SPQDataService} from "./abstract-data.service";

@Injectable()
export class SPQAuthDataService extends SPQDataService {

    private loginURL = "authenticate";

    private logoutURL = "logout";

    private registrationURL = "registration";

    public attemptAuthentication(authDataModel: SPQAuthDataModel): Observable<SPQJwtResponseModel> {
        return this.post<SPQJwtResponseModel>(this.loginURL, authDataModel); // use { withCredentials: true } in prod
    }

    public attemptRegistration(registrationDataModel: SPQRegistrationDataModel): Observable<SPQJwtResponseModel> {
        return this.post<SPQJwtResponseModel>(this.registrationURL, registrationDataModel);
    }

    public logout(): Observable<void> {
        return this.post<void>(this.logoutURL, {});
    }
}

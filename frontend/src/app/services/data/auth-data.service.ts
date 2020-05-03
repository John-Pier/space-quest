import {HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {SPQAuthDataModel, SPQRegistrationDataModel} from "../../modules/auth/types/auth.type";
import {SPQJwtResponseModel} from "../../modules/auth/types/jwt-response.type";
import {SPQDataService} from "./abstract-data.service";

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class SPQAuthDataService extends SPQDataService{

    private loginURL = "login";
    private registrationURL = "registration";

    public attemptAuthentication(authDataModel: SPQAuthDataModel): Observable<SPQJwtResponseModel> {
        return this.post<SPQAuthDataModel, SPQJwtResponseModel>(this.loginURL, authDataModel, httpOptions);
    }

    public attemptRegistration(registrationDataModel: SPQRegistrationDataModel): Observable<string> {
        return this.post<SPQRegistrationDataModel, string>(this.registrationURL, registrationDataModel, httpOptions);
    }
}

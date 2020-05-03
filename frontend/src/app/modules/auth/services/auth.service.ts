import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {SPQJwtResponseModel} from "../../../core/security/types/jwt-response.type";
import {SPQAuthDataService} from "../../../services/data/auth-data.service";
import {SPQAuthDataModel, SPQRegistrationDataModel} from "../types/auth.type";

@Injectable()
export class SPQAuthService {
    constructor(private dataService: SPQAuthDataService) {
    }

    public attemptAuthentication(authDataModel: SPQAuthDataModel): Observable<SPQJwtResponseModel> {
        return this.dataService.attemptAuthentication(authDataModel);
    }

    public attemptRegistration(registrationDataModel: SPQRegistrationDataModel): Observable<string> {
        return this.dataService.attemptRegistration(registrationDataModel);
    }
}

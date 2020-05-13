import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {SPQUserModel} from "../../core/models/user.model";
import {SPQAuthDataModel, SPQRegistrationDataModel} from "../../modules/auth/types/auth.type";
import {SPQDataService} from "./abstract-data.service";

@Injectable()
export class SPQAuthDataService extends SPQDataService{

    private loginURL = "login";
    private logoutURL = "logout";
    private registrationURL = "registration";

    public attemptAuthentication(authDataModel: SPQAuthDataModel): Observable<SPQUserModel> {
        const loginForm: FormData = new FormData();
        loginForm.append('login', authDataModel.login);
        loginForm.append('password', authDataModel.password);
        return this.post(this.loginURL, loginForm , {withCredentials: true});
    }

    public attemptRegistration(registrationDataModel: SPQRegistrationDataModel): Observable<SPQUserModel> {
        return this.post<SPQUserModel>(this.registrationURL, registrationDataModel);
    }

    public logout(): Observable<void> {
        return this.post<void>(this.logoutURL, null, undefined);
    }
}

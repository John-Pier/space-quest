import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs";
import {SPQJwtResponseModel} from "../../../core/security/types/jwt-response.type";
import {SPQAuthDataService} from "../../../services/data/auth-data.service";
import {SPQStorageService} from "../../../services/storage.service";
import {SPQAuthDataModel, SPQRegistrationDataModel} from "../types/auth.type";

@Injectable()
export class SPQAuthService {
    constructor(private dataService: SPQAuthDataService,
                private storageService: SPQStorageService) {
    }

    public attemptAuthentication(authDataModel: SPQAuthDataModel): Observable<SPQJwtResponseModel> {
        return this.dataService.attemptAuthentication(authDataModel);
    }

    public attemptRegistration(registrationDataModel: SPQRegistrationDataModel): Observable<SPQJwtResponseModel> {
        return this.dataService.attemptRegistration(registrationDataModel);
    }

    public logoutIfLogged(): Observable<void> {
        if (this.isLoggedIn()) {
            this.storageService.goOut();
            return this.dataService.logout();
        }
        return of(this.storageService.goOut())
    }

    public setResponseModelToStore(response: SPQJwtResponseModel): void {
        this.storageService.saveUsername(response.username);
        this.storageService.saveId(response.id);
        this.storageService.saveToken(response.accessToken);
        this.storageService.saveAuthorities(response.authorities)
    }

    public isLoggedIn(): boolean {
        return !!this.storageService.getToken() && !!this.storageService.getId() && !!this.storageService.getUsername();
    }
}

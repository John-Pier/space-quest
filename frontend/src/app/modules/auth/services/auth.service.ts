import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs";
import {tap} from "rxjs/operators";
import {SPADecodedResponseModel, SPAEncodedResponse} from "../../../core/security/types/response.type";
import {SPQAuthDataService} from "../../../services/data/auth-data.service";
import {SPQStorageService} from "../../../services/storage.service";
import {SPATokenDecoderService} from "../../../services/token-decoder.service";
import {SPQAuthDataModel, SPQRegistrationDataModel} from "../types/auth.type";

@Injectable()
export class SPQAuthService {
    constructor(private dataService: SPQAuthDataService,
                private tokenDecoder: SPATokenDecoderService,
                private storageService: SPQStorageService) {
    }

    public attemptAuthentication(authDataModel: SPQAuthDataModel): Observable<SPAEncodedResponse> {
        return this.dataService.attemptAuthentication(authDataModel);
    }

    public attemptRegistration(registrationDataModel: SPQRegistrationDataModel): Observable<SPAEncodedResponse> {
        return this.dataService.attemptRegistration(registrationDataModel);
    }

    public logoutIfLogged(): Observable<void> {
        if (this.storageService.isLoggedIn()) {
            return this.dataService.logout()
                .pipe(
                    tap(() => this.storageService.goOut())
                );
        }
        return of(this.storageService.goOut());
    }

    public decodeResponseTokenAndSetToStore(response: SPAEncodedResponse): void {
        const decodedResponse = this.makeDecodedResponseModel(response);
        this.setResponseModelToStore(decodedResponse);
    }

    private makeDecodedResponseModel(response: SPAEncodedResponse): SPADecodedResponseModel {
        return this.tokenDecoder.decode(response);
    }

    private setResponseModelToStore(response: SPADecodedResponseModel): void {
        this.storageService.saveLogin(response.login);
        this.storageService.saveFirstName(response.firstName);
        this.storageService.saveToken(response.accessToken);
        this.storageService.saveRoles(response.roles);
    }
}

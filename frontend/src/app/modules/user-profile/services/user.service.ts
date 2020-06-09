import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {SPQUserModel} from "../../../core/models/user.model";
import {SQPUserDataService} from "../../../services/data/user-data.service";
import {SPQStorageService} from "../../../services/storage.service";

@Injectable()
export class SPQUserService {
    constructor(private userDataService: SQPUserDataService,
                private storageService: SPQStorageService) {
    }

    public getUser(): Observable<SPQUserModel> {
        return this.userDataService.getUserByLogin();
    }
}

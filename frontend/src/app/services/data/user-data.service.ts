import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {SPQUserModel} from "../../core/models/user.model";
import {SPQDataService} from "./abstract-data.service";

@Injectable()
export class SQPUserDataService extends SPQDataService {

    private userUrl = "user";
    private userLoginParam = "login";

    public getUserByLogin(): Observable<SPQUserModel> {
        return this.get<SPQUserModel>(this.userUrl);
    }
}

import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs";
import {SPQQuestFlow} from "../../modules/quest/types/quest.type";
import {SPQStubQuestFlow} from "./stub/quest-flow.stub";

@Injectable()
export class SQPQuestDataFlowService {

    constructor(private http: HttpClient) {
    }

    public getQuestFlow(): Observable<SPQQuestFlow> {
        // return this.http.get<SPQQuestFlow>("");
        return of(SPQStubQuestFlow);
    }
}

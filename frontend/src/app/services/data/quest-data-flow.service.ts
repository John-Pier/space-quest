import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs";
import {SPQQuestFlow} from "../../modules/quest/types/quest.type";
import {SPQDataService} from "./abstract-data.service";
import {SPQStubQuestFlow} from "./stub/quest-flow.stub";

@Injectable()
export class SQPQuestDataFlowService extends SPQDataService {

    public getQuestFlow(): Observable<SPQQuestFlow> {
        // return this.get<SPQQuestFlow>("");
        return of(SPQStubQuestFlow);
    }
}

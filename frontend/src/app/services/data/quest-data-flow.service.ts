import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs";
import {SPQQuestFlow, SPQQuestFlowBrief} from "../../core/models/quest-task.type";
import {SPQDataService} from "./abstract-data.service";
import {SPQStubQuestFlow} from "./stub/quest-flow.stub";

@Injectable()
export class SQPQuestDataFlowService extends SPQDataService {

    public flowBriefsURL = "section";

    public getAllQuestFlow(): Observable<SPQQuestFlow[]> {
        // return this.get<SPQQuestFlow>("");
        return of([SPQStubQuestFlow]);
    }

    public getAllQuestFlowBriefs(): Observable<SPQQuestFlowBrief[]> {
        return this.get<SPQQuestFlowBrief[]>(this.flowBriefsURL);
    }
}

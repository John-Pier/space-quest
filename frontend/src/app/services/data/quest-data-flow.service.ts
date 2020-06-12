import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {SPQQuestFlow, SPQQuestFlowBrief} from "../../core/models/quest-task.type";
import {SPQDataService} from "./abstract-data.service";

@Injectable()
export class SQPQuestFlowDataService extends SPQDataService {

    private allFlowsURL = "section/flow/all";

    private flowBriefsURL = "section/brief/all";

    public getAllQuestFlow(): Observable<SPQQuestFlow[]> {
        return this.get<SPQQuestFlow[]>(this.allFlowsURL);
    }

    public getAllQuestFlowBriefs(): Observable<SPQQuestFlowBrief[]> {
        return this.get<SPQQuestFlowBrief[]>(this.flowBriefsURL);
    }
}

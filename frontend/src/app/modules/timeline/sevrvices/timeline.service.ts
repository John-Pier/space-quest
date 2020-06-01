import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {SPQQuestFlowBrief} from "../../../core/models/quest-task.type";
import {SQPQuestDataFlowService} from "../../../services/data/quest-data-flow.service";

@Injectable()
export class SPQTimelineService {
    constructor(private questDataFlowService: SQPQuestDataFlowService) {
    }

    public getAllQuestFlowBriefs(): Observable<SPQQuestFlowBrief[]> {
       return this.questDataFlowService.getAllQuestFlowBriefs();
    }
}

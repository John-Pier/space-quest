import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {SQPQuestDataFlowService} from "../../../services/data/quest-data-flow.service";
import {SPQQuestFlow} from "../types/quest.type";

@Injectable()
export class SQPQuestFlowService {

    constructor(private dataFlowService: SQPQuestDataFlowService) {
    }

    public getQuestFlow(): Observable<SPQQuestFlow> {
        return this.dataFlowService.getQuestFlow();
    }
}

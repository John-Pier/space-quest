import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {SPQRoutesMap, SPQRoutesString} from "../../../app-routers";
import {ID} from "../../../core/base.types";
import {SPQQuestFlow} from "../../../core/models/quest-task.type";
import {SQPQuestFlowDataService} from "../../../services/data/quest-data-flow.service";
import {SPQNavigationService} from "../../../services/navigation.service";

@Injectable()
export class SQPQuestFlowService {

    constructor(private dataFlowService: SQPQuestFlowDataService,
                private navigationService: SPQNavigationService) {
    }

    public getAllQuestFlow(): Observable<SPQQuestFlow[]> {
        return this.dataFlowService.getAllQuestFlow();
    }

    public navigateToQuestDetails(questId: ID): void {
        this.navigationService.navigateTo(SPQRoutesMap[SPQRoutesString.SPQ_QUEST] + "/" + questId);
    }
}

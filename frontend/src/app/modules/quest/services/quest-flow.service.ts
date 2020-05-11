import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {SPQRoutesMap, SPQRoutesString} from "../../../app-routers";
import {ID} from "../../../core/base.types";
import {SQPQuestDataFlowService} from "../../../services/data/quest-data-flow.service";
import {SPQNavigationService} from "../../../services/navigation.service";
import {SPQQuestFlow} from "../types/quest.type";

@Injectable()
export class SQPQuestFlowService {

    constructor(private dataFlowService: SQPQuestDataFlowService,
                private navigationService: SPQNavigationService) {
    }

    public getQuestFlow(): Observable<SPQQuestFlow> {
        return this.dataFlowService.getQuestFlow();
    }

    public navigateToQuestDetails(questId: ID): void {
        this.navigationService.navigateTo(SPQRoutesMap[SPQRoutesString.SPQ_QUEST] + "/" + questId);
    }
}

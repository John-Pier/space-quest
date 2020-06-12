import {Injectable} from "@angular/core";
import {SPQRoutesMap, SPQRoutesString} from "../../../app-routers";
import {ID} from "../../../core/base.types";
import {SPQNavigationService} from "../../../services/navigation.service";
import {SPQQuestDetailsService} from "./quest-details.service";

@Injectable()
export class SPQQuestDetailsNavigationService {

    constructor(private navigationService: SPQNavigationService,
                private questDetailsService: SPQQuestDetailsService) {
    }

    public navigateToQuestFlow(): void {
        this.navigationService.navigateTo(SPQRoutesMap[SPQRoutesString.SPQ_QUEST]);
    }

    public navigateToNextQuestDetails(nextTaskId: ID): void {
        this.navigationService.navigateTo(SPQRoutesMap[SPQRoutesString.SPQ_QUEST] + "/" + nextTaskId);
    }

    public back(): void {
        this.navigationService.back();
    }
}

import {Injectable} from "@angular/core";
import {SPQRoutesMap, SPQRoutesString} from "../../../app-routers";
import {SPQNavigationService} from "../../../services/navigation.service";
import {SPQQuestDetailsService} from "./quest-details.service";

@Injectable()
export class SPQQuestDetailsNavigationService {

    constructor(private navigationService: SPQNavigationService,
                private questDetailsService: SPQQuestDetailsService) {
    }

    public nextQuestDetailsIsExist(): boolean {
        return false;
    }

    public navigateToQuestFlow(): void {
        this.navigationService.navigateTo(SPQRoutesMap[SPQRoutesString.SPQ_QUEST]);
    }

    public navigateToNextQuestDetails(): void {
        if (this.nextQuestDetailsIsExist()) {
            this.navigationService.navigateTo(SPQRoutesMap[SPQRoutesString.SPQ_QUEST] + "/" + 2);
        }
    }

    public back(): void {
        this.navigationService.back();
    }
}

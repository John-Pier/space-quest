import {Injectable} from "@angular/core";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";
import {Observable} from "rxjs";
import {ID} from "../../../core/base.types";
import {SPQQuestFlowBrief, SPQQuestTaskBrief} from "../../../core/models/quest-task.type";
import {SQPQuestFlowDataService} from "../../../services/data/quest-data-flow.service";
import {SPQQuestDetailsDataService} from "../../../services/data/quest-details-data.service";

@Injectable()
export class SPQTimelineService {
    constructor(private questFlowDataService: SQPQuestFlowDataService,
                private questDetailsDataService: SPQQuestDetailsDataService,
                private sanitizer: DomSanitizer) {
    }

    public getAllQuestFlowBriefs(): Observable<SPQQuestFlowBrief[]> {
        return this.questFlowDataService.getAllQuestFlowBriefs();
    }

    public getTaskBriefById(taskId: ID): Observable<SPQQuestTaskBrief> {
        return this.questDetailsDataService.getQuestTaskBriefById(taskId);
    }

    public makeSafeImageUrl(imageUrl): SafeResourceUrl {
        return this.sanitizer.bypassSecurityTrustResourceUrl(this.makeImageUrl(imageUrl));
    }

    private makeImageUrl(imageUrl: string): string {
        return this.questFlowDataService.getResourcesUrl() + imageUrl;
    }
}

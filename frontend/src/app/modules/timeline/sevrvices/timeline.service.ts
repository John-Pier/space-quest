import {Injectable} from "@angular/core";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";
import {Observable} from "rxjs";
import {SPQQuestFlowBrief} from "../../../core/models/quest-task.type";
import {SQPQuestDataFlowService} from "../../../services/data/quest-data-flow.service";

@Injectable()
export class SPQTimelineService {
    constructor(private questDataFlowService: SQPQuestDataFlowService,
                private sanitizer: DomSanitizer) {
    }

    public getAllQuestFlowBriefs(): Observable<SPQQuestFlowBrief[]> {
        return this.questDataFlowService.getAllQuestFlowBriefs();
    }

    public makeSafeImageUrl(imageUrl): SafeResourceUrl {
        return this.sanitizer.bypassSecurityTrustResourceUrl(this.makeImageUrl(imageUrl));
    }

    private makeImageUrl(imageUrl: string): string {
        return this.questDataFlowService.getResourcesUrl() + imageUrl;
    }
}

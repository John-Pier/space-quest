import {Injectable} from "@angular/core";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";
import {Observable} from "rxjs";
import {ID} from "../../../core/base.types";
import {SPQQuestTask} from "../../../core/models/quest-task.type";
import {SPQQuestDetailsDataService} from "../../../services/data/quest-details-data.service";
import {SPQQuestAnswerResponse} from "../types/quest-answer.type";
import {SPQQuestTooltip} from "../types/quest-tooltip.type";

@Injectable()
export class SPQQuestDetailsService {

    private readonly videoUrl: string = "https://www.youtube.com/embed/";

    private readonly videoEndPartUrl: string = "?loop=1&modestbranding=1&color=white";

    public constructor(private dataService: SPQQuestDetailsDataService,
                       private sanitizer: DomSanitizer) {
    }

    public getQuestTooltipByLvl(taskId: ID, lvl: number): Observable<SPQQuestTooltip> {
        return this.dataService.getQuestTooltipByLvl({
            taskUUID: taskId,
            lvl: lvl
        });
    }

    public getQuestTooltipCountByLvl(taskId: ID): Observable<number> {
        return this.dataService.getQuestTooltipCountByLvl(taskId);
    }

    public setQuestAnswer(taskId: ID, answer: string): Observable<SPQQuestAnswerResponse> {
        return this.dataService.setQuestAnswer({
            taskUUID: taskId,
            answer: answer
        });
    }

    public getQuestTaskById(taskId: ID): Observable<SPQQuestTask> {
        return this.dataService.getQuestTaskById(taskId);
    }

    public makeSafeImageUrl(imageUrl): SafeResourceUrl {
        return this.sanitizer.bypassSecurityTrustResourceUrl(this.makeImageUrl(imageUrl));
    }

    public makeSafeVideoUrl(videoUrl: string): SafeResourceUrl {
        return this.sanitizer.bypassSecurityTrustResourceUrl(this.makeVideoUrl(videoUrl));
    }

    private makeVideoUrl(videoUrl: string): string {
        return this.videoUrl + videoUrl + this.videoEndPartUrl;
    }

    private makeImageUrl(imageUrl: string): string {
        return this.dataService.getResourcesUrl() + imageUrl;
    }
}

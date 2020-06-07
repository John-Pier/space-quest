import {Injectable} from "@angular/core";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";
import {Observable} from "rxjs";
import {ID} from "../../../core/base.types";
import {SPQQuestTask} from "../../../core/models/quest-task.type";
import {SPQQuestDetailsDataService} from "../../../services/data/quest-details-data.service";

@Injectable()
export class SPQQuestDetailsService {

    private readonly videoUrl: string = "https://www.youtube.com/embed/";

    private readonly videoEndPartUrl: string = "?loop=1&modestbranding=1&color=white";

    public constructor(private dataService: SPQQuestDetailsDataService,
                       private sanitizer: DomSanitizer) {}

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

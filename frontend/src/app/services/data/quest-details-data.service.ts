import {HttpParams} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {ID} from "../../core/base.types";
import {SPQQuestTask, SPQQuestTaskBrief} from "../../core/models/quest-task.type";
import {SPQDataService} from "./abstract-data.service";

@Injectable()
export class SPQQuestDetailsDataService extends SPQDataService {

    private taskDetailsUrl = "task";

    private questAllTaskBriefURL = "task/brief/section";

    private questTaskBriefURL = "task/brief/";

    public getQuestTaskById(taskId: ID): Observable<SPQQuestTask> {
        return this.get<SPQQuestTask>(this.taskDetailsUrl, {
            params: new HttpParams().set("taskId", taskId.toString())
        });
    }

    public getQuestTaskBriefById(taskId: ID): Observable<SPQQuestTaskBrief> {
        return this.get<SPQQuestTaskBrief>(this.questTaskBriefURL, {
            params: new HttpParams().set("taskId", taskId.toString())
        });
    }
}

import {HttpParams} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {ID} from "../../core/base.types";
import {SPQQuestTask, SPQQuestTaskBrief} from "../../core/models/quest-task.type";
import {SPQQuestAnswer, SPQQuestAnswerResponse} from "../../modules/quest-details/types/quest-answer.type";
import {SPQDataService} from "./abstract-data.service";

@Injectable()
export class SPQQuestDetailsDataService extends SPQDataService {

    private taskAnswerUrl = "task/answer";

    private taskDetailsUrl = "task";

    private questAllTaskBriefUrl = "task/brief/section";

    private questTaskBriefUrl = "task/brief/";

    public getQuestTaskById(taskId: ID): Observable<SPQQuestTask> {
        return this.get<SPQQuestTask>(this.taskDetailsUrl, {
            params: new HttpParams().set("taskId", taskId.toString())
        });
    }

    public getQuestTaskBriefById(taskId: ID): Observable<SPQQuestTaskBrief> {
        return this.get<SPQQuestTaskBrief>(this.questTaskBriefUrl, {
            params: new HttpParams().set("taskId", taskId.toString())
        });
    }

    public setQuestAnswer(answer: SPQQuestAnswer): Observable<SPQQuestAnswerResponse> {
        return this.post<SPQQuestAnswerResponse>(this.taskAnswerUrl, answer);
    }
}

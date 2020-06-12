import {HttpParams} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {ID} from "../../core/base.types";
import {SPQQuestTask, SPQQuestTaskBrief} from "../../core/models/quest-task.type";
import {SPQQuestAnswer, SPQQuestAnswerResponse} from "../../modules/quest-details/types/quest-answer.type";
import {SPQQuestTooltip, SPQQuestTooltipRequest} from "../../modules/quest-details/types/quest-tooltip.type";
import {SPQDataService} from "./abstract-data.service";

@Injectable()
export class SPQQuestDetailsDataService extends SPQDataService {

    private taskDetailsUrl = "task";

    private taskAnswerUrl = "task/answer";

    private questAllTaskBriefUrl = "task/brief/section";

    private questTaskBriefUrl = "task/brief/";

    private questTooltipUrl = "task/tooltip/lvl";

    private questTooltipCountUrl = "task/tooltip/count";

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

    public getQuestTooltipByLvl(tooltip: SPQQuestTooltipRequest): Observable<SPQQuestTooltip> {
        return this.post<SPQQuestTooltip>(this.questTooltipUrl, tooltip);
    }

    public getQuestTooltipCountByLvl(taskId: ID): Observable<number> {
        return this.get<number>(this.questTooltipCountUrl, {
            params: new HttpParams().set("taskId", taskId.toString())
        });
    }
}

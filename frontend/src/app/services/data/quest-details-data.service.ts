import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs";
import {ID} from "../../core/base.types";
import {SPQQuestTask, SPQQuestTaskBrief} from "../../core/models/quest-task.type";
import {SPQDataService} from "./abstract-data.service";
import {SPQQuestTasks} from "./stub/quest-details.stub";

@Injectable()
export class SPQQuestDetailsDataService extends SPQDataService {

    private questDetailsUrl = "quest-details";

    private questAllTaskBriefURL = "task/brief/section";

    private questTaskBriefURL = "task/brief/";

    public getQuestTaskById(taskId: ID): Observable<SPQQuestTask> {
        return of(SPQQuestTasks[taskId.toString()]); // TODO -> Implements API
    }

    public getQuestTaskBriefById(taskId: ID): Observable<SPQQuestTaskBrief> {
        return this.get<SPQQuestTaskBrief>(this.questTaskBriefURL);
    }
}

import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs";
import {ID} from "../../core/base.types";
import {SPQQuestTask} from "../../core/models/quest-task.type";
import {SPQDataService} from "./abstract-data.service";
import {SPQQuestTasks} from "./stub/quest-details.stub";

@Injectable()
export class SPQQuestDetailsDataService extends SPQDataService {

    private questDetailsUrl = "quest-details";

    public getQuestTaskById(taskId: ID): Observable<SPQQuestTask> {
        return of(SPQQuestTasks[taskId.toString()]);
    }
}

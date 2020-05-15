import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {ID} from "../../../core/base.types";
import {SPQQuestTask} from "../../../core/models/quest-task.type";
import {SPQQuestDetailsDataService} from "../../../services/data/quest-details-data.service";

@Injectable()
export class SPQQuestDetailsService {
    public constructor(private dataService: SPQQuestDetailsDataService) {}

    public getQuestTaskById(taskId: ID): Observable<SPQQuestTask> {
        return this.dataService.getQuestTaskById(taskId);
    }
}

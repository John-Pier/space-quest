import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {take} from "rxjs/operators";
import {SPQQuestTask} from "../../../core/models/quest-task.type";
import {SPQQuestDetailsService} from "./quest-details.service";

@Injectable()
export class SPQQuestTaskResolver implements Resolve<SPQQuestTask> {

    constructor(private questDetailsService: SPQQuestDetailsService) {}

    public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<SPQQuestTask> | Promise<SPQQuestTask> | SPQQuestTask {
        const taskId = route.paramMap.get("id");
        return this.questDetailsService.getQuestTaskById(taskId)
            .pipe(
                take(1),
            );
    }
}

import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {finalize, take} from "rxjs/operators";
import {SPQLoaderService} from "../../components/loader/services/loader.service";
import {SPQQuestTask} from "../../core/models/quest-task.type";
import {SPQQuestDetailsService} from "./services/quest-details.service";

@Injectable()
export class SPQQuestTaskResolver implements Resolve<SPQQuestTask> {

    constructor(private questDetailsService: SPQQuestDetailsService,
                private loaderService: SPQLoaderService) {}

    public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<SPQQuestTask> | Promise<SPQQuestTask> | SPQQuestTask {
        const taskId = route.paramMap.get("id");
        this.loaderService.setLoading(true);
        return this.questDetailsService.getQuestTaskById(taskId)
            .pipe(
                take(1),
                finalize(() => this.loaderService.setLoading(false))
            );
    }
}

import {Component, HostBinding, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {map, tap} from "rxjs/operators";
import {routerAnimations} from "../../core/core.animations";
import {SPQQuestTask} from "../../core/models/quest-task.type";
import {SPQQuestDetailsNavigationService} from "./services/qd-navigation-helper.service";

@Component({
    selector: "spq-quest-details",
    templateUrl: "quest-details.component.html",
    providers: [
        SPQQuestDetailsNavigationService
    ],
    animations: [
        routerAnimations
    ]
})
export class SPQQuestDetailsComponent implements OnInit {

    public _questTask: SPQQuestTask;

    @HostBinding("class.spq-quest-details")
    private hostClass: boolean = true;

    constructor(private route: ActivatedRoute) {
        this.subscribeToGetQuestTask();
    }

    public ngOnInit() {}

    private subscribeToGetQuestTask(): void {
        this.route.data
            .pipe(
                map((data: { questTask: SPQQuestTask }) => {
                    return data.questTask;
                }),
                tap(task => {
                    this._questTask = task;
                })
            )
            .subscribe();
    }
}

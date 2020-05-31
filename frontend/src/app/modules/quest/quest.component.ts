import {Component, HostBinding, OnDestroy, OnInit} from "@angular/core";
import {Subscription} from "rxjs";
import {tap} from "rxjs/operators";
import {SPQQuestFlow} from "../../core/models/quest-task.type";
import {SQPQuestFlowService} from "./services/quest-flow.service";

@Component({
    selector: "spq-quest",
    templateUrl: "quest.component.html",
})
export class SPQQuesComponent implements OnInit, OnDestroy {

    public _questFlow: SPQQuestFlow = null;

    private subscriptions: Subscription[] = [];

    @HostBinding("class.spq-quest")
    private hostClass: boolean = true;

    constructor(private service: SQPQuestFlowService) {
    }

    public ngOnInit(): void {
        this.subscribeToGetQuestFlow();
    }

    public ngOnDestroy(): void {
        this.subscriptions.forEach(subscription => subscription.unsubscribe());
    }

    private subscribeToGetQuestFlow(): void {
        this.subscriptions.push(
            this.service.getQuestFlow()
            .pipe(
                tap(flow => {
                    this._questFlow = flow;
                })
            )
            .subscribe()
        );
    }
}

import {Component, HostBinding, OnDestroy, OnInit} from "@angular/core";
import {Subscription} from "rxjs";
import {tap} from "rxjs/operators";
import {SQPQuestFlowService} from "./services/quest-flow.service";
import {SPQQuestFlow} from "./types/quest.type";

@Component({
    selector: "spq-quest",
    templateUrl: "quest.component.html",
})
export class SPQQuesComponent implements OnInit, OnDestroy {

    public _questFlow: SPQQuestFlow = null;

    private subscriptions: Subscription[] =  [];

    @HostBinding("class.spq-quest")
    private hostClass: boolean = true;

    constructor(private service: SQPQuestFlowService) {
    }

    public ngOnInit(): void {
        const subsc = this.service.getQuestFlow()
            .pipe(
                tap(flow => {
                    this._questFlow = flow;
                })
            )
            .subscribe()
        this.subscriptions.push(subsc);
    }

    public ngOnDestroy(): void {
        this.subscriptions.forEach(subscription => subscription.unsubscribe())
    }
}

import {Component, HostBinding, OnDestroy, OnInit} from "@angular/core";
import {Subscription} from "rxjs";
import {finalize, tap} from "rxjs/operators";
import {SPQLoaderService} from "../../components/loader/services/loader.service";
import {routerAnimations} from "../../core/core.animations";
import {SPQQuestFlow} from "../../core/models/quest-task.type";
import {SQPQuestFlowService} from "./services/quest-flow.service";

@Component({
    selector: "spq-quest",
    templateUrl: "quest.component.html",
    animations: [
        routerAnimations
    ]
})
export class SPQQuesComponent implements OnInit, OnDestroy {

    public _questFlows: SPQQuestFlow[] = [];

    private subscriptions: Subscription[] = [];

    @HostBinding("class.spq-quest")
    private hostClass: boolean = true;

    constructor(private service: SQPQuestFlowService,
                private loaderService: SPQLoaderService) {
    }

    public ngOnInit(): void {
        this.subscribeToGetQuestFlow();
    }

    public ngOnDestroy(): void {
        this.subscriptions.forEach(subscription => subscription.unsubscribe());
    }

    private subscribeToGetQuestFlow(): void {
        this.loaderService.setLoading(true);
        this.subscriptions.push(
            this.service.getAllQuestFlow()
                .pipe(
                    tap(flow => {
                        this._questFlows = flow;
                    }),
                    finalize(() => this.loaderService.setLoading(false))
                )
                .subscribe()
        );
    }
}

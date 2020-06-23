import {Component, HostBinding, OnInit} from "@angular/core";
import {finalize, tap} from "rxjs/operators";
import {SPQLoaderService} from "../../components/loader/services/loader.service";
import {SPQQuestFlowBrief} from "../../core/models/quest-task.type";
import {SPQTimelineService} from "./services/timeline.service";

@Component({
    selector: "spq-timeline",
    templateUrl: "timeline.component.html",
    providers: [
        SPQTimelineService
    ]
})
export class SPQTimelineComponent implements OnInit {

    public _questFlowBriefs: SPQQuestFlowBrief[] = [];

    @HostBinding("class.spq-timeline")
    private hostClass: boolean = true;

    constructor(private service: SPQTimelineService,
                private loaderService: SPQLoaderService) {
    }

    public ngOnInit(): void {
       this.subscribeToGetAllQuestFlowBriefs();
    }

    private subscribeToGetAllQuestFlowBriefs(): void {
        this.loaderService.setLoading(true);
        this.service.getAllQuestFlowBriefs()
            .pipe(
                tap(briefs => {
                    this._questFlowBriefs = briefs;
                }),
                finalize(() => this.loaderService.setLoading(false))
            )
            .subscribe();
    }
}

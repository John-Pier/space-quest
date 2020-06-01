import {Component, HostBinding, OnInit} from "@angular/core";
import {tap} from "rxjs/operators";
import {SPQQuestFlowBrief} from "../../core/models/quest-task.type";
import {SPQTimelineService} from "./sevrvices/timeline.service";

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

    constructor(private service: SPQTimelineService) {
    }

    public ngOnInit(): void {
       this.subscribeToGetAllQuestFlowBriefs();
    }

    private subscribeToGetAllQuestFlowBriefs(): void {
        this.service.getAllQuestFlowBriefs()
            .pipe(
                tap(briefs => {
                    this._questFlowBriefs = briefs;
                })
            )
            .subscribe();
    }
}

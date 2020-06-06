import {Component, HostBinding, Input, OnInit} from "@angular/core";
import {SafeResourceUrl} from "@angular/platform-browser";
import {tap} from "rxjs/operators";
import {SPQRoutesMap, SPQRoutesString} from "../../../app-routers";
import {SPQQuestFlowBrief, SPQQuestTaskBrief} from "../../../core/models/quest-task.type";
import {SPQNavigationService} from "../../../services/navigation.service";
import {SPQTimelineService} from "../sevrvices/timeline.service";

@Component({
    selector: "spq-card",
    templateUrl: "card.component.html",
})
export class SPQCardComponent implements OnInit {

    @Input()
    public flowBrief: SPQQuestFlowBrief;

    public _currentTaskBrief: SPQQuestTaskBrief;

    public _safeUrl: SafeResourceUrl;

    public _isCollapsed: boolean = true;

    @HostBinding("class.spq-card")
    private hostClass: boolean = true;

    constructor(private service: SPQTimelineService,
                private navigationService: SPQNavigationService) {
    }

    public ngOnInit(): void {
        this._safeUrl = this.makeImageUrl();
        this.subscribeToGetTaskBrief();
    }

    public _onNavigateToQuestDetailsClick(): void {
        this.navigationService.navigateTo(SPQRoutesMap[SPQRoutesString.SPQ_QUEST] + "/" + this.flowBrief.currentTaskId);
    }

    private makeImageUrl(): SafeResourceUrl {
        return this.service.makeSafeImageUrl(this.flowBrief.url);
    }

    private subscribeToGetTaskBrief(): void {
        this.service.getTaskBriefById(this.flowBrief.currentTaskId)
            .pipe(
                tap(brief => {
                    this._currentTaskBrief = brief;
                })
            )
            .subscribe();
    }
}

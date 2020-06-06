import {Component, HostBinding, Input, OnInit} from "@angular/core";
import {SafeResourceUrl} from "@angular/platform-browser";
import {SPQQuestFlowBrief} from "../../../core/models/quest-task.type";
import {SPQTimelineService} from "../sevrvices/timeline.service";

@Component({
    selector: "spq-card",
    templateUrl: "card.component.html",
})
export class SPQCardComponent implements OnInit {

    @Input()
    public flowBrief: SPQQuestFlowBrief;

    public _safeUrl: SafeResourceUrl;

    @HostBinding("class.spq-card")
    private hostClass: boolean = true;

    constructor(private service: SPQTimelineService) {
    }

    public ngOnInit() {
        this._safeUrl = this.makeImageUrl();
    }

    private makeImageUrl(): SafeResourceUrl {
        return this.service.makeSafeImageUrl(this.flowBrief.url);
    }
}

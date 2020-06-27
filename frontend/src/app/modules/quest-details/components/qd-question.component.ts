import {Component, HostBinding, Input, OnChanges, SimpleChanges} from "@angular/core";
import {SafeUrl} from "@angular/platform-browser";
import {flashAnimations} from "../../../core/core.animations";
import {SPQQuestTask} from "../../../core/models/quest-task.type";
import {SPQQuestDetailsService} from "../services/quest-details.service";

export enum SPQQuestTaskUrlType {
    VIDEO = "video",
    PICTURE = "picture"
}


@Component({
    selector: "spq-qd-question",
    templateUrl: "qd-question.component.html",
    animations: [
        flashAnimations
    ]
})
export class SPQQuestDetailsQuestionComponent implements OnChanges {

    public _safeUrl: SafeUrl;

    public _questUrlType = SPQQuestTaskUrlType;

    public _taskType: SPQQuestTaskUrlType;

    @Input()
    public questTask: SPQQuestTask;

    @HostBinding("class.spq-qd-question")
    private hostClass: boolean = true;

    constructor(private questDetailsService: SPQQuestDetailsService) {}

    public ngOnChanges(changes: SimpleChanges): void {
        if (changes["questTask"]) {
            this.setTaskType();
            this.makeSafeUrl();
        }
    }

    private setTaskType(): void {
        this._taskType = this.questTask.url
            ?  this.questTask.url.includes(".")
                ? SPQQuestTaskUrlType.PICTURE
                : SPQQuestTaskUrlType.VIDEO
            : null;
    }

    private makeSafeUrl(): void {
        switch (this._taskType) {
            case SPQQuestTaskUrlType.PICTURE:
                this._safeUrl = this.questDetailsService.makeSafeImageUrl(this.questTask.url);
                break;
            case SPQQuestTaskUrlType.VIDEO:
                this._safeUrl = this.questDetailsService.makeSafeVideoUrl(this.questTask.url);
                break;
        }
    }
}

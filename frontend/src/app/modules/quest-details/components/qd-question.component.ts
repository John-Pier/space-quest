import {Component, HostBinding, Input, OnInit} from "@angular/core";
import {SafeUrl} from "@angular/platform-browser";
import {SPQQuestTask, SPQQuestTaskUrlType} from "../../../core/models/quest-task.type";
import {SPQQuestDetailsService} from "../services/quest-details.service";

@Component({
    selector: "spq-qd-question",
    templateUrl: "qd-question.component.html",
})
export class SPQQuestDetailsQuestionComponent implements OnInit {

    public _safeUrl: SafeUrl;

    public _questUrlType = SPQQuestTaskUrlType;

    @Input()
    public questTask: SPQQuestTask;

    @HostBinding("class.spq-qd-question")
    private hostClass: boolean = true;

    constructor(private questDetailsService: SPQQuestDetailsService) {}

    public ngOnInit() {
        switch (this.questTask.type) {
            case SPQQuestTaskUrlType.PICTURE:
                this._safeUrl = this.questDetailsService.makeSafeImageUrl(this.questTask.url);
                break;
            case SPQQuestTaskUrlType.VIDEO:
                this._safeUrl = this.questDetailsService.makeSafeVideoUrl(this.questTask.url);
                break;
            default:
                throw Error("Unknown questTask.type!");
        }
    }
}

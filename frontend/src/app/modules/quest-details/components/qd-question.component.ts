import {Component, HostBinding, Input, OnInit} from "@angular/core";
import {DomSanitizer, SafeUrl} from "@angular/platform-browser";
import {SPQQuestTask, SPQQuestTaskUrlType} from "../../../core/models/quest-task.type";

@Component({
    selector: "spq-qd-question",
    templateUrl: "qd-question.component.html",
})
export class SPQQuestDetailsQuestionComponent  implements OnInit {

    public _trustedUrl: SafeUrl;

    public _questUrlType = SPQQuestTaskUrlType;

    @Input()
    public questTask: SPQQuestTask;

    @HostBinding("class.spq-qd-question")
    private hostClass: boolean = true;

    constructor(private sanitizer: DomSanitizer) {}

    public ngOnInit() {
        if (this.questTask.type === SPQQuestTaskUrlType.VIDEO) {
            this._trustedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.makeVideoUrl());
        } else {
            this._trustedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.makePictureUrl());
        }
    }

    private makeVideoUrl(): string {
        return "https://www.youtube.com/embed/" + this.questTask.url + "?loop=1&modestbranding=1&color=white";
    }

    private makePictureUrl(): string {
        return this.questTask.url;
    }
}

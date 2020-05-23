import {Component, HostBinding, Input} from "@angular/core";
import {SPQQuestTask} from "../../../core/models/quest-task.type";

@Component({
    selector: "spq-qd-question",
    templateUrl: "qd-question.component.html",
})
export class SPQQuestDetailsQuestionComponent {

    @Input()
    public questTask: SPQQuestTask;

    @HostBinding("class.spq-qd-question")
    private hostClass: boolean = true;

    constructor() {}
}

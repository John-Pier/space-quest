import {Component, HostBinding, Input, OnInit} from "@angular/core";
import {SPQQuestTask} from "../../../core/models/quest-task.type";

@Component({
    selector: "spq-qd-answer",
    templateUrl: "qd-answer.component.html",
})
export class SPQQuestDetailsAnswerComponent implements OnInit {

    @Input()
    public questTask: SPQQuestTask;

    @HostBinding("class.spq-qd-answer")
    private hostClass: boolean = true;

    constructor() {}

    public ngOnInit() {}
}

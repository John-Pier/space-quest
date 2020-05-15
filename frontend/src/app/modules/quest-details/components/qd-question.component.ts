import {Component, HostBinding} from "@angular/core";

@Component({
    selector: "spq-qd-question",
    templateUrl: "qd-question.component.html",
})
export class SPQQuestDetailsQuestionComponent {

    @HostBinding("class.spq-qd-question")
    private hostClass: boolean = true;

    constructor() {}
}

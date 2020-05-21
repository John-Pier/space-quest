import {Component, HostBinding} from "@angular/core";

@Component({
    selector: "spq-qd-answer",
    templateUrl: "qd-answer.component.html",
})
export class SPQQuestDetailsAnswerComponent {

    @HostBinding("class.spq-qd-answer")
    private hostClass: boolean = true;

    constructor() {}
}

import {Component, HostBinding, Input} from "@angular/core";
import {SPQQuestFlowBrief} from "../../../core/models/quest-task.type";

@Component({
    selector: "spq-card",
    templateUrl: "card.component.html",
})
export class SPQCardComponent {

    @Input()
    public flowBrief: SPQQuestFlowBrief;

    @HostBinding("class.spq-card")
    private hostClass: boolean = true;

    constructor() {

    }
}

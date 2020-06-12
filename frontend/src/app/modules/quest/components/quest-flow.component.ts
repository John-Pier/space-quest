import {Component, HostBinding, Input, OnInit} from "@angular/core";
import {ID} from "../../../core/base.types";
import {SPQQuestFlow, SPQQuestTaskBrief} from "../../../core/models/quest-task.type";
import {SQPQuestFlowService} from "../services/quest-flow.service";
import {SPQQuestFlowConfig} from "../types/quest-flow.type";

@Component({
    selector: "spq-quest-flow",
    templateUrl: "quest-flow.component.html",
})
export class SPQQuestFlowComponent implements OnInit {

    @Input()
    public values: SPQQuestFlow;

    @Input()
    public config: SPQQuestFlowConfig;

    @HostBinding("class.spq-quest-flow")
    private hostClass: boolean = true;

    constructor(private questService: SQPQuestFlowService) {
    }

    public ngOnInit(): void {}

    public _trackCubeById(index, node: SPQQuestTaskBrief): string {
        return node.id.toString();
    }

    public _navigateToClickedQuestDetails(questId: ID): void {
        this.questService.navigateToQuestDetails(questId);
    }
}

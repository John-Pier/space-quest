import {Component, HostBinding, Input} from "@angular/core";
import {ID} from "../../../core/base.types";
import {SQPQuestFlowService} from "../services/quest-flow.service";
import {SPQQuestCube, SPQQuestFlow, SPQQuestFlowConfig} from "../types/quest.type";

@Component({
    selector: "spq-quest-flow",
    templateUrl: "quest-flow.component.html",
})
export class SPQQuestFlowComponent {

    @Input()
    public values: SPQQuestFlow;

    @Input()
    public config: SPQQuestFlowConfig;

    @HostBinding("class.spq-quest-flow")
    private hostClass: boolean = true;

    constructor(private questService: SQPQuestFlowService) {
    }

    public _trackCubeById(index, node: SPQQuestCube): string {
        return node.id;
    }

    public _navigateToClickedQuestDetails(questId: ID): void {
        this.questService.navigateToQuestDetails(questId);
    }
}

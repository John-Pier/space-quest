import {Component, HostBinding, Input} from "@angular/core";
import {SPQQuestCube, SPQQuestFlow, SPQQuestFlowConfig} from "../types/quest.type";

@Component({
    selector: "spq-quest-flow",
    templateUrl: "quest-flow.component.html",
})
export class SPQQuestFlowComponent {

    @Input()
    public values: SPQQuestFlow;

    @Input()
    public config: SPQQuestFlowConfig

    @HostBinding("class.spq-quest-flow")
    private hostClass: boolean = true;

    constructor() {
    }

    public _trackCubeById(index, node: SPQQuestCube) : string {
        return node.id;
    }
}

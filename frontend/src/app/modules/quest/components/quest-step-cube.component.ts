import {Component, HostBinding, Input} from "@angular/core";

@Component({
    selector: "spq-quest-step-cube",
    templateUrl: "quest-step-cube.component.html",
})
export class SPQQuestStepCubeComponent {

    @Input()
    public title: string;

    @Input()
    public subtitle: string;

    @Input()
    public serialNumber: number;

    @HostBinding("class.spq-quest-step-cube")
    private hostClass: boolean = true;

    constructor() {

    }
}

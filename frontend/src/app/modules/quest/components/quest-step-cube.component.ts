import {ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Input, Output} from "@angular/core";

@Component({
    selector: "spq-quest-step-cube",
    templateUrl: "quest-step-cube.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SPQQuestStepCubeComponent {

    @Input()
    public title: string;

    @Input()
    public subtitle: string;

    @Input()
    public serialNumber: number;

    @Input()
    public isSelected: boolean = false

    @Output()
    public onClick: EventEmitter<string> = new EventEmitter<string>()

    @HostBinding("class.spq-quest-step-cube")
    private hostClass: boolean = true;

    constructor() {

    }
}

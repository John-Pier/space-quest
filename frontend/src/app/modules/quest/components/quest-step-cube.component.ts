import {ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Input, Output} from "@angular/core";
import {ID} from "../../../core/base.types";

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
    public selected: boolean = false;

    @Input()
    public disabled: boolean = false;

    @Input()
    public highlighted: boolean = false;

    @Input()
    public id: ID;

    @Output()
    public onClick: EventEmitter<ID> = new EventEmitter<ID>();

    @HostBinding("class.spq-quest-step-cube")
    private hostClass: boolean = true;

    public _onStepCubeClick(): void {
        if (!this.disabled) {
            this.onClick.emit(this.id);
        }
    }
}

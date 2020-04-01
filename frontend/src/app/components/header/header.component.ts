import {ChangeDetectionStrategy, Component, HostBinding, Input, TemplateRef} from "@angular/core";
import {SPQTabsModel} from "./model/tabs.type";

@Component({
    selector: "spq-header",
    templateUrl: "header.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SPQHeaderComponent {

    @Input()
    public logoTemplate: TemplateRef<any>;

    @Input()
    public logoLabel: string;

    @Input()
    public models: SPQTabsModel[];

    @Input()
    public template: TemplateRef<any>;

    @HostBinding("class.spq-header")
    private hostClass: boolean = true;

    constructor() {
    }


}

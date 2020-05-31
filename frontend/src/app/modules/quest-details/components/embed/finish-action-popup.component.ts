import {Component, HostBinding} from "@angular/core";

@Component({
    selector: "spq-finish-action-popup",
    templateUrl: "finish-action-popup.component.html",
})
export class SPQFinishActionPopupComponent {

    @HostBinding("class.spq-finish-action-popup")
    private hostClass: boolean = true;

    constructor() {
    }
}

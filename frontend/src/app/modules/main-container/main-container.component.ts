import {Component, HostBinding} from "@angular/core";

@Component({
    selector: "spq-main-container",
    templateUrl: "main-container.component.html",
})
export class SPQMainContainerComponent {

    @HostBinding("class.spq-main-container")
    private hostClass: boolean = true;

    constructor() {

    }
}

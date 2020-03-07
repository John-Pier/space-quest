import {Component, HostBinding} from "@angular/core";

@Component({
    selector: "spq-header",
    templateUrl: "header.component.html",
})
export class SPQHeaderComponent {

    @HostBinding("class.spq-header")
    private hostClass: boolean = true;

    constructor() {

    }
}

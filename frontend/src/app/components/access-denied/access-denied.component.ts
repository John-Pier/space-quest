import {Component, HostBinding} from "@angular/core";

@Component({
    selector: "spq-access-denied",
    templateUrl: "access-denied.component.html",
})
export class SPQAccessDeniedComponent {

    @HostBinding("class.spq-access-denied")
    private hostClass: boolean = true;

    constructor() {
    }
}

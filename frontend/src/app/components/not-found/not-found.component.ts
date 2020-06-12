import {Component, HostBinding} from "@angular/core";

@Component({
    selector: "spq-not-found",
    templateUrl: "not-found.component.html",
})
export class SPQNotFoundComponent {

    @HostBinding("class.spq-not-found")
    private hostClass: boolean = true;

    constructor() {
    }
}

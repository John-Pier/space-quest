import {Component, HostBinding} from "@angular/core";

@Component({
    selector: "spq-card",
    templateUrl: "card.component.html",
})
export class SPQCardComponent {

    @HostBinding("class.spq-card")
    private hostClass: boolean = true;

    constructor() {

    }
}

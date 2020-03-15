import {Component, HostBinding} from "@angular/core";

@Component({
    selector: "spq-quest",
    templateUrl: "quest.component.html",
})
export class SPQQuesComponent {

    @HostBinding("class.spq-quest")
    private hostClass: boolean = true;

    constructor() {

    }
}

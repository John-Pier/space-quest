import {Component, HostBinding} from "@angular/core";

@Component({
    selector: "spq-timeline",
    templateUrl: "timeline.component.html",
})
export class SPQTimelineComponent {

    @HostBinding("class.spq-timeline")
    private hostClass: boolean = true;

    constructor() {

    }
}

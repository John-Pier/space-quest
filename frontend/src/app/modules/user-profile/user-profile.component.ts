import {Component, HostBinding} from "@angular/core";

@Component({
    selector: "spq-user-profile",
    templateUrl: "user-profile.component.html",
})
export class SPQUserProfileComponent {

    @HostBinding("class.spq-user-profile")
    private hostClass: boolean = true;

    constructor() {

    }
}

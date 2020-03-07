import {ChangeDetectionStrategy, Component, HostBinding} from "@angular/core";

@Component({
    selector: "spq-auth",
    templateUrl: "auth.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SPQAuthComponent {

    @HostBinding("class.spq-auth")
    private hostClass: boolean = true;

    constructor() {

    }
}

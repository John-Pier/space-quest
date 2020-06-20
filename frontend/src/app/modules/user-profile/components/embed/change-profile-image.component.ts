import {Component, HostBinding} from "@angular/core";
import {MatBottomSheetRef} from "@angular/material";

@Component({
    selector: "spq-change-pi",
    templateUrl: "change-pi.component.html",
})
export class SPQChangePIComponent {

    @HostBinding("class.spq-change-pi")
    private hostClass: boolean = true;

    constructor(private _bottomSheetRef: MatBottomSheetRef<SPQChangePIComponent>) {
    }
}

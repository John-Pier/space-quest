import {Component, HostBinding, Inject} from "@angular/core";
import {MAT_DIALOG_DATA} from "@angular/material";

@Component({
    selector: "spq-hint-popup",
    templateUrl: "hint-popup.component.html",
})
export class SPQHintPopupComponent {

    public _hint: string = "";

    @HostBinding("class.spq-hint-popup")
    private hostClass: boolean = true;

    constructor(@Inject(MAT_DIALOG_DATA) hint: string) {
        this._hint = hint;
    }
}

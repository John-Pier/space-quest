import {Component, HostBinding, Inject} from "@angular/core";
import {MAT_DIALOG_DATA} from "@angular/material";
import {SPQActionsPopupResult} from "../../types/actions-popup-result";

@Component({
    selector: "spq-finish-action-popup",
    templateUrl: "finish-action-popup.component.html",
})
export class SPQFinishActionPopupComponent {

    public _actionsPopupResult = SPQActionsPopupResult;

    public _nextDisable: boolean;

    @HostBinding("class.spq-finish-action-popup")
    private hostClass: boolean = true;

    constructor(@Inject(MAT_DIALOG_DATA) nextQuestDetailsExist: boolean) {
        this._nextDisable = !nextQuestDetailsExist;
    }
}

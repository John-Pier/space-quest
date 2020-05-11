import {Component, HostBinding} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {ID} from "../../core/base.types";
import {SPQNavigationService} from "../../services/navigation.service";

@Component({
    selector: "spq-quest-details",
    templateUrl: "quest-details.component.html",
})
export class SPQQuestDetailsComponent {

    private currentQuestId: ID;

    @HostBinding("class.spq-quest-details")
    private hostClass: boolean = true;

    constructor(private route: ActivatedRoute,
                private navigationService: SPQNavigationService) {
        this.currentQuestId = this.route.snapshot.paramMap.get("id");
    }

    public _onBackClick(): void {
        this.navigationService.back();
    }
}

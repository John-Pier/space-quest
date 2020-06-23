import {ChangeDetectionStrategy, Component, HostBinding, OnDestroy} from "@angular/core";
import {flashAnimations} from "../../core/core.animations";
import {SPQLoaderService} from "./services/loader.service";

@Component({
    selector: "spq-loader",
    templateUrl: "loader.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [
        flashAnimations
    ]
})
export class SPQLoaderComponent implements OnDestroy {

    @HostBinding("class.spq-loader")
    private hostClass: boolean = true;

    constructor(public loaderService: SPQLoaderService) {}

    public ngOnDestroy(): void {
        this.loaderService._complete();
    }
}

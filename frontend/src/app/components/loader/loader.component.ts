import {ChangeDetectionStrategy, Component, HostBinding, OnDestroy} from "@angular/core";
import {SPQLoaderService} from "./services/loader.service";

@Component({
    selector: "spq-loader",
    templateUrl: "loader.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SPQLoaderComponent implements OnDestroy {

    @HostBinding("class.spq-loader")
    private hostClass: boolean = true;

    constructor(public loaderService: SPQLoaderService) {}

    public ngOnDestroy(): void {
        this.loaderService._complete();
    }
}

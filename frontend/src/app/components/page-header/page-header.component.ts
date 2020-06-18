import {ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Input, Output} from "@angular/core";
import {SPQNavigationService} from "../../services/navigation.service";

@Component({
    selector: "spq-page-header",
    templateUrl: "page-header.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SPQPageHeaderComponent {

    @Input()
    public pageTitle: string;

    @Output()
    public onBackClick: EventEmitter<void> = new EventEmitter<void>();

    @HostBinding("class.spq-page-header")
    private hostClass: boolean = true;

    constructor(private navigationService: SPQNavigationService) {}

    public _onBackClick(): void {
        this.navigationService.back();
        this.onBackClick.emit();
    }
}

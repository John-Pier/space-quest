import {Component, HostBinding, OnInit} from "@angular/core";
import {SPQTabsModel} from "../../components/header/model/tabs.type";
import {SPQNavigationService} from "../../services/navigation.service";

@Component({
    selector: "spq-main-container",
    templateUrl: "main-container.component.html",
})
export class SPQMainContainerComponent implements OnInit {

    public _models: SPQTabsModel[];

    @HostBinding("class.spq-main-container")
    private hostClass: boolean = true;

    constructor(private navigationService: SPQNavigationService) {
    }

    public ngOnInit() {
        this._models = [
            {
                tabName: "Main",
                route: "/main/timeline",
            },
            {
                tabName: "game",
                route: "/main/game",
            },
            {
                tabName: "LOL",
                route: "/main/game",
            },
            {
                tabName: "404",
                route: "/main/404",
            }
        ];

    }

    public _navigateTo(route: string) {
        this.navigationService.navigateTo(route);
    }
}

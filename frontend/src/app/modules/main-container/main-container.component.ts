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
                route: "/timeline",
            },
            {
                tabName: "game",
                route: "/game",
            },
            {
                tabName: "LOL",
                route: "/game",
            },
            {
                tabName: "404",
                route: "/404",
            }
        ];

    }

    public _navigateTo(route: string) {
        this.navigationService.navigateTo(route);
    }
}

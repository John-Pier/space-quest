import {Component, HostBinding, OnInit} from "@angular/core";
import {SPQRoutesMap, SPQRoutesString} from "../../app-routers";
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
                route: SPQRoutesMap[SPQRoutesString.SPQ_TIMELINE],
            },
            {
                tabName: "Quest",
                route: SPQRoutesMap[SPQRoutesString.SPQ_QUEST],
            },
            {
                tabName: "Profile",
                route: SPQRoutesMap[SPQRoutesString.SPQ_USER_PROFILE],
            },
            {
                tabName: "Test 404",
                route: "/main/lol",
            }
        ];

    }

    public _navigateTo(route: string) {
        this.navigationService.navigateTo(route);
    }
}

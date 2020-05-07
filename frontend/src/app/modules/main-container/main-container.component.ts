import {Component, HostBinding, OnInit} from "@angular/core";
import {SPQRoutesMap, SPQRoutesString} from "../../app-routers";
import {SPQTabsModel} from "../../components/header/model/tabs.type";
import {SPQNavigationService} from "../../services/navigation.service";
import {SPQStorageService} from "../../services/storage.service";

@Component({
    selector: "spq-main-container",
    templateUrl: "main-container.component.html",
})
export class SPQMainContainerComponent implements OnInit {

    public _models: SPQTabsModel[];

    public _userEmail: string = this.storageService.getUserEmail();

    @HostBinding("class.spq-main-container")
    private hostClass: boolean = true;

    constructor(private navigationService: SPQNavigationService,
                private storageService: SPQStorageService) {
    }

    public ngOnInit(): void {
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

    public _navigateTo(route: string): void {
        this.navigationService.navigateTo(route);
    }

    public _logoutClick(): void {
        this.navigationService.navigateTo(SPQRoutesMap[SPQRoutesString.SPQ_AUTH]);
    }
}

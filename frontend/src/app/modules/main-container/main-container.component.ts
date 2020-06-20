import {Component, HostBinding, Inject, OnInit} from "@angular/core";
import {SPQRoutesMap, SPQRoutesString} from "../../app-routers";
import {SPQ_CONTACTS_DATA_CONFIG, SPQContactsDataConfig} from "../../app.config";
import {SPQTabsModel} from "../../components/header/model/tabs.type";
import {SPQNavigationService} from "../../services/navigation.service";
import {SPQStorageService} from "../../services/storage.service";

@Component({
    selector: "spq-main-container",
    templateUrl: "main-container.component.html",
})
export class SPQMainContainerComponent implements OnInit {

    public _models: SPQTabsModel[];

    public _username: string = this.storageService.getFirstName();

    @HostBinding("class.spq-main-container")
    private hostClass: boolean = true;

    constructor(private navigationService: SPQNavigationService,
                private storageService: SPQStorageService,
                @Inject(SPQ_CONTACTS_DATA_CONFIG) public _contactsDataConfig: SPQContactsDataConfig) {
    }

    public ngOnInit(): void {
        this._models = [
            {
                tabName: "Главная",
                route: SPQRoutesMap[SPQRoutesString.SPQ_TIMELINE],
            },
            {
                tabName: "Квесты",
                route: SPQRoutesMap[SPQRoutesString.SPQ_QUEST],
            }
        ];

    }

    public _navigateTo(route: string): void {
        this.navigationService.navigateTo(route);
    }

    public _logoutClick(): void {
        this.navigationService.navigateTo(SPQRoutesMap[SPQRoutesString.SPQ_AUTH]);
    }

    public _onNavigateToUserProfileClick() {
        this.navigationService.navigateTo(SPQRoutesMap[SPQRoutesString.SPQ_USER_PROFILE]);
    }
}

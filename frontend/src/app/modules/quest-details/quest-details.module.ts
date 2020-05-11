import {CommonModule} from "@angular/common";
import {NgModule, Type} from "@angular/core";
import {MatButtonModule, MatTabsModule} from "@angular/material";
import {RouterModule, Routes} from "@angular/router";
import {SPQQuestDetailsComponent} from "./quest-details.component";

const QuestDetailsRoutes: Routes = [
    {
        path: "",
        component: SPQQuestDetailsComponent
    }
];

const matModules: Array<Type<any>> = [
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(QuestDetailsRoutes),
        ...matModules,
        MatButtonModule,
        MatTabsModule
    ],
    declarations: [
        SPQQuestDetailsComponent
    ],
    exports: [
        SPQQuestDetailsComponent
    ]
})
export class SPQQuestDetailsModule {
}

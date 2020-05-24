import {CommonModule} from "@angular/common";
import {NgModule, Type} from "@angular/core";
import {MatButtonModule, MatInputModule, MatTabsModule} from "@angular/material";
import {RouterModule, Routes} from "@angular/router";
import {SPQQuestDetailsDataService} from "../../services/data/quest-details-data.service";
import {SPQQuestDetailsAnswerComponent} from "./components/qd-answer.component";
import {SPQQuestDetailsQuestionComponent} from "./components/qd-question.component";
import {SPQQuestDetailsComponent} from "./quest-details.component";
import {SPQQuestDetailsService} from "./services/quest-details.service";
import {SPQQuestTaskResolver} from "./services/quest-task.resolver";

const QuestDetailsRoutes: Routes = [
    {
        path: "",
        component: SPQQuestDetailsComponent,
        resolve: {
            questTask: SPQQuestTaskResolver
        }
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
        MatTabsModule,
        MatInputModule
    ],
    declarations: [
        SPQQuestDetailsComponent,
        SPQQuestDetailsQuestionComponent,
        SPQQuestDetailsAnswerComponent
    ],
    exports: [
        SPQQuestDetailsComponent
    ],
    providers: [
        SPQQuestDetailsDataService,
        SPQQuestDetailsService,
        SPQQuestTaskResolver
    ]
})
export class SPQQuestDetailsModule {
}

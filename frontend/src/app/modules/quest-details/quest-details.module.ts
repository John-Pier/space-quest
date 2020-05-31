import {CommonModule} from "@angular/common";
import {NgModule, Type} from "@angular/core";
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule, MatDialogModule, MatInputModule, MatTabsModule, MatTooltipModule} from "@angular/material";
import {RouterModule, Routes} from "@angular/router";
import {SPQQuestDetailsDataService} from "../../services/data/quest-details-data.service";
import {SPQFinishActionPopupComponent} from "./components/embed/finish-action-popup.component";
import {SPQHintPopupComponent} from "./components/embed/hint-popup.component";
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
    MatDialogModule,
    MatButtonModule,
    MatTabsModule,
    MatInputModule,
    MatTooltipModule
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(QuestDetailsRoutes),
        ReactiveFormsModule,
        ...matModules
    ],
    declarations: [
        SPQQuestDetailsComponent,
        SPQQuestDetailsQuestionComponent,
        SPQQuestDetailsAnswerComponent,
        SPQFinishActionPopupComponent,
        SPQHintPopupComponent
    ],
    entryComponents: [
        SPQFinishActionPopupComponent,
        SPQHintPopupComponent
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

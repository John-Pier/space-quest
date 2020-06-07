import {CommonModule} from "@angular/common";
import {NgModule, Type} from "@angular/core";
import {MatRippleModule} from "@angular/material";
import {RouterModule, Routes} from "@angular/router";
import {SQPQuestFlowDataService} from "../../services/data/quest-data-flow.service";
import {SPQQuestFlowComponent} from "./components/quest-flow.component";
import {SPQQuestStepCubeComponent} from "./components/quest-step-cube.component";
import {SPQQuesComponent} from "./quest.component";
import {SQPQuestFlowService} from "./services/quest-flow.service";

const QuestRoutes: Routes = [
    {
        path: "",
        component: SPQQuesComponent
    }
];

const matModules: Array<Type<any>> = [
    MatRippleModule
];

@NgModule({
    declarations: [
        SPQQuesComponent,
        SPQQuestStepCubeComponent,
        SPQQuestFlowComponent
    ],
    exports: [
        SPQQuesComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(QuestRoutes),
        ...matModules
    ],
    providers: [
        SQPQuestFlowDataService,
        SQPQuestFlowService
    ]

})
export class SPQQuestModule {}

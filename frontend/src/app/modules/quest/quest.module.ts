import {CommonModule} from "@angular/common";
import {NgModule, Type} from "@angular/core";
import {MatRippleModule} from "@angular/material";
import {RouterModule, Routes} from "@angular/router";
import {SPQQuestStepCubeComponent} from "./components/quest-step-cube.component";
import {SPQQuesComponent} from "./quest.component";

const QuestRoutes: Routes = [
    {
        path: '',
        component: SPQQuesComponent
    }
];

const matModules: Array<Type<any>> = [
    MatRippleModule
];

@NgModule({
    declarations: [
        SPQQuesComponent,
        SPQQuestStepCubeComponent
    ],
    exports: [
        SPQQuesComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(QuestRoutes),
        ...matModules
    ],
    providers: []

})
export class SPQQuestModule {}

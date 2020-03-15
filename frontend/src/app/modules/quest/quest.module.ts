import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {SPQQuesComponent} from "./quest.component";

const QuestRoutes: Routes = [
    {
        path: '',
        component: SPQQuesComponent
    }
];

@NgModule({
    declarations: [
        SPQQuesComponent
    ],
    exports: [
        SPQQuesComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(QuestRoutes)
    ],
    providers: []

})
export class SPQQuestModule {}

import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material";
import {MatCardModule} from "@angular/material/card";
import {MatExpansionModule} from "@angular/material/expansion";
import {RouterModule, Routes} from "@angular/router";
import {SPQCardComponent} from "./components/card.component";
import {SPQTimelineComponent} from "./timeline.component";

const TimelineRouters: Routes = [
    {
        path: "",
        component: SPQTimelineComponent
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(TimelineRouters),
        FormsModule,
        MatButtonModule,
        MatCardModule,
        MatExpansionModule
    ],
    declarations: [
        SPQTimelineComponent,
        SPQCardComponent
    ],
    exports: [
        SPQTimelineComponent
    ],
    providers: []
})
export class SPQTimelineModule {
}

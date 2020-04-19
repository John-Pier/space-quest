import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material";
import {RouterModule, Routes} from "@angular/router";
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
        MatButtonModule
    ],
    declarations: [
        SPQTimelineComponent
    ],
    exports: [
        SPQTimelineComponent
    ],
    providers: []
})
export class SPQTimelineModule {
}

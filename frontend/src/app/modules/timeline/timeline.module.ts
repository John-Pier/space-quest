import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
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
        RouterModule.forChild(TimelineRouters)
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

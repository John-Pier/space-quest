import {Routes} from "@angular/router";
import {SPQRoutesString} from "../../app-routers";

export const MAIN_ROUTES: Routes = [
    {
        path: "",
        pathMatch: "full",
        redirectTo: SPQRoutesString.SPQ_TIMELINE
    },
    {
        path: SPQRoutesString.SPQ_TIMELINE,
        loadChildren: () => import("../timeline/timeline.module").then(m => m.SPQTimelineModule)
    },
    {
        path: SPQRoutesString.SPQ_QUEST,
        loadChildren: () => import("../quest/quest.module").then(m => m.SPQQuestModule)
    },
    {
        path: '**',
        redirectTo: SPQRoutesString.SPQ_TIMELINE
    }
];

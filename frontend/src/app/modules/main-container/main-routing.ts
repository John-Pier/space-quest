import {Routes} from "@angular/router";

export const MAIN_ROUTES: Routes = [
    {
        path: "timeline",
        loadChildren: () => import("../timeline/timeline.module").then(m => m.SPQTimelineModule)
    },
    {
        path: "",
        pathMatch: "full",
        redirectTo: "/timeline"
    }
];

import {Routes} from "@angular/router";
import {SPQRoutesString} from "../../app-routers";
import {SPQNotFoundComponent} from "../../components/not-found/not-found.component";
import {SPQAuthGuard} from "../../core/security/guards/auth.guard";

export const MAIN_ROUTES: Routes = [
    {
        path: "",
        pathMatch: "full",
        redirectTo: SPQRoutesString.SPQ_TIMELINE
    },
    {
        path: SPQRoutesString.SPQ_TIMELINE,
        canActivate: [SPQAuthGuard],
        loadChildren: () => import("../timeline/timeline.module").then(m => m.SPQTimelineModule)
    },
    {
        path: SPQRoutesString.SPQ_QUEST,
        canActivate: [SPQAuthGuard],
        loadChildren: () => import("../quest/quest.module").then(m => m.SPQQuestModule)
    },
    {
        path: SPQRoutesString.SPQ_USER_PROFILE,
        canActivate: [SPQAuthGuard],
        loadChildren: () => import("../user-profile/user-profile.module").then(m => m.SPQUserProfileModule)
    },
    {
        path: SPQRoutesString.SPQ_NOT_FOUND,
        component: SPQNotFoundComponent
    },
    {
        path: '**',
        redirectTo: SPQRoutesString.SPQ_NOT_FOUND
    }
];

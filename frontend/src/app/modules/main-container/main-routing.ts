import {Routes} from "@angular/router";
import {defaultAbsoluteRoute, SPQRoutesString} from "../../app-routers";
import {SPQAccessDeniedComponent} from "../../components/access-denied/access-denied.component";
import {SPQNotFoundComponent} from "../../components/not-found/not-found.component";
import {SPQAuthGuard} from "../../core/security/guards/auth.guard";

export const MAIN_ROUTES: Routes = [
    {
        path: "",
        pathMatch: "full",
        redirectTo: defaultAbsoluteRoute
    },
    {
        path: SPQRoutesString.SPQ_TIMELINE,
        canLoad: [SPQAuthGuard],
        loadChildren: () => import("../timeline/timeline.module").then(m => m.SPQTimelineModule)
    },
    {
        path: SPQRoutesString.SPQ_QUEST,
        canLoad: [SPQAuthGuard],
        loadChildren: () => import("../quest/quest.module").then(m => m.SPQQuestModule)
    },
    {
        path: SPQRoutesString.SPQ_USER_PROFILE,
        canLoad: [SPQAuthGuard],
        loadChildren: () => import("../user-profile/user-profile.module").then(m => m.SPQUserProfileModule)
    },
    {
      path: SPQRoutesString.SPQ_QUEST_STEP,
      canLoad: [SPQAuthGuard],
      loadChildren: () => import("../quest-details/quest-details.module").then(m => m.SPQQuestDetailsModule)
    },
    {
        path: SPQRoutesString.SPQ_NOT_FOUND,
        component: SPQNotFoundComponent
    },
    {
        path: SPQRoutesString.SPQ_ACCESS_DENIED,
        component: SPQAccessDeniedComponent
    },
    {
        path: "**",
        redirectTo: SPQRoutesString.SPQ_NOT_FOUND
    }
];

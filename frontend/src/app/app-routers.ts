import {Routes} from "@angular/router";

export enum SPQRoutesString {
    SPQ_MAIN = "main",
    SPQ_AUTH = "auth",
    SPQ_TIMELINE = "timeline",
    SPQ_QUEST ="quest"
}

export const spqRoutes: Routes = [
    {
        path: SPQRoutesString.SPQ_AUTH,
        loadChildren: () => import("./modules/auth/auth.module").then(m => m.SPQAuthModule)
    },
    {
        path: SPQRoutesString.SPQ_MAIN,
        loadChildren: () => import("./modules/main-container/main-container.module").then(m => m.SPQMainContainerModule)
    },
    {
        path: "",
        pathMatch: "full",
        redirectTo: SPQRoutesString.SPQ_MAIN
    },
    {
        path: "**",
        redirectTo: SPQRoutesString.SPQ_MAIN
    }
];



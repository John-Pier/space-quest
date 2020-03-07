import {Routes} from "@angular/router";

export const appRoutes: Routes = [
    {
        path: "auth",
        loadChildren: () => import("./modules/auth/auth.module").then(m => m.SPQAuthModule)
    },
    {
        path: "main",
        loadChildren: () => import("./modules/main-container/main-container.module").then(m => m.SPQMainContainerModule)
    },
    {
        path: "",
        pathMatch: "full",
        redirectTo: "/main"
    }
   // { path: 'hero/:id',      component: HeroDetailComponent },
   //  {
   //      path: 'heroes',
   //      component: HeroListComponent,
   //      data: { title: 'Heroes List' }
   //  },
   //  { path: '',
   //      redirectTo: '/heroes',
   //      pathMatch: 'full'
   //  },
   //  { path: '**', component: PageNotFoundComponent }
];

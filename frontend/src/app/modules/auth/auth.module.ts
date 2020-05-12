import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule, MatFormFieldModule, MatInputModule, MatProgressBarModule, MatTabsModule} from "@angular/material/";
import {RouterModule, Routes} from "@angular/router";
import {SPQAuthDataService} from "../../services/data/auth-data.service";
import {SPQAuthComponent} from "./auth.component";

const authRouters: Routes = [
    {
        path: "",
        component: SPQAuthComponent
    }
];

const matModules: Array<any> = [
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    MatButtonModule,
    MatProgressBarModule
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(authRouters),
        ReactiveFormsModule,
        ...matModules
    ],
    declarations: [
        SPQAuthComponent
    ],
    exports: [
        SPQAuthComponent
    ],
    providers: [
        SPQAuthDataService
    ]
})
export class SPQAuthModule {}

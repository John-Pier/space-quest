import {ChangeDetectionStrategy, Component, HostBinding, OnInit} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {SPQAuthService} from "./services/auth.service";

@Component({
    selector: "spq-auth",
    templateUrl: "auth.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        SPQAuthService
    ]
})
export class SPQAuthComponent implements OnInit{

    public _loginForm;

    public _registrationForm;

    @HostBinding("class.spq-auth")
    private hostClass: boolean = true;

    constructor(private authService: SPQAuthService) {
    }

    public ngOnInit() {
        this._loginForm = new FormGroup({
            email: new FormControl('',[Validators.required]),
            password: new FormControl('',[Validators.required]),
        });
    }
}

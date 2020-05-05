import {ChangeDetectionStrategy, Component, HostBinding, OnInit} from "@angular/core";
import {FormControl, FormGroup, ValidatorFn, Validators} from "@angular/forms";
import {tap} from "rxjs/operators";
import {SPQRoutesMap, SPQRoutesString} from "../../app-routers";
import {SPQNavigationService} from "../../services/navigation.service";
import {SPQAuthService} from "./services/auth.service";

@Component({
    selector: "spq-auth",
    templateUrl: "auth.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        SPQAuthService
    ]
})
export class SPQAuthComponent implements OnInit {

    public _loginForm: FormGroup;

    public _registrationForm: FormGroup;

    @HostBinding("class.spq-auth")
    private hostClass: boolean = true;

    constructor(private authService: SPQAuthService,
                private navigationService: SPQNavigationService) {
    }

    public ngOnInit() {
        this.createLoginForm();
        this.createRegistrationForm();
    }

    public onValidRegisterClick(): void {
        this.authService.attemptRegistration({
            login: this._registrationForm.value["email"],
            pass: this._registrationForm.value["password"],
            firstName: this._registrationForm.value["firstName"],
            lastName: this._registrationForm.value["lastName"],
        })
            .pipe(
                tap(() => {
                    // loader.setLoad(false)
                })
            )
            .subscribe(
                (response) => {
                    this.authService.setResponseModelToStore(response);
                    this.navigationService.navigateTo(SPQRoutesMap[SPQRoutesString.SPQ_MAIN])
                },
                () => {
                    this._registrationForm.setErrors({
                        password: "Error"
                    });
                }
            );
    }

    public onValidLoginClick(): void {
        this.authService.attemptAuthentication({
            login: this._loginForm.value["email"],
            pass: this._loginForm.value["password"],
        })
            .pipe(
                tap(() => {
                    // loader.setLoad(false)
                })
            )
            .subscribe(
                (response) => {
                    this.authService.setResponseModelToStore(response);
                    this.navigationService.navigateTo(SPQRoutesMap[SPQRoutesString.SPQ_MAIN])
                },
                () => {
                    this._loginForm.setErrors({
                        password: "Error"
                    });
                }
            );
    }

    private createLoginForm(): void {
        this._loginForm = new FormGroup({
            email: new FormControl("", [...this.getValidatorsForFields(), Validators.email]),
            password: new FormControl("", this.getValidatorsForFields()),
        });
    }

    private createRegistrationForm(): void {
        this._registrationForm = new FormGroup({
            firstName: new FormControl("", this.getValidatorsForFields()),
            lastName: new FormControl("", [Validators.min(4)]),
            email: new FormControl("", [...this.getValidatorsForFields(), Validators.email]),
            password: new FormControl("", this.getValidatorsForFields()),
        });
    }

    private getValidatorsForFields(): ValidatorFn[] {
        return [Validators.required, Validators.min(5)];
    }

    public getErrorMessage(): string {
        return "Введены некорректные данные!";
    }
}

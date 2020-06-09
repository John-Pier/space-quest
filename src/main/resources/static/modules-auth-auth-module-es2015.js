(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-auth-auth-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/auth.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/auth.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"spq-auth__inner\">\n    <div class=\"spq-auth__inner-form\">\n        <mat-progress-bar *ngIf=\"_loading\"\n                          class=\"progress-line\"\n                          mode=\"indeterminate\">\n        </mat-progress-bar>\n        <mat-tab-group [dynamicHeight]=\"true\"\n                       mat-align-tabs=\"center\">\n            <mat-tab label=\"Вход\">\n                <form class=\"spq-auth__form\"\n                      [formGroup]=\"_loginForm\"\n                      (ngSubmit)=\"onValidLoginClick()\">\n                    <mat-form-field appearance=\"outline\"\n                                    [hideRequiredMarker]=\"false\">\n                        <mat-label>Логин</mat-label>\n                        <input type=\"text\"\n                               placeholder=\"Введите ваш логин\"\n                               formControlName=\"login\"\n                               matInput>\n                    </mat-form-field>\n                    <mat-form-field appearance=\"outline\">\n                        <mat-label>Пароль</mat-label>\n                        <input type=\"password\"\n                               placeholder=\"Введите ваш пароль\"\n                               formControlName=\"password\"\n                               matInput>\n                        <mat-error *ngIf=\"_loginForm.invalid\">{{getErrorMessage()}}</mat-error>\n                    </mat-form-field>\n                    <mat-error class=\"spq-auth__form-error\"\n                               *ngIf=\"_loginMessage\">\n                        {{_loginMessage}}\n                    </mat-error>\n                    <button class=\"spq-auth__form-submit\"\n                            mat-button\n                            color=\"accent\"\n                            type=\"submit\"\n                            mat-raised-button\n                            [disabled]=\"!_loginForm.valid || _loading\">\n                        Войти\n                    </button>\n                </form>\n            </mat-tab>\n            <mat-tab label=\"Регистрация\">\n                <form class=\"spq-auth__form\"\n                      [formGroup]=\"_registrationForm\"\n                      (ngSubmit)=\"onValidRegisterClick()\">\n                    <mat-form-field appearance=\"outline\">\n                        <mat-label>Ваше Имя</mat-label>\n                        <input type=\"text\"\n                               placeholder=\"Имя\"\n                               formControlName=\"firstName\"\n                               matInput>\n                    </mat-form-field>\n                    <mat-form-field appearance=\"outline\">\n                        <mat-label>Email</mat-label>\n                        <input type=\"email\"\n                               placeholder=\"Введите ваш Email\"\n                               formControlName=\"email\"\n                               matInput>\n                        <mat-error *ngIf=\"_registrationForm.controls.email.invalid\">Некорректный Email</mat-error>\n                    </mat-form-field>\n                    <mat-form-field appearance=\"outline\">\n                        <mat-label>Логин</mat-label>\n                        <input type=\"text\"\n                               placeholder=\"Логин\"\n                               formControlName=\"login\"\n                               matInput>\n                    </mat-form-field>\n                    <mat-form-field appearance=\"outline\">\n                        <mat-label>Пароль</mat-label>\n                        <input type=\"password\"\n                               placeholder=\"Введите ваш пароль\"\n                               formControlName=\"password\"\n                               matInput>\n                    </mat-form-field>\n                    <mat-error class=\"spq-auth__form-error\"\n                               *ngIf=\"_registrationMessage\">\n                        {{_registrationMessage}}\n                    </mat-error>\n                    <button class=\"spq-auth__form-submit\"\n                            mat-button\n                            color=\"accent\"\n                            mat-raised-button\n                            [formAction]=\"'submit'\"\n                            [disabled]=\"!_registrationForm.valid || _loading\">\n                        Зарегистрироваться\n                    </button>\n                </form>\n            </mat-tab>\n        </mat-tab-group>\n\n    </div>\n</div>\n");

/***/ }),

/***/ "./src/app/modules/auth/auth.component.ts":
/*!************************************************!*\
  !*** ./src/app/modules/auth/auth.component.ts ***!
  \************************************************/
/*! exports provided: SPQAuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPQAuthComponent", function() { return SPQAuthComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _app_routers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../app-routers */ "./src/app/app-routers.ts");
/* harmony import */ var _services_navigation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/navigation.service */ "./src/app/services/navigation.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/modules/auth/services/auth.service.ts");








// TODO: big refactoring!
let SPQAuthComponent = class SPQAuthComponent {
    constructor(authService, navigationService) {
        this.authService = authService;
        this.navigationService = navigationService;
        this._loading = false;
        this._loginMessage = "";
        this._registrationMessage = "";
        this.hostClass = true;
    }
    ngOnInit() {
        this.createLoginForm();
        this.createRegistrationForm();
        this.subscribeToLogoutIfLogged();
    }
    onValidRegisterClick() {
        this._loading = true;
        this._registrationMessage = "";
        this.authService.attemptRegistration({
            login: this._registrationForm.value["login"],
            password: this._registrationForm.value["password"],
            email: this._registrationForm.value["email"],
            firstName: this._registrationForm.value["firstName"],
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((response) => {
            this.authService.decodeResponseTokenAndSetToStore(response);
            this.navigationService.navigateTo(_app_routers__WEBPACK_IMPORTED_MODULE_5__["defaultAbsoluteRoute"]);
        }, () => {
            this._registrationForm.setErrors({
                password: "Error"
            });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(err => {
            this._registrationMessage = err.error.error;
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["EMPTY"];
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(() => {
            this._loading = false;
        }))
            .subscribe();
    }
    onValidLoginClick() {
        this._loading = true;
        this._loginMessage = "";
        this.authService.attemptAuthentication({
            login: this._loginForm.value["login"],
            password: this._loginForm.value["password"],
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(err => {
            this._loginMessage = err.error.error;
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["EMPTY"];
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(() => {
            this._loading = false;
        }))
            .subscribe((response) => {
            this.authService.decodeResponseTokenAndSetToStore(response);
            this.navigationService.back();
        }, () => {
            this._loginForm.setErrors({
                password: "Error"
            });
        });
    }
    createLoginForm() {
        this._loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            login: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", this.getValidatorsForFields()),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", this.getValidatorsForFields()),
        });
    }
    createRegistrationForm() {
        this._registrationForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(2)]),
            login: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", this.getValidatorsForFields()),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [...this.getValidatorsForFields(), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", this.getValidatorsForFields()),
        });
    }
    subscribeToLogoutIfLogged() {
        this.authService.logoutIfLogged()
            .subscribe();
    }
    getValidatorsForFields() {
        return [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(5)];
    }
    getErrorMessage() {
        return "Введены некорректные данные!";
    }
};
SPQAuthComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_7__["SPQAuthService"] },
    { type: _services_navigation_service__WEBPACK_IMPORTED_MODULE_6__["SPQNavigationService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])("class.spq-auth"),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], SPQAuthComponent.prototype, "hostClass", void 0);
SPQAuthComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "spq-auth",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./auth.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/auth.component.html")).default,
        providers: [
            _services_auth_service__WEBPACK_IMPORTED_MODULE_7__["SPQAuthService"]
        ]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["SPQAuthService"],
        _services_navigation_service__WEBPACK_IMPORTED_MODULE_6__["SPQNavigationService"]])
], SPQAuthComponent);



/***/ }),

/***/ "./src/app/modules/auth/auth.module.ts":
/*!*********************************************!*\
  !*** ./src/app/modules/auth/auth.module.ts ***!
  \*********************************************/
/*! exports provided: SPQAuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPQAuthModule", function() { return SPQAuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/ */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_data_auth_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/data/auth-data.service */ "./src/app/services/data/auth-data.service.ts");
/* harmony import */ var _auth_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth.component */ "./src/app/modules/auth/auth.component.ts");








const authRouters = [
    {
        path: "",
        component: _auth_component__WEBPACK_IMPORTED_MODULE_7__["SPQAuthComponent"]
    }
];
const matModules = [
    _angular_material___WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
    _angular_material___WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
    _angular_material___WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"],
    _angular_material___WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
    _angular_material___WEBPACK_IMPORTED_MODULE_4__["MatProgressBarModule"]
];
let SPQAuthModule = class SPQAuthModule {
};
SPQAuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(authRouters),
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ...matModules
        ],
        declarations: [
            _auth_component__WEBPACK_IMPORTED_MODULE_7__["SPQAuthComponent"]
        ],
        exports: [
            _auth_component__WEBPACK_IMPORTED_MODULE_7__["SPQAuthComponent"]
        ],
        providers: [
            _services_data_auth_data_service__WEBPACK_IMPORTED_MODULE_6__["SPQAuthDataService"]
        ]
    })
], SPQAuthModule);



/***/ }),

/***/ "./src/app/modules/auth/services/auth.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/auth/services/auth.service.ts ***!
  \*******************************************************/
/*! exports provided: SPQAuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPQAuthService", function() { return SPQAuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _services_data_auth_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/data/auth-data.service */ "./src/app/services/data/auth-data.service.ts");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var _services_token_decoder_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/token-decoder.service */ "./src/app/services/token-decoder.service.ts");






let SPQAuthService = class SPQAuthService {
    constructor(dataService, tokenDecoder, storageService) {
        this.dataService = dataService;
        this.tokenDecoder = tokenDecoder;
        this.storageService = storageService;
    }
    attemptAuthentication(authDataModel) {
        return this.dataService.attemptAuthentication(authDataModel);
    }
    attemptRegistration(registrationDataModel) {
        return this.dataService.attemptRegistration(registrationDataModel);
    }
    logoutIfLogged() {
        if (this.storageService.isLoggedIn()) {
            this.storageService.goOut();
            return this.dataService.logout();
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.storageService.goOut());
    }
    decodeResponseTokenAndSetToStore(response) {
        const decodedResponse = this.makeDecodedResponseModel(response);
        this.setResponseModelToStore(decodedResponse);
    }
    makeDecodedResponseModel(response) {
        return this.tokenDecoder.decode(response);
    }
    setResponseModelToStore(response) {
        this.storageService.saveLogin(response.login);
        this.storageService.saveFirstName(response.firstName);
        this.storageService.saveToken(response.accessToken);
        this.storageService.saveRoles(response.roles);
    }
};
SPQAuthService.ctorParameters = () => [
    { type: _services_data_auth_data_service__WEBPACK_IMPORTED_MODULE_3__["SPQAuthDataService"] },
    { type: _services_token_decoder_service__WEBPACK_IMPORTED_MODULE_5__["SPATokenDecoderService"] },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_4__["SPQStorageService"] }
];
SPQAuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_auth_data_service__WEBPACK_IMPORTED_MODULE_3__["SPQAuthDataService"],
        _services_token_decoder_service__WEBPACK_IMPORTED_MODULE_5__["SPATokenDecoderService"],
        _services_storage_service__WEBPACK_IMPORTED_MODULE_4__["SPQStorageService"]])
], SPQAuthService);



/***/ }),

/***/ "./src/app/services/data/auth-data.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/data/auth-data.service.ts ***!
  \****************************************************/
/*! exports provided: SPQAuthDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPQAuthDataService", function() { return SPQAuthDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _abstract_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./abstract-data.service */ "./src/app/services/data/abstract-data.service.ts");



let SPQAuthDataService = class SPQAuthDataService extends _abstract_data_service__WEBPACK_IMPORTED_MODULE_2__["SPQDataService"] {
    constructor() {
        super(...arguments);
        this.loginURL = "authenticate";
        this.logoutURL = "logout";
        this.registrationURL = "registration";
    }
    attemptAuthentication(authDataModel) {
        return this.post(this.loginURL, authDataModel); // use { withCredentials: true } in prod
    }
    attemptRegistration(registrationDataModel) {
        return this.post(this.registrationURL, registrationDataModel);
    }
    logout() {
        return this.post(this.logoutURL, {});
    }
};
SPQAuthDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], SPQAuthDataService);



/***/ })

}]);
//# sourceMappingURL=modules-auth-auth-module-es2015.js.map
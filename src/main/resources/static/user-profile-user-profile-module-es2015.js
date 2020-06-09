(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-profile-user-profile-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/user-profile/user-profile.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/user-profile/user-profile.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"spq-user-profile__inner\">\n    <span>User Profile</span>\n    <br>\n    Not Implemented\n</div>\n\n");

/***/ }),

/***/ "./src/app/modules/user-profile/services/user.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/user-profile/services/user.service.ts ***!
  \***************************************************************/
/*! exports provided: SPQUserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPQUserService", function() { return SPQUserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_data_user_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/data/user-data.service */ "./src/app/services/data/user-data.service.ts");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/storage.service */ "./src/app/services/storage.service.ts");




let SPQUserService = class SPQUserService {
    constructor(userDataService, storageService) {
        this.userDataService = userDataService;
        this.storageService = storageService;
    }
    getUser() {
        return this.userDataService.getUserByLogin();
    }
};
SPQUserService.ctorParameters = () => [
    { type: _services_data_user_data_service__WEBPACK_IMPORTED_MODULE_2__["SQPUserDataService"] },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_3__["SPQStorageService"] }
];
SPQUserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_user_data_service__WEBPACK_IMPORTED_MODULE_2__["SQPUserDataService"],
        _services_storage_service__WEBPACK_IMPORTED_MODULE_3__["SPQStorageService"]])
], SPQUserService);



/***/ }),

/***/ "./src/app/modules/user-profile/user-profile.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/modules/user-profile/user-profile.component.ts ***!
  \****************************************************************/
/*! exports provided: SPQUserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPQUserProfileComponent", function() { return SPQUserProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/user.service */ "./src/app/modules/user-profile/services/user.service.ts");




let SPQUserProfileComponent = class SPQUserProfileComponent {
    constructor(service) {
        this.service = service;
        this.loading = false;
        this.hostClass = true;
        this.subscribeToGetUser();
    }
    subscribeToGetUser() {
        this.loading = true;
        this.service.getUser()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(user => {
            this._user = user;
            console.log(user);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(() => {
            this.loading = false;
        }))
            .subscribe();
    }
};
SPQUserProfileComponent.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["SPQUserService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])("class.spq-user-profile"),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], SPQUserProfileComponent.prototype, "hostClass", void 0);
SPQUserProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "spq-user-profile",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/user-profile/user-profile.component.html")).default,
        providers: [
            _services_user_service__WEBPACK_IMPORTED_MODULE_3__["SPQUserService"]
        ]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_3__["SPQUserService"]])
], SPQUserProfileComponent);



/***/ }),

/***/ "./src/app/modules/user-profile/user-profile.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/user-profile/user-profile.module.ts ***!
  \*************************************************************/
/*! exports provided: SPQUserProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPQUserProfileModule", function() { return SPQUserProfileModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_data_user_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/data/user-data.service */ "./src/app/services/data/user-data.service.ts");
/* harmony import */ var _user_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-profile.component */ "./src/app/modules/user-profile/user-profile.component.ts");






const UserProfileRoutes = [
    {
        path: "",
        component: _user_profile_component__WEBPACK_IMPORTED_MODULE_5__["SPQUserProfileComponent"]
    }
];
let SPQUserProfileModule = class SPQUserProfileModule {
};
SPQUserProfileModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _user_profile_component__WEBPACK_IMPORTED_MODULE_5__["SPQUserProfileComponent"]
        ],
        exports: [
            _user_profile_component__WEBPACK_IMPORTED_MODULE_5__["SPQUserProfileComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(UserProfileRoutes)
        ],
        providers: [
            _services_data_user_data_service__WEBPACK_IMPORTED_MODULE_4__["SQPUserDataService"]
        ]
    })
], SPQUserProfileModule);



/***/ }),

/***/ "./src/app/services/data/abstract-data.service.ts":
/*!********************************************************!*\
  !*** ./src/app/services/data/abstract-data.service.ts ***!
  \********************************************************/
/*! exports provided: defaultHttpOptions, SPQDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultHttpOptions", function() { return defaultHttpOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPQDataService", function() { return SPQDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app.config */ "./src/app/app.config.ts");




const defaultHttpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ "Content-Type": "application/json" }),
    observe: "body",
    responseType: "json"
};
let SPQDataService = class SPQDataService {
    constructor(config, http) {
        this.config = config;
        this.http = http;
        this.resourcesUrl = "image/";
    }
    getResourcesUrl() {
        // TODO -> refactoring - make service
        return this.makeURL(this.resourcesUrl) + "?path=";
    }
    get(address, options = {}) {
        // @ts-ignore
        return this.http.get(this.makeURL(address), Object.assign({}, defaultHttpOptions, options));
    }
    post(address, value, options = {}) {
        // @ts-ignore
        return this.http.post(this.makeURL(address), value, Object.assign({}, defaultHttpOptions, options));
    }
    getAbsoluteAddress() {
        return `${this.config.PROTOCOL}://${this.config.HOST_NAME}:${this.config.PORT}${this.config.API_ADDRESS}${this.config.API_VERSION}/`;
    }
    makeURL(address) {
        return this.getAbsoluteAddress() + address;
    }
};
SPQDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_app_config__WEBPACK_IMPORTED_MODULE_3__["SPQ_APP_API_CONFIG"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], SPQDataService);



/***/ }),

/***/ "./src/app/services/data/user-data.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/data/user-data.service.ts ***!
  \****************************************************/
/*! exports provided: SQPUserDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SQPUserDataService", function() { return SQPUserDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _abstract_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./abstract-data.service */ "./src/app/services/data/abstract-data.service.ts");



let SQPUserDataService = class SQPUserDataService extends _abstract_data_service__WEBPACK_IMPORTED_MODULE_2__["SPQDataService"] {
    constructor() {
        super(...arguments);
        this.userUrl = "user";
        this.userLoginParam = "login";
    }
    getUserByLogin() {
        return this.get(this.userUrl);
    }
};
SQPUserDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], SQPUserDataService);



/***/ })

}]);
//# sourceMappingURL=user-profile-user-profile-module-es2015.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-main-container-main-container-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"spq-header__inner\">\n    <div class=\"spq-header__main-content\">\n        <div class=\"spq-header__main-label\">\n            <ng-template [ngTemplateOutlet]=\"logoLabelTemplate ? logoLabelTemplate : logoLabelTemplate\">\n            </ng-template>\n        </div>\n        <div class=\"spq-header__tabs\">\n            <div class=\"spq-header__tab\"\n                 *ngFor=\"let model of models\">\n                <ng-template [ngTemplateOutlet]=\"tabTemplate\"\n                             [ngTemplateOutletContext]=\"{model: model}\">\n                </ng-template>\n            </div>\n        </div>\n    </div>\n    <div class=\"spq-header__right-bar\">\n        <template [ngTemplateOutlet]=\"rightBarTemplate\"></template>\n    </div>\n</div>\n\n<ng-template #logoLabelTemplate>\n    <div class=\"spq-header__main-label-text\">{{logoLabel}}</div>\n</ng-template>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/not-found/not-found.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/not-found/not-found.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("404\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main-container/main-container.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main-container/main-container.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"spq-main-container__inner\">\n    <div class=\"spq-main-container__header\">\n        <spq-header [logoLabel]=\"'Space Quest'\"\n                    [tabTemplate]=\"tabTemplate\"\n                    [rightBarTemplate]=\"userInfoTemplate\"\n                    [models]=\"_models\">\n        </spq-header>\n    </div>\n    <div class=\"spq-main-container__wrapper\">\n        <div class=\"spq-main-container__wrapper-scroll\">\n            <router-outlet></router-outlet>\n            <div class=\"spq-main-container__footer\">\n                <div class=\"spq-main-container__footer-content\">\n                    <a href=\"https://github.com/John-Pier/space-quest\">[github.com] Space Quest</a>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<ng-template #tabTemplate let-model=\"model\">\n    <button mat-button\n            disableRipple=\"true\"\n            (click)=\"_navigateTo(model.route)\">\n        {{model.tabName}}\n    </button>\n</ng-template>\n\n<ng-template #userInfoTemplate>\n    <span class=\"spq-main-container__header-email\"\n          (click)=\"_onNavigateToUserProfileClick()\">\n        {{_username}}\n    </span>\n    <button mat-button\n            disableRipple=\"true\"\n            (click)=\"_logoutClick()\">\n        Выйти\n    </button>\n</ng-template>\n");

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: SPQHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPQHeaderComponent", function() { return SPQHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SPQHeaderComponent = class SPQHeaderComponent {
    constructor() {
        this.hostClass = true;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
], SPQHeaderComponent.prototype, "logoTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], SPQHeaderComponent.prototype, "logoLabel", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], SPQHeaderComponent.prototype, "models", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
], SPQHeaderComponent.prototype, "tabTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
], SPQHeaderComponent.prototype, "rightBarTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])("class.spq-header"),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], SPQHeaderComponent.prototype, "hostClass", void 0);
SPQHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "spq-header",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html")).default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
    })
], SPQHeaderComponent);



/***/ }),

/***/ "./src/app/components/header/header.module.ts":
/*!****************************************************!*\
  !*** ./src/app/components/header/header.module.ts ***!
  \****************************************************/
/*! exports provided: SPQHeaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPQHeaderModule", function() { return SPQHeaderModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header.component */ "./src/app/components/header/header.component.ts");




let SPQHeaderModule = class SPQHeaderModule {
};
SPQHeaderModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ],
        declarations: [
            _header_component__WEBPACK_IMPORTED_MODULE_3__["SPQHeaderComponent"]
        ],
        exports: [
            _header_component__WEBPACK_IMPORTED_MODULE_3__["SPQHeaderComponent"]
        ],
        providers: []
    })
], SPQHeaderModule);



/***/ }),

/***/ "./src/app/components/not-found/not-found.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/not-found/not-found.component.ts ***!
  \*************************************************************/
/*! exports provided: SPQNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPQNotFoundComponent", function() { return SPQNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SPQNotFoundComponent = class SPQNotFoundComponent {
    constructor() {
        this.hostClass = true;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])("class.spq-not-found"),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], SPQNotFoundComponent.prototype, "hostClass", void 0);
SPQNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "spq-not-found",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./not-found.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/not-found/not-found.component.html")).default,
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SPQNotFoundComponent);



/***/ }),

/***/ "./src/app/components/not-found/not-found.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/not-found/not-found.module.ts ***!
  \**********************************************************/
/*! exports provided: SPQNotFoundModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPQNotFoundModule", function() { return SPQNotFoundModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./not-found.component */ "./src/app/components/not-found/not-found.component.ts");




let SPQNotFoundModule = class SPQNotFoundModule {
};
SPQNotFoundModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ],
        declarations: [
            _not_found_component__WEBPACK_IMPORTED_MODULE_3__["SPQNotFoundComponent"]
        ],
        exports: [
            _not_found_component__WEBPACK_IMPORTED_MODULE_3__["SPQNotFoundComponent"]
        ],
        providers: []
    })
], SPQNotFoundModule);



/***/ }),

/***/ "./src/app/modules/main-container/main-container.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/main-container/main-container.component.ts ***!
  \********************************************************************/
/*! exports provided: SPQMainContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPQMainContainerComponent", function() { return SPQMainContainerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app-routers */ "./src/app/app-routers.ts");
/* harmony import */ var _services_navigation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/navigation.service */ "./src/app/services/navigation.service.ts");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/storage.service */ "./src/app/services/storage.service.ts");





let SPQMainContainerComponent = class SPQMainContainerComponent {
    constructor(navigationService, storageService) {
        this.navigationService = navigationService;
        this.storageService = storageService;
        this._username = this.storageService.getFirstName();
        this.hostClass = true;
    }
    ngOnInit() {
        this._models = [
            {
                tabName: "Main",
                route: _app_routers__WEBPACK_IMPORTED_MODULE_2__["SPQRoutesMap"][_app_routers__WEBPACK_IMPORTED_MODULE_2__["SPQRoutesString"].SPQ_TIMELINE],
            },
            {
                tabName: "Quest",
                route: _app_routers__WEBPACK_IMPORTED_MODULE_2__["SPQRoutesMap"][_app_routers__WEBPACK_IMPORTED_MODULE_2__["SPQRoutesString"].SPQ_QUEST],
            }
        ];
    }
    _navigateTo(route) {
        this.navigationService.navigateTo(route);
    }
    _logoutClick() {
        this.navigationService.navigateTo(_app_routers__WEBPACK_IMPORTED_MODULE_2__["SPQRoutesMap"][_app_routers__WEBPACK_IMPORTED_MODULE_2__["SPQRoutesString"].SPQ_AUTH]);
    }
    _onNavigateToUserProfileClick() {
        this.navigationService.navigateTo(_app_routers__WEBPACK_IMPORTED_MODULE_2__["SPQRoutesMap"][_app_routers__WEBPACK_IMPORTED_MODULE_2__["SPQRoutesString"].SPQ_USER_PROFILE]);
    }
};
SPQMainContainerComponent.ctorParameters = () => [
    { type: _services_navigation_service__WEBPACK_IMPORTED_MODULE_3__["SPQNavigationService"] },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_4__["SPQStorageService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])("class.spq-main-container"),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], SPQMainContainerComponent.prototype, "hostClass", void 0);
SPQMainContainerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "spq-main-container",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./main-container.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main-container/main-container.component.html")).default,
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_navigation_service__WEBPACK_IMPORTED_MODULE_3__["SPQNavigationService"],
        _services_storage_service__WEBPACK_IMPORTED_MODULE_4__["SPQStorageService"]])
], SPQMainContainerComponent);



/***/ }),

/***/ "./src/app/modules/main-container/main-container.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/main-container/main-container.module.ts ***!
  \*****************************************************************/
/*! exports provided: SPQMainContainerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPQMainContainerModule", function() { return SPQMainContainerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_header_header_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/header/header.module */ "./src/app/components/header/header.module.ts");
/* harmony import */ var _components_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/not-found/not-found.module */ "./src/app/components/not-found/not-found.module.ts");
/* harmony import */ var _main_container_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./main-container.component */ "./src/app/modules/main-container/main-container.component.ts");
/* harmony import */ var _main_routing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./main-routing */ "./src/app/modules/main-container/main-routing.ts");









const SPQMainContainerRoutes = [
    {
        path: "",
        component: _main_container_component__WEBPACK_IMPORTED_MODULE_7__["SPQMainContainerComponent"],
        children: _main_routing__WEBPACK_IMPORTED_MODULE_8__["MAIN_ROUTES"]
    }
];
const spqModules = [
    _components_header_header_module__WEBPACK_IMPORTED_MODULE_5__["SPQHeaderModule"],
    _components_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_6__["SPQNotFoundModule"]
];
let SPQMainContainerModule = class SPQMainContainerModule {
};
SPQMainContainerModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(SPQMainContainerRoutes),
            ...spqModules,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"]
        ],
        declarations: [
            _main_container_component__WEBPACK_IMPORTED_MODULE_7__["SPQMainContainerComponent"]
        ],
        exports: [
            _main_container_component__WEBPACK_IMPORTED_MODULE_7__["SPQMainContainerComponent"]
        ],
        providers: []
    })
], SPQMainContainerModule);



/***/ }),

/***/ "./src/app/modules/main-container/main-routing.ts":
/*!********************************************************!*\
  !*** ./src/app/modules/main-container/main-routing.ts ***!
  \********************************************************/
/*! exports provided: MAIN_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAIN_ROUTES", function() { return MAIN_ROUTES; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _app_routers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app-routers */ "./src/app/app-routers.ts");
/* harmony import */ var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/not-found/not-found.component */ "./src/app/components/not-found/not-found.component.ts");
/* harmony import */ var _core_security_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/security/guards/auth.guard */ "./src/app/core/security/guards/auth.guard.ts");




const MAIN_ROUTES = [
    {
        path: "",
        pathMatch: "full",
        redirectTo: _app_routers__WEBPACK_IMPORTED_MODULE_1__["defaultAbsoluteRoute"]
    },
    {
        path: _app_routers__WEBPACK_IMPORTED_MODULE_1__["SPQRoutesString"].SPQ_TIMELINE,
        canLoad: [_core_security_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["SPQAuthGuard"]],
        loadChildren: () => Promise.all(/*! import() | timeline-timeline-module */[__webpack_require__.e("default~modules-auth-auth-module~quest-details-quest-details-module~quest-quest-module~timeline-time~2de6bba7"), __webpack_require__.e("common"), __webpack_require__.e("timeline-timeline-module")]).then(__webpack_require__.bind(null, /*! ../timeline/timeline.module */ "./src/app/modules/timeline/timeline.module.ts")).then(m => m.SPQTimelineModule)
    },
    {
        path: _app_routers__WEBPACK_IMPORTED_MODULE_1__["SPQRoutesString"].SPQ_QUEST,
        canLoad: [_core_security_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["SPQAuthGuard"]],
        loadChildren: () => Promise.all(/*! import() | quest-quest-module */[__webpack_require__.e("default~modules-auth-auth-module~quest-details-quest-details-module~quest-quest-module~timeline-time~2de6bba7"), __webpack_require__.e("common"), __webpack_require__.e("quest-quest-module")]).then(__webpack_require__.bind(null, /*! ../quest/quest.module */ "./src/app/modules/quest/quest.module.ts")).then(m => m.SPQQuestModule)
    },
    {
        path: _app_routers__WEBPACK_IMPORTED_MODULE_1__["SPQRoutesString"].SPQ_USER_PROFILE,
        canLoad: [_core_security_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["SPQAuthGuard"]],
        loadChildren: () => __webpack_require__.e(/*! import() | user-profile-user-profile-module */ "user-profile-user-profile-module").then(__webpack_require__.bind(null, /*! ../user-profile/user-profile.module */ "./src/app/modules/user-profile/user-profile.module.ts")).then(m => m.SPQUserProfileModule)
    },
    {
        path: _app_routers__WEBPACK_IMPORTED_MODULE_1__["SPQRoutesString"].SPQ_QUEST_STEP,
        canLoad: [_core_security_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["SPQAuthGuard"]],
        loadChildren: () => Promise.all(/*! import() | quest-details-quest-details-module */[__webpack_require__.e("default~modules-auth-auth-module~quest-details-quest-details-module~quest-quest-module~timeline-time~2de6bba7"), __webpack_require__.e("common"), __webpack_require__.e("quest-details-quest-details-module")]).then(__webpack_require__.bind(null, /*! ../quest-details/quest-details.module */ "./src/app/modules/quest-details/quest-details.module.ts")).then(m => m.SPQQuestDetailsModule)
    },
    {
        path: _app_routers__WEBPACK_IMPORTED_MODULE_1__["SPQRoutesString"].SPQ_NOT_FOUND,
        component: _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__["SPQNotFoundComponent"]
    },
    {
        path: "**",
        redirectTo: _app_routers__WEBPACK_IMPORTED_MODULE_1__["SPQRoutesString"].SPQ_NOT_FOUND
    }
];


/***/ })

}]);
//# sourceMappingURL=modules-main-container-main-container-module-es2015.js.map
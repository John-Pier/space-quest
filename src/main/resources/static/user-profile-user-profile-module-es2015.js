(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-profile-user-profile-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/user-profile/user-profile.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/user-profile/user-profile.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<span>User Profile</span>\n<br>\nNot Implemented\n");

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


let SPQUserProfileComponent = class SPQUserProfileComponent {
    constructor() {
        this.hostClass = true;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])("class.spq-user-profile"),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], SPQUserProfileComponent.prototype, "hostClass", void 0);
SPQUserProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "spq-user-profile",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/user-profile/user-profile.component.html")).default,
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
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
/* harmony import */ var _user_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-profile.component */ "./src/app/modules/user-profile/user-profile.component.ts");





const UserProfileRoutes = [
    {
        path: "",
        component: _user_profile_component__WEBPACK_IMPORTED_MODULE_4__["SPQUserProfileComponent"]
    }
];
let SPQUserProfileModule = class SPQUserProfileModule {
};
SPQUserProfileModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _user_profile_component__WEBPACK_IMPORTED_MODULE_4__["SPQUserProfileComponent"]
        ],
        exports: [
            _user_profile_component__WEBPACK_IMPORTED_MODULE_4__["SPQUserProfileComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(UserProfileRoutes)
        ]
    })
], SPQUserProfileModule);



/***/ })

}]);
//# sourceMappingURL=user-profile-user-profile-module-es2015.js.map
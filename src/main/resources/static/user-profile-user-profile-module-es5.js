function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-profile-user-profile-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/user-profile/user-profile.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/user-profile/user-profile.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesUserProfileUserProfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"spq-user-profile__inner\">\n    <span>User Profile</span>\n    <br>\n    Not Implemented\n</div>\n\n";
    /***/
  },

  /***/
  "./src/app/modules/user-profile/services/user.service.ts":
  /*!***************************************************************!*\
    !*** ./src/app/modules/user-profile/services/user.service.ts ***!
    \***************************************************************/

  /*! exports provided: SPQUserService */

  /***/
  function srcAppModulesUserProfileServicesUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SPQUserService", function () {
      return SPQUserService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_data_user_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../services/data/user-data.service */
    "./src/app/services/data/user-data.service.ts");
    /* harmony import */


    var _services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../services/storage.service */
    "./src/app/services/storage.service.ts");

    var SPQUserService = /*#__PURE__*/function () {
      function SPQUserService(userDataService, storageService) {
        _classCallCheck(this, SPQUserService);

        this.userDataService = userDataService;
        this.storageService = storageService;
      }

      _createClass(SPQUserService, [{
        key: "getUser",
        value: function getUser() {
          return this.userDataService.getUserByLogin();
        }
      }]);

      return SPQUserService;
    }();

    SPQUserService.ctorParameters = function () {
      return [{
        type: _services_data_user_data_service__WEBPACK_IMPORTED_MODULE_2__["SQPUserDataService"]
      }, {
        type: _services_storage_service__WEBPACK_IMPORTED_MODULE_3__["SPQStorageService"]
      }];
    };

    SPQUserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_user_data_service__WEBPACK_IMPORTED_MODULE_2__["SQPUserDataService"], _services_storage_service__WEBPACK_IMPORTED_MODULE_3__["SPQStorageService"]])], SPQUserService);
    /***/
  },

  /***/
  "./src/app/modules/user-profile/user-profile.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/modules/user-profile/user-profile.component.ts ***!
    \****************************************************************/

  /*! exports provided: SPQUserProfileComponent */

  /***/
  function srcAppModulesUserProfileUserProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SPQUserProfileComponent", function () {
      return SPQUserProfileComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./services/user.service */
    "./src/app/modules/user-profile/services/user.service.ts");

    var SPQUserProfileComponent = /*#__PURE__*/function () {
      function SPQUserProfileComponent(service) {
        _classCallCheck(this, SPQUserProfileComponent);

        this.service = service;
        this.loading = false;
        this.hostClass = true;
        this.subscribeToGetUser();
      }

      _createClass(SPQUserProfileComponent, [{
        key: "subscribeToGetUser",
        value: function subscribeToGetUser() {
          var _this = this;

          this.loading = true;
          this.service.getUser().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (user) {
            _this._user = user;
            console.log(user);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(function () {
            _this.loading = false;
          })).subscribe();
        }
      }]);

      return SPQUserProfileComponent;
    }();

    SPQUserProfileComponent.ctorParameters = function () {
      return [{
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["SPQUserService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])("class.spq-user-profile"), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)], SPQUserProfileComponent.prototype, "hostClass", void 0);
    SPQUserProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "spq-user-profile",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./user-profile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/user-profile/user-profile.component.html"))["default"],
      providers: [_services_user_service__WEBPACK_IMPORTED_MODULE_3__["SPQUserService"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_3__["SPQUserService"]])], SPQUserProfileComponent);
    /***/
  },

  /***/
  "./src/app/modules/user-profile/user-profile.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/modules/user-profile/user-profile.module.ts ***!
    \*************************************************************/

  /*! exports provided: SPQUserProfileModule */

  /***/
  function srcAppModulesUserProfileUserProfileModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SPQUserProfileModule", function () {
      return SPQUserProfileModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_data_user_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/data/user-data.service */
    "./src/app/services/data/user-data.service.ts");
    /* harmony import */


    var _user_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./user-profile.component */
    "./src/app/modules/user-profile/user-profile.component.ts");

    var UserProfileRoutes = [{
      path: "",
      component: _user_profile_component__WEBPACK_IMPORTED_MODULE_5__["SPQUserProfileComponent"]
    }];

    var SPQUserProfileModule = function SPQUserProfileModule() {
      _classCallCheck(this, SPQUserProfileModule);
    };

    SPQUserProfileModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_user_profile_component__WEBPACK_IMPORTED_MODULE_5__["SPQUserProfileComponent"]],
      exports: [_user_profile_component__WEBPACK_IMPORTED_MODULE_5__["SPQUserProfileComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(UserProfileRoutes)],
      providers: [_services_data_user_data_service__WEBPACK_IMPORTED_MODULE_4__["SQPUserDataService"]]
    })], SPQUserProfileModule);
    /***/
  },

  /***/
  "./src/app/services/data/abstract-data.service.ts":
  /*!********************************************************!*\
    !*** ./src/app/services/data/abstract-data.service.ts ***!
    \********************************************************/

  /*! exports provided: defaultHttpOptions, SPQDataService */

  /***/
  function srcAppServicesDataAbstractDataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "defaultHttpOptions", function () {
      return defaultHttpOptions;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SPQDataService", function () {
      return SPQDataService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../app.config */
    "./src/app/app.config.ts");

    var defaultHttpOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        "Content-Type": "application/json"
      }),
      observe: "body",
      responseType: "json"
    };

    var SPQDataService = /*#__PURE__*/function () {
      function SPQDataService(config, http) {
        _classCallCheck(this, SPQDataService);

        this.config = config;
        this.http = http;
        this.resourcesUrl = "image/";
      }

      _createClass(SPQDataService, [{
        key: "getResourcesUrl",
        value: function getResourcesUrl() {
          // TODO -> refactoring - make service
          return this.makeURL(this.resourcesUrl) + "?path=";
        }
      }, {
        key: "get",
        value: function get(address) {
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          // @ts-ignore
          return this.http.get(this.makeURL(address), Object.assign({}, defaultHttpOptions, options));
        }
      }, {
        key: "post",
        value: function post(address, value) {
          var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
          // @ts-ignore
          return this.http.post(this.makeURL(address), value, Object.assign({}, defaultHttpOptions, options));
        }
      }, {
        key: "getAbsoluteAddress",
        value: function getAbsoluteAddress() {
          return "".concat(this.config.PROTOCOL, "://").concat(this.config.HOST_NAME, ":").concat(this.config.PORT).concat(this.config.API_ADDRESS).concat(this.config.API_VERSION, "/");
        }
      }, {
        key: "makeURL",
        value: function makeURL(address) {
          return this.getAbsoluteAddress() + address;
        }
      }]);

      return SPQDataService;
    }();

    SPQDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_app_config__WEBPACK_IMPORTED_MODULE_3__["SPQ_APP_API_CONFIG"])), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])], SPQDataService);
    /***/
  },

  /***/
  "./src/app/services/data/user-data.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/services/data/user-data.service.ts ***!
    \****************************************************/

  /*! exports provided: SQPUserDataService */

  /***/
  function srcAppServicesDataUserDataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SQPUserDataService", function () {
      return SQPUserDataService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _abstract_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./abstract-data.service */
    "./src/app/services/data/abstract-data.service.ts");

    var SQPUserDataService = /*#__PURE__*/function (_abstract_data_servic) {
      _inherits(SQPUserDataService, _abstract_data_servic);

      var _super = _createSuper(SQPUserDataService);

      function SQPUserDataService() {
        var _this2;

        _classCallCheck(this, SQPUserDataService);

        _this2 = _super.apply(this, arguments);
        _this2.userUrl = "user";
        _this2.userLoginParam = "login";
        return _this2;
      }

      _createClass(SQPUserDataService, [{
        key: "getUserByLogin",
        value: function getUserByLogin() {
          return this.get(this.userUrl);
        }
      }]);

      return SQPUserDataService;
    }(_abstract_data_service__WEBPACK_IMPORTED_MODULE_2__["SPQDataService"]);

    SQPUserDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], SQPUserDataService);
    /***/
  }
}]);
//# sourceMappingURL=user-profile-user-profile-module-es5.js.map
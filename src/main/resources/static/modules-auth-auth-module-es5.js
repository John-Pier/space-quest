function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-auth-auth-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/auth.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/auth.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesAuthAuthComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"spq-auth__inner\">\n    <div class=\"spq-auth__inner-form\">\n        <mat-progress-bar *ngIf=\"_loading\"\n                          class=\"progress-line\"\n                          mode=\"indeterminate\">\n        </mat-progress-bar>\n        <mat-tab-group [dynamicHeight]=\"true\"\n                       mat-align-tabs=\"center\">\n            <mat-tab label=\"Вход\">\n                <form class=\"spq-auth__form\"\n                      [formGroup]=\"_loginForm\"\n                      (ngSubmit)=\"onValidLoginClick()\">\n                    <mat-form-field appearance=\"outline\"\n                                    [hideRequiredMarker]=\"false\">\n                        <mat-label>Логин</mat-label>\n                        <input type=\"text\"\n                               placeholder=\"Введите ваш логин\"\n                               formControlName=\"login\"\n                               matInput>\n                    </mat-form-field>\n                    <mat-form-field appearance=\"outline\">\n                        <mat-label>Пароль</mat-label>\n                        <input type=\"password\"\n                               placeholder=\"Введите ваш пароль\"\n                               formControlName=\"password\"\n                               matInput>\n                        <mat-error *ngIf=\"_loginForm.invalid\">{{getErrorMessage()}}</mat-error>\n                    </mat-form-field>\n                    <button class=\"spq-auth__form-submit\"\n                            mat-button\n                            color=\"accent\"\n                            type=\"submit\"\n                            mat-raised-button\n                            [disabled]=\"!_loginForm.valid || _loading\">\n                        Войти\n                    </button>\n                </form>\n            </mat-tab>\n            <mat-tab label=\"Регистрация\">\n                <form class=\"spq-auth__form\"\n                      [formGroup]=\"_registrationForm\"\n                      (ngSubmit)=\"onValidRegisterClick()\">\n                    <mat-form-field appearance=\"outline\">\n                        <mat-label>Ваше Имя</mat-label>\n                        <input type=\"text\"\n                               placeholder=\"Имя\"\n                               formControlName=\"firstName\"\n                               matInput>\n                    </mat-form-field>\n                    <mat-form-field appearance=\"outline\">\n                        <mat-label>Email</mat-label>\n                        <input type=\"text\"\n                               placeholder=\"Введите ваш Email\"\n                               formControlName=\"email\"\n                               matInput>\n                    </mat-form-field>\n                    <mat-form-field appearance=\"outline\">\n                        <mat-label>Логин</mat-label>\n                        <input type=\"text\"\n                               placeholder=\"Логин\"\n                               formControlName=\"login\"\n                               matInput>\n                    </mat-form-field>\n                    <mat-form-field appearance=\"outline\">\n                        <mat-label>Пароль</mat-label>\n                        <input type=\"password\"\n                               placeholder=\"Введите ваш пароль\"\n                               formControlName=\"password\"\n                               matInput>\n                    </mat-form-field>\n                    <button class=\"spq-auth__form-submit\"\n                            mat-button\n                            color=\"accent\"\n                            mat-raised-button\n                            [formAction]=\"'submit'\"\n                            [disabled]=\"!_registrationForm.valid || _loading\">\n                        Зарегистрироваться\n                    </button>\n                </form>\n            </mat-tab>\n        </mat-tab-group>\n\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./src/app/modules/auth/auth.component.ts":
  /*!************************************************!*\
    !*** ./src/app/modules/auth/auth.component.ts ***!
    \************************************************/

  /*! exports provided: SPQAuthComponent */

  /***/
  function srcAppModulesAuthAuthComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SPQAuthComponent", function () {
      return SPQAuthComponent;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _app_routers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../app-routers */
    "./src/app/app-routers.ts");
    /* harmony import */


    var _services_navigation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/navigation.service */
    "./src/app/services/navigation.service.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./services/auth.service */
    "./src/app/modules/auth/services/auth.service.ts"); // TODO: big refactoring!


    var SPQAuthComponent = /*#__PURE__*/function () {
      function SPQAuthComponent(authService, navigationService) {
        _classCallCheck(this, SPQAuthComponent);

        this.authService = authService;
        this.navigationService = navigationService;
        this._loading = false;
        this.hostClass = true;
      }

      _createClass(SPQAuthComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.createLoginForm();
          this.createRegistrationForm();
          this.subscribeToLogoutIfLogged();
        }
      }, {
        key: "onValidRegisterClick",
        value: function onValidRegisterClick() {
          var _this = this;

          this._loading = true;
          this.authService.attemptRegistration({
            login: this._registrationForm.value["login"],
            password: this._registrationForm.value["password"],
            email: this._registrationForm.value["email"],
            firstName: this._registrationForm.value["firstName"]
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (response) {
            _this.authService.decodeResponseTokenAndSetToStore(response);

            _this.navigationService.navigateTo(_app_routers__WEBPACK_IMPORTED_MODULE_4__["defaultAbsoluteRoute"]);
          }, function () {
            _this._registrationForm.setErrors({
              password: "Error"
            });
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () {
            _this._loading = false;
          })).subscribe();
        }
      }, {
        key: "onValidLoginClick",
        value: function onValidLoginClick() {
          var _this2 = this;

          this._loading = true;
          this.authService.attemptAuthentication({
            login: this._loginForm.value["login"],
            password: this._loginForm.value["password"]
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () {
            _this2._loading = false;
          })).subscribe(function (response) {
            _this2.authService.decodeResponseTokenAndSetToStore(response);

            _this2.navigationService.back();
          }, function () {
            _this2._loginForm.setErrors({
              password: "Error"
            });
          });
        }
      }, {
        key: "createLoginForm",
        value: function createLoginForm() {
          this._loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            login: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", this.getValidatorsForFields()),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", this.getValidatorsForFields())
          });
        }
      }, {
        key: "createRegistrationForm",
        value: function createRegistrationForm() {
          this._registrationForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(2)]),
            login: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", this.getValidatorsForFields()),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [].concat(_toConsumableArray(this.getValidatorsForFields()), [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", this.getValidatorsForFields())
          });
        }
      }, {
        key: "subscribeToLogoutIfLogged",
        value: function subscribeToLogoutIfLogged() {
          this.authService.logoutIfLogged().subscribe();
        }
      }, {
        key: "getValidatorsForFields",
        value: function getValidatorsForFields() {
          return [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(5)];
        }
      }, {
        key: "getErrorMessage",
        value: function getErrorMessage() {
          return "Введены некорректные данные!";
        }
      }]);

      return SPQAuthComponent;
    }();

    SPQAuthComponent.ctorParameters = function () {
      return [{
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["SPQAuthService"]
      }, {
        type: _services_navigation_service__WEBPACK_IMPORTED_MODULE_5__["SPQNavigationService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])("class.spq-auth"), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)], SPQAuthComponent.prototype, "hostClass", void 0);
    SPQAuthComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "spq-auth",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./auth.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/auth.component.html"))["default"],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["SPQAuthService"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["SPQAuthService"], _services_navigation_service__WEBPACK_IMPORTED_MODULE_5__["SPQNavigationService"]])], SPQAuthComponent);
    /***/
  },

  /***/
  "./src/app/modules/auth/auth.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/modules/auth/auth.module.ts ***!
    \*********************************************/

  /*! exports provided: SPQAuthModule */

  /***/
  function srcAppModulesAuthAuthModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SPQAuthModule", function () {
      return SPQAuthModule;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_material___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/ */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_data_auth_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../services/data/auth-data.service */
    "./src/app/services/data/auth-data.service.ts");
    /* harmony import */


    var _auth_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./auth.component */
    "./src/app/modules/auth/auth.component.ts");

    var authRouters = [{
      path: "",
      component: _auth_component__WEBPACK_IMPORTED_MODULE_7__["SPQAuthComponent"]
    }];
    var matModules = [_angular_material___WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"], _angular_material___WEBPACK_IMPORTED_MODULE_4__["MatInputModule"], _angular_material___WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"], _angular_material___WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material___WEBPACK_IMPORTED_MODULE_4__["MatProgressBarModule"]];

    var SPQAuthModule = function SPQAuthModule() {
      _classCallCheck(this, SPQAuthModule);
    };

    SPQAuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(authRouters), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]].concat(matModules),
      declarations: [_auth_component__WEBPACK_IMPORTED_MODULE_7__["SPQAuthComponent"]],
      exports: [_auth_component__WEBPACK_IMPORTED_MODULE_7__["SPQAuthComponent"]],
      providers: [_services_data_auth_data_service__WEBPACK_IMPORTED_MODULE_6__["SPQAuthDataService"]]
    })], SPQAuthModule);
    /***/
  },

  /***/
  "./src/app/modules/auth/services/auth.service.ts":
  /*!*******************************************************!*\
    !*** ./src/app/modules/auth/services/auth.service.ts ***!
    \*******************************************************/

  /*! exports provided: SPQAuthService */

  /***/
  function srcAppModulesAuthServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SPQAuthService", function () {
      return SPQAuthService;
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


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _services_data_auth_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../services/data/auth-data.service */
    "./src/app/services/data/auth-data.service.ts");
    /* harmony import */


    var _services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../services/storage.service */
    "./src/app/services/storage.service.ts");
    /* harmony import */


    var _services_token_decoder_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../services/token-decoder.service */
    "./src/app/services/token-decoder.service.ts");

    var SPQAuthService = /*#__PURE__*/function () {
      function SPQAuthService(dataService, tokenDecoder, storageService) {
        _classCallCheck(this, SPQAuthService);

        this.dataService = dataService;
        this.tokenDecoder = tokenDecoder;
        this.storageService = storageService;
      }

      _createClass(SPQAuthService, [{
        key: "attemptAuthentication",
        value: function attemptAuthentication(authDataModel) {
          return this.dataService.attemptAuthentication(authDataModel);
        }
      }, {
        key: "attemptRegistration",
        value: function attemptRegistration(registrationDataModel) {
          return this.dataService.attemptRegistration(registrationDataModel);
        }
      }, {
        key: "logoutIfLogged",
        value: function logoutIfLogged() {
          if (this.storageService.isLoggedIn()) {
            this.storageService.goOut();
            return this.dataService.logout();
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.storageService.goOut());
        }
      }, {
        key: "decodeResponseTokenAndSetToStore",
        value: function decodeResponseTokenAndSetToStore(response) {
          var decodedResponse = this.makeDecodedResponseModel(response);
          this.setResponseModelToStore(decodedResponse);
        }
      }, {
        key: "makeDecodedResponseModel",
        value: function makeDecodedResponseModel(response) {
          return this.tokenDecoder.decode(response);
        }
      }, {
        key: "setResponseModelToStore",
        value: function setResponseModelToStore(response) {
          this.storageService.saveLogin(response.login);
          this.storageService.saveFirstName(response.firstName);
          this.storageService.saveToken(response.accessToken);
          this.storageService.saveRoles(response.roles);
        }
      }]);

      return SPQAuthService;
    }();

    SPQAuthService.ctorParameters = function () {
      return [{
        type: _services_data_auth_data_service__WEBPACK_IMPORTED_MODULE_3__["SPQAuthDataService"]
      }, {
        type: _services_token_decoder_service__WEBPACK_IMPORTED_MODULE_5__["SPATokenDecoderService"]
      }, {
        type: _services_storage_service__WEBPACK_IMPORTED_MODULE_4__["SPQStorageService"]
      }];
    };

    SPQAuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_auth_data_service__WEBPACK_IMPORTED_MODULE_3__["SPQAuthDataService"], _services_token_decoder_service__WEBPACK_IMPORTED_MODULE_5__["SPATokenDecoderService"], _services_storage_service__WEBPACK_IMPORTED_MODULE_4__["SPQStorageService"]])], SPQAuthService);
    /***/
  },

  /***/
  "./src/app/services/data/auth-data.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/services/data/auth-data.service.ts ***!
    \****************************************************/

  /*! exports provided: SPQAuthDataService */

  /***/
  function srcAppServicesDataAuthDataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SPQAuthDataService", function () {
      return SPQAuthDataService;
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

    var SPQAuthDataService = /*#__PURE__*/function (_abstract_data_servic) {
      _inherits(SPQAuthDataService, _abstract_data_servic);

      var _super = _createSuper(SPQAuthDataService);

      function SPQAuthDataService() {
        var _this3;

        _classCallCheck(this, SPQAuthDataService);

        _this3 = _super.apply(this, arguments);
        _this3.loginURL = "authenticate";
        _this3.logoutURL = "logout";
        _this3.registrationURL = "registration";
        return _this3;
      }

      _createClass(SPQAuthDataService, [{
        key: "attemptAuthentication",
        value: function attemptAuthentication(authDataModel) {
          return this.post(this.loginURL, authDataModel); // use { withCredentials: true } in prod
        }
      }, {
        key: "attemptRegistration",
        value: function attemptRegistration(registrationDataModel) {
          return this.post(this.registrationURL, registrationDataModel);
        }
      }, {
        key: "logout",
        value: function logout() {
          return this.post(this.logoutURL, {});
        }
      }]);

      return SPQAuthDataService;
    }(_abstract_data_service__WEBPACK_IMPORTED_MODULE_2__["SPQDataService"]);

    SPQAuthDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], SPQAuthDataService);
    /***/
  }
}]);
//# sourceMappingURL=modules-auth-auth-module-es5.js.map
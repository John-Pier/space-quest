function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["timeline-timeline-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/timeline/components/card.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/timeline/components/card.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesTimelineComponentsCardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"spq-card__inner\">\n    <mat-card class=\"example-card\">\n        <mat-card-header>\n            <mat-card-title>\n                {{flowBrief.name}}\n            </mat-card-title>\n        </mat-card-header>\n        <img class=\"spq-card__image\"\n             *ngIf=\"flowBrief.url\"\n             [src]=\"_safeUrl\"\n             mat-card-image\n             alt=\"Preview\">\n        <mat-card-content>\n            <p>{{flowBrief.text}}</p>\n        </mat-card-content>\n        <mat-expansion-panel class=\"spq-card__e-panel _no-shadow\"\n                             *ngIf=\"_currentTaskBrief\"\n                             (expandedChange)=\"_isCollapsed = !$event\">\n            <mat-expansion-panel-header>\n                <mat-panel-title>\n                    {{_isCollapsed ? 'Раверните чтбы промотреть текущее задание по этой части' : 'Текущее задание'}}\n                </mat-panel-title>\n            </mat-expansion-panel-header>\n            <div class=\"spq-card__e-panel-content\">\n                <mat-list class=\"spq-card__task\">\n                    <mat-list-item>\n                        <div class=\"spq-card__task-number\">\n                            {{_currentTaskBrief.serialNumber}}\n                        </div>\n                        <div class=\"spq-card__task-text\">\n                            <div class=\"spq-card__task-text-title\">\n                                {{_currentTaskBrief.title}}</div>\n                            <div class=\"spq-card__task-text-subtitle\">\n                                {{_currentTaskBrief.subtitle}}\n                            </div>\n                        </div>\n                    </mat-list-item>\n                    <mat-divider class=\"_relative\"></mat-divider>\n                </mat-list>\n                <div class=\"spq-card__e-panel-actions\">\n                    <button mat-raised-button\n                            color=\"primary\"\n                            (click)=\"_onNavigateToQuestDetailsClick()\">\n                        Перейти к заданию\n                    </button>\n                </div>\n            </div>\n        </mat-expansion-panel>\n    </mat-card>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/timeline/timeline.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/timeline/timeline.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesTimelineTimelineComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"spq-timeline__inner\">\n    <spq-card class=\"spq-timeline__card\"\n              *ngFor=\"let flowBrief of _questFlowBriefs\"\n              [flowBrief]=\"flowBrief\">\n    </spq-card>\n</div>\n";
    /***/
  },

  /***/
  "./src/app/modules/timeline/components/card.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/modules/timeline/components/card.component.ts ***!
    \***************************************************************/

  /*! exports provided: SPQCardComponent */

  /***/
  function srcAppModulesTimelineComponentsCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SPQCardComponent", function () {
      return SPQCardComponent;
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


    var _app_routers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../app-routers */
    "./src/app/app-routers.ts");
    /* harmony import */


    var _services_navigation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../services/navigation.service */
    "./src/app/services/navigation.service.ts");
    /* harmony import */


    var _sevrvices_timeline_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../sevrvices/timeline.service */
    "./src/app/modules/timeline/sevrvices/timeline.service.ts");

    var SPQCardComponent = /*#__PURE__*/function () {
      function SPQCardComponent(service, navigationService) {
        _classCallCheck(this, SPQCardComponent);

        this.service = service;
        this.navigationService = navigationService;
        this._isCollapsed = true;
        this.hostClass = true;
      }

      _createClass(SPQCardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this._safeUrl = this.makeImageUrl();
          this.subscribeToGetTaskBrief();
        }
      }, {
        key: "_onNavigateToQuestDetailsClick",
        value: function _onNavigateToQuestDetailsClick() {
          this.navigationService.navigateTo(_app_routers__WEBPACK_IMPORTED_MODULE_3__["SPQRoutesMap"][_app_routers__WEBPACK_IMPORTED_MODULE_3__["SPQRoutesString"].SPQ_QUEST] + "/" + this.flowBrief.currentTaskId);
        }
      }, {
        key: "makeImageUrl",
        value: function makeImageUrl() {
          return this.service.makeSafeImageUrl(this.flowBrief.url);
        }
      }, {
        key: "subscribeToGetTaskBrief",
        value: function subscribeToGetTaskBrief() {
          var _this = this;

          this.service.getTaskBriefById(this.flowBrief.currentTaskId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (brief) {
            _this._currentTaskBrief = brief;
          })).subscribe();
        }
      }]);

      return SPQCardComponent;
    }();

    SPQCardComponent.ctorParameters = function () {
      return [{
        type: _sevrvices_timeline_service__WEBPACK_IMPORTED_MODULE_5__["SPQTimelineService"]
      }, {
        type: _services_navigation_service__WEBPACK_IMPORTED_MODULE_4__["SPQNavigationService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], SPQCardComponent.prototype, "flowBrief", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])("class.spq-card"), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)], SPQCardComponent.prototype, "hostClass", void 0);
    SPQCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "spq-card",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./card.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/timeline/components/card.component.html"))["default"]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_sevrvices_timeline_service__WEBPACK_IMPORTED_MODULE_5__["SPQTimelineService"], _services_navigation_service__WEBPACK_IMPORTED_MODULE_4__["SPQNavigationService"]])], SPQCardComponent);
    /***/
  },

  /***/
  "./src/app/modules/timeline/sevrvices/timeline.service.ts":
  /*!****************************************************************!*\
    !*** ./src/app/modules/timeline/sevrvices/timeline.service.ts ***!
    \****************************************************************/

  /*! exports provided: SPQTimelineService */

  /***/
  function srcAppModulesTimelineSevrvicesTimelineServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SPQTimelineService", function () {
      return SPQTimelineService;
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


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _services_data_quest_data_flow_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../services/data/quest-data-flow.service */
    "./src/app/services/data/quest-data-flow.service.ts");
    /* harmony import */


    var _services_data_quest_details_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../services/data/quest-details-data.service */
    "./src/app/services/data/quest-details-data.service.ts");

    var SPQTimelineService = /*#__PURE__*/function () {
      function SPQTimelineService(questFlowDataService, questDetailsDataService, sanitizer) {
        _classCallCheck(this, SPQTimelineService);

        this.questFlowDataService = questFlowDataService;
        this.questDetailsDataService = questDetailsDataService;
        this.sanitizer = sanitizer;
      }

      _createClass(SPQTimelineService, [{
        key: "getAllQuestFlowBriefs",
        value: function getAllQuestFlowBriefs() {
          return this.questFlowDataService.getAllQuestFlowBriefs();
        }
      }, {
        key: "getTaskBriefById",
        value: function getTaskBriefById(taskId) {
          return this.questDetailsDataService.getQuestTaskBriefById(taskId);
        }
      }, {
        key: "makeSafeImageUrl",
        value: function makeSafeImageUrl(imageUrl) {
          return this.sanitizer.bypassSecurityTrustResourceUrl(this.makeImageUrl(imageUrl));
        }
      }, {
        key: "makeImageUrl",
        value: function makeImageUrl(imageUrl) {
          return this.questFlowDataService.getResourcesUrl() + imageUrl;
        }
      }]);

      return SPQTimelineService;
    }();

    SPQTimelineService.ctorParameters = function () {
      return [{
        type: _services_data_quest_data_flow_service__WEBPACK_IMPORTED_MODULE_3__["SQPQuestFlowDataService"]
      }, {
        type: _services_data_quest_details_data_service__WEBPACK_IMPORTED_MODULE_4__["SPQQuestDetailsDataService"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]
      }];
    };

    SPQTimelineService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_quest_data_flow_service__WEBPACK_IMPORTED_MODULE_3__["SQPQuestFlowDataService"], _services_data_quest_details_data_service__WEBPACK_IMPORTED_MODULE_4__["SPQQuestDetailsDataService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])], SPQTimelineService);
    /***/
  },

  /***/
  "./src/app/modules/timeline/timeline.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/modules/timeline/timeline.component.ts ***!
    \********************************************************/

  /*! exports provided: SPQTimelineComponent */

  /***/
  function srcAppModulesTimelineTimelineComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SPQTimelineComponent", function () {
      return SPQTimelineComponent;
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


    var _sevrvices_timeline_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./sevrvices/timeline.service */
    "./src/app/modules/timeline/sevrvices/timeline.service.ts");

    var SPQTimelineComponent = /*#__PURE__*/function () {
      function SPQTimelineComponent(service) {
        _classCallCheck(this, SPQTimelineComponent);

        this.service = service;
        this._questFlowBriefs = [];
        this.hostClass = true;
      }

      _createClass(SPQTimelineComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.subscribeToGetAllQuestFlowBriefs();
        }
      }, {
        key: "subscribeToGetAllQuestFlowBriefs",
        value: function subscribeToGetAllQuestFlowBriefs() {
          var _this2 = this;

          this.service.getAllQuestFlowBriefs().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (briefs) {
            _this2._questFlowBriefs = briefs;
          })).subscribe();
        }
      }]);

      return SPQTimelineComponent;
    }();

    SPQTimelineComponent.ctorParameters = function () {
      return [{
        type: _sevrvices_timeline_service__WEBPACK_IMPORTED_MODULE_3__["SPQTimelineService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])("class.spq-timeline"), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)], SPQTimelineComponent.prototype, "hostClass", void 0);
    SPQTimelineComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "spq-timeline",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./timeline.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/timeline/timeline.component.html"))["default"],
      providers: [_sevrvices_timeline_service__WEBPACK_IMPORTED_MODULE_3__["SPQTimelineService"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_sevrvices_timeline_service__WEBPACK_IMPORTED_MODULE_3__["SPQTimelineService"]])], SPQTimelineComponent);
    /***/
  },

  /***/
  "./src/app/modules/timeline/timeline.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/modules/timeline/timeline.module.ts ***!
    \*****************************************************/

  /*! exports provided: SPQTimelineModule */

  /***/
  function srcAppModulesTimelineTimelineModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SPQTimelineModule", function () {
      return SPQTimelineModule;
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


    var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/esm2015/card.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/esm2015/expansion.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_data_quest_data_flow_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../services/data/quest-data-flow.service */
    "./src/app/services/data/quest-data-flow.service.ts");
    /* harmony import */


    var _services_data_quest_details_data_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../services/data/quest-details-data.service */
    "./src/app/services/data/quest-details-data.service.ts");
    /* harmony import */


    var _components_card_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/card.component */
    "./src/app/modules/timeline/components/card.component.ts");
    /* harmony import */


    var _timeline_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./timeline.component */
    "./src/app/modules/timeline/timeline.component.ts");

    var TimelineRouters = [{
      path: "",
      component: _timeline_component__WEBPACK_IMPORTED_MODULE_11__["SPQTimelineComponent"]
    }];

    var SPQTimelineModule = function SPQTimelineModule() {
      _classCallCheck(this, SPQTimelineModule);
    };

    SPQTimelineModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild(TimelineRouters), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatExpansionModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatListModule"]],
      declarations: [_timeline_component__WEBPACK_IMPORTED_MODULE_11__["SPQTimelineComponent"], _components_card_component__WEBPACK_IMPORTED_MODULE_10__["SPQCardComponent"]],
      exports: [_timeline_component__WEBPACK_IMPORTED_MODULE_11__["SPQTimelineComponent"]],
      providers: [_services_data_quest_data_flow_service__WEBPACK_IMPORTED_MODULE_8__["SQPQuestFlowDataService"], _services_data_quest_details_data_service__WEBPACK_IMPORTED_MODULE_9__["SPQQuestDetailsDataService"]]
    })], SPQTimelineModule);
    /***/
  }
}]);
//# sourceMappingURL=timeline-timeline-module-es5.js.map
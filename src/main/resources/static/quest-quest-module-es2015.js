(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["quest-quest-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/quest/components/quest-flow.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/quest/components/quest-flow.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"spq-quest-flow__inner\">\n    <div class=\"spq-quest-flow__name\">\n        {{values.name}}\n    </div>\n    <div class=\"spq-quest-flow__flow\">\n        <spq-quest-step-cube class=\"spq-quest-flow__flow-cube\"\n                             *ngFor=\"let node of values.nodes; trackBy:  _trackCubeById\"\n                             [id]=\"node.id\"\n                             [title]=\"node.title\"\n                             [subtitle]=\"node.subtitle\"\n                             [serialNumber]=\"node.serialNumber\"\n                             [disabled]=\"!node.passed && values.currentTaskId !== node.id\"\n                             [selected]=\"values.currentTaskId === node.id\"\n                             [highlighted]=\"node.passed\"\n                             (onClick)=\"_navigateToClickedQuestDetails($event)\">\n        </spq-quest-step-cube>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/quest/components/quest-step-cube.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/quest/components/quest-step-cube.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"spq-quest-step-cube__inner\"\n     matRipple\n     [class.disabled]=\"disabled\"\n     [class.selected]=\"selected\"\n     [class.highlighted]=\"highlighted\"\n     (click)=\"_onStepCubeClick()\">\n    <div class=\"spq-quest-step-cube__text\">\n        <div class=\"spq-quest-step-cube__text-title\">\n            {{title}}\n        </div>\n        <div class=\"spq-quest-step-cube__text-subtitle\">\n            {{subtitle}}\n        </div>\n    </div>\n    <div class=\"spq-quest-step-cube__serial-number\">\n        {{serialNumber}}\n    </div>\n</div>\n<div *ngIf=\"disabled\"\n     class=\"spq-quest-step-cube__lock\">\n    <svg width=\"80px\" height=\"80px\">\n        <use xlink:href=\"#icon-lock\"/>\n    </svg>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/quest/quest.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/quest/quest.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"spq-quest__inner\">\n    <div class=\"spq-quest__flow\"\n         *ngFor=\"let questFlow of _questFlows\">\n        <spq-quest-flow [values]=\"questFlow\"\n                        [config]=\"null\">\n        </spq-quest-flow>\n    </div>\n</div>\n");

/***/ }),

/***/ "./src/app/modules/quest/components/quest-flow.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/quest/components/quest-flow.component.ts ***!
  \******************************************************************/
/*! exports provided: SPQQuestFlowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPQQuestFlowComponent", function() { return SPQQuestFlowComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_quest_flow_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/quest-flow.service */ "./src/app/modules/quest/services/quest-flow.service.ts");



let SPQQuestFlowComponent = class SPQQuestFlowComponent {
    constructor(questService) {
        this.questService = questService;
        this.hostClass = true;
    }
    ngOnInit() { }
    _trackCubeById(index, node) {
        return node.id.toString();
    }
    _navigateToClickedQuestDetails(questId) {
        this.questService.navigateToQuestDetails(questId);
    }
};
SPQQuestFlowComponent.ctorParameters = () => [
    { type: _services_quest_flow_service__WEBPACK_IMPORTED_MODULE_2__["SQPQuestFlowService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SPQQuestFlowComponent.prototype, "values", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SPQQuestFlowComponent.prototype, "config", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])("class.spq-quest-flow"),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], SPQQuestFlowComponent.prototype, "hostClass", void 0);
SPQQuestFlowComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "spq-quest-flow",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./quest-flow.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/quest/components/quest-flow.component.html")).default,
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_quest_flow_service__WEBPACK_IMPORTED_MODULE_2__["SQPQuestFlowService"]])
], SPQQuestFlowComponent);



/***/ }),

/***/ "./src/app/modules/quest/components/quest-step-cube.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/quest/components/quest-step-cube.component.ts ***!
  \***********************************************************************/
/*! exports provided: SPQQuestStepCubeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPQQuestStepCubeComponent", function() { return SPQQuestStepCubeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SPQQuestStepCubeComponent = class SPQQuestStepCubeComponent {
    constructor() {
        this.selected = false;
        this.disabled = false;
        this.highlighted = false;
        this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.hostClass = true;
    }
    _onStepCubeClick() {
        if (!this.disabled) {
            this.onClick.emit(this.id);
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], SPQQuestStepCubeComponent.prototype, "title", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], SPQQuestStepCubeComponent.prototype, "subtitle", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], SPQQuestStepCubeComponent.prototype, "serialNumber", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], SPQQuestStepCubeComponent.prototype, "selected", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], SPQQuestStepCubeComponent.prototype, "disabled", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], SPQQuestStepCubeComponent.prototype, "highlighted", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SPQQuestStepCubeComponent.prototype, "id", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], SPQQuestStepCubeComponent.prototype, "onClick", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])("class.spq-quest-step-cube"),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], SPQQuestStepCubeComponent.prototype, "hostClass", void 0);
SPQQuestStepCubeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "spq-quest-step-cube",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./quest-step-cube.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/quest/components/quest-step-cube.component.html")).default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
    })
], SPQQuestStepCubeComponent);



/***/ }),

/***/ "./src/app/modules/quest/quest.component.ts":
/*!**************************************************!*\
  !*** ./src/app/modules/quest/quest.component.ts ***!
  \**************************************************/
/*! exports provided: SPQQuesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPQQuesComponent", function() { return SPQQuesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_quest_flow_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/quest-flow.service */ "./src/app/modules/quest/services/quest-flow.service.ts");




let SPQQuesComponent = class SPQQuesComponent {
    constructor(service) {
        this.service = service;
        this._questFlows = [];
        this.subscriptions = [];
        this.hostClass = true;
    }
    ngOnInit() {
        this.subscribeToGetQuestFlow();
    }
    ngOnDestroy() {
        this.subscriptions.forEach(subscription => subscription.unsubscribe());
    }
    subscribeToGetQuestFlow() {
        this.subscriptions.push(this.service.getAllQuestFlow()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(flow => {
            this._questFlows = flow;
        }))
            .subscribe());
    }
};
SPQQuesComponent.ctorParameters = () => [
    { type: _services_quest_flow_service__WEBPACK_IMPORTED_MODULE_3__["SQPQuestFlowService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])("class.spq-quest"),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], SPQQuesComponent.prototype, "hostClass", void 0);
SPQQuesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "spq-quest",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./quest.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/quest/quest.component.html")).default,
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_quest_flow_service__WEBPACK_IMPORTED_MODULE_3__["SQPQuestFlowService"]])
], SPQQuesComponent);



/***/ }),

/***/ "./src/app/modules/quest/quest.module.ts":
/*!***********************************************!*\
  !*** ./src/app/modules/quest/quest.module.ts ***!
  \***********************************************/
/*! exports provided: SPQQuestModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPQQuestModule", function() { return SPQQuestModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_data_quest_data_flow_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/data/quest-data-flow.service */ "./src/app/services/data/quest-data-flow.service.ts");
/* harmony import */ var _components_quest_flow_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/quest-flow.component */ "./src/app/modules/quest/components/quest-flow.component.ts");
/* harmony import */ var _components_quest_step_cube_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/quest-step-cube.component */ "./src/app/modules/quest/components/quest-step-cube.component.ts");
/* harmony import */ var _quest_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./quest.component */ "./src/app/modules/quest/quest.component.ts");
/* harmony import */ var _services_quest_flow_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/quest-flow.service */ "./src/app/modules/quest/services/quest-flow.service.ts");










const QuestRoutes = [
    {
        path: "",
        component: _quest_component__WEBPACK_IMPORTED_MODULE_8__["SPQQuesComponent"]
    }
];
const matModules = [
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRippleModule"]
];
let SPQQuestModule = class SPQQuestModule {
};
SPQQuestModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _quest_component__WEBPACK_IMPORTED_MODULE_8__["SPQQuesComponent"],
            _components_quest_step_cube_component__WEBPACK_IMPORTED_MODULE_7__["SPQQuestStepCubeComponent"],
            _components_quest_flow_component__WEBPACK_IMPORTED_MODULE_6__["SPQQuestFlowComponent"]
        ],
        exports: [
            _quest_component__WEBPACK_IMPORTED_MODULE_8__["SPQQuesComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(QuestRoutes),
            ...matModules
        ],
        providers: [
            _services_data_quest_data_flow_service__WEBPACK_IMPORTED_MODULE_5__["SQPQuestFlowDataService"],
            _services_quest_flow_service__WEBPACK_IMPORTED_MODULE_9__["SQPQuestFlowService"]
        ]
    })
], SPQQuestModule);



/***/ }),

/***/ "./src/app/modules/quest/services/quest-flow.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/modules/quest/services/quest-flow.service.ts ***!
  \**************************************************************/
/*! exports provided: SQPQuestFlowService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SQPQuestFlowService", function() { return SQPQuestFlowService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../app-routers */ "./src/app/app-routers.ts");
/* harmony import */ var _services_data_quest_data_flow_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/data/quest-data-flow.service */ "./src/app/services/data/quest-data-flow.service.ts");
/* harmony import */ var _services_navigation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/navigation.service */ "./src/app/services/navigation.service.ts");





let SQPQuestFlowService = class SQPQuestFlowService {
    constructor(dataFlowService, navigationService) {
        this.dataFlowService = dataFlowService;
        this.navigationService = navigationService;
    }
    getAllQuestFlow() {
        return this.dataFlowService.getAllQuestFlow();
    }
    navigateToQuestDetails(questId) {
        this.navigationService.navigateTo(_app_routers__WEBPACK_IMPORTED_MODULE_2__["SPQRoutesMap"][_app_routers__WEBPACK_IMPORTED_MODULE_2__["SPQRoutesString"].SPQ_QUEST] + "/" + questId);
    }
};
SQPQuestFlowService.ctorParameters = () => [
    { type: _services_data_quest_data_flow_service__WEBPACK_IMPORTED_MODULE_3__["SQPQuestFlowDataService"] },
    { type: _services_navigation_service__WEBPACK_IMPORTED_MODULE_4__["SPQNavigationService"] }
];
SQPQuestFlowService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_quest_data_flow_service__WEBPACK_IMPORTED_MODULE_3__["SQPQuestFlowDataService"],
        _services_navigation_service__WEBPACK_IMPORTED_MODULE_4__["SPQNavigationService"]])
], SQPQuestFlowService);



/***/ })

}]);
//# sourceMappingURL=quest-quest-module-es2015.js.map
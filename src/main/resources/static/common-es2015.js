(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/services/data/quest-data-flow.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/services/data/quest-data-flow.service.ts ***!
  \**********************************************************/
/*! exports provided: SQPQuestFlowDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SQPQuestFlowDataService", function() { return SQPQuestFlowDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _abstract_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./abstract-data.service */ "./src/app/services/data/abstract-data.service.ts");



let SQPQuestFlowDataService = class SQPQuestFlowDataService extends _abstract_data_service__WEBPACK_IMPORTED_MODULE_2__["SPQDataService"] {
    constructor() {
        super(...arguments);
        this.allFlowsURL = "section/flow/all";
        this.flowBriefsURL = "section/brief/all";
    }
    getAllQuestFlow() {
        return this.get(this.allFlowsURL);
    }
    getAllQuestFlowBriefs() {
        return this.get(this.flowBriefsURL);
    }
};
SQPQuestFlowDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], SQPQuestFlowDataService);



/***/ }),

/***/ "./src/app/services/data/quest-details-data.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/services/data/quest-details-data.service.ts ***!
  \*************************************************************/
/*! exports provided: SPQQuestDetailsDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPQQuestDetailsDataService", function() { return SPQQuestDetailsDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _abstract_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./abstract-data.service */ "./src/app/services/data/abstract-data.service.ts");




let SPQQuestDetailsDataService = class SPQQuestDetailsDataService extends _abstract_data_service__WEBPACK_IMPORTED_MODULE_3__["SPQDataService"] {
    constructor() {
        super(...arguments);
        this.taskDetailsUrl = "task";
        this.taskAnswerUrl = "task/answer";
        this.questAllTaskBriefUrl = "task/brief/section";
        this.questTaskBriefUrl = "task/brief/";
        this.questTooltipUrl = "task/tooltip/lvl";
        this.questTooltipCountUrl = "task/tooltip/count";
    }
    getQuestTaskById(taskId) {
        return this.get(this.taskDetailsUrl, {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set("taskId", taskId.toString())
        });
    }
    getQuestTaskBriefById(taskId) {
        return this.get(this.questTaskBriefUrl, {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set("taskId", taskId.toString())
        });
    }
    setQuestAnswer(answer) {
        return this.post(this.taskAnswerUrl, answer);
    }
    getQuestTooltipByLvl(tooltip) {
        return this.post(this.questTooltipUrl, tooltip);
    }
    getQuestTooltipCountByLvl(taskId) {
        return this.get(this.questTooltipCountUrl, {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set("taskId", taskId.toString())
        });
    }
};
SPQQuestDetailsDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], SPQQuestDetailsDataService);



/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map
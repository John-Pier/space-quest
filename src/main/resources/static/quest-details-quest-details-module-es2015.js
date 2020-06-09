(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["quest-details-quest-details-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/quest-details/components/embed/finish-action-popup.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/quest-details/components/embed/finish-action-popup.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 mat-dialog-title>Отлично</h1>\n<div class=\"spq-finish-action-popup__inner\">\n    <div class=\"spq-finish-action-popup__caption\">\n        Вы успешно ответили на вопрос!\n    </div>\n        <mat-dialog-actions class=\"spq-finish-action-popup__buttons\"\n                            align=\"end\">\n            <button mat-button\n                    [mat-dialog-close]=\"_actionsPopupResult.BACK\">\n                Назад к списку\n            </button>\n            <button *ngIf=\"!_nextDisable\"\n                    mat-button\n                    color=\"primary\"\n                    [mat-dialog-close]=\"_actionsPopupResult.NEXT\"\n                    cdkFocusInitial>\n                Продолжить\n            </button>\n        </mat-dialog-actions>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/quest-details/components/embed/hint-popup.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/quest-details/components/embed/hint-popup.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 mat-dialog-title>Подсказка</h1>\n<div class=\"spq-hint-popup__inner\">\n    <div class=\"spq-hint-popup__hint\">\n        {{_hint}}\n    </div>\n    <mat-dialog-actions class=\"spq-hint-popup__button\"\n                        align=\"end\">\n        <button mat-button\n                [mat-dialog-close]=\"true\"\n                cdkFocusInitial>\n            Ок\n        </button>\n    </mat-dialog-actions>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/quest-details/components/qd-answer.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/quest-details/components/qd-answer.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"spq-qd-answer__inner\">\n    <div class=\"spq-qd-answer__bar\">\n        <div class=\"spq-qd-answer__bar-attempts\">\n            <svg *ngFor=\"let attempt of _attemptsModel; trackBy: _trackByAttemptSpentFn\">\n                <ng-template [ngTemplateOutlet]=\"attempt.attemptSpent ? spentTemplate : noSpentTemplate\">\n                </ng-template>\n                <ng-template #noSpentTemplate>\n                    <use xlink:href=\"#icon-rocket\"/>\n                </ng-template>\n                <ng-template #spentTemplate>\n                    <use xlink:href=\"#icon-non-color-rocket\"/>\n                </ng-template>\n            </svg>\n        </div>\n        <div class=\"spq-qd-answer__bar-hints\"\n             *ngFor=\"let used of _tooltipArray; index as i\"\n             [matTooltip]=\"!used ? 'Вы можете воспользоваться этой подсказкой' : 'Вы уже использовали эту подсказку'\"\n             [matTooltipPosition]=\"'after'\"\n             (click)=\"_onHintsClick(i)\">\n            <svg width=\"28px\" height=\"28px\">\n                <use *ngIf=\"!used; else usedHintsTemplate\"\n                     xlink:href=\"#icon-lamp\"/>\n                <ng-template #usedHintsTemplate>\n                    <use xlink:href=\"#icon-simple-lamp\"/>\n                </ng-template>\n            </svg>\n        </div>\n    </div>\n    <div class=\"spq-qd-answer__answer\">\n        <form class=\"spq-qd-answer__form\"\n              [formGroup]=\"_answerFormGroupModel\"\n              (ngSubmit)=\"_onSubmitClick(input.value)\">\n            <div class=\"_input\">\n                <mat-form-field appearance=\"outline\">\n                    <mat-label>Ваш ответ</mat-label>\n                    <input #input\n                           formControlName=\"answerInput\"\n                           matInput\n                           placeholder=\"Ответ\">\n                    <mat-hint *ngIf=\"_failureAnswer\">Попробуйте еще раз</mat-hint>\n                </mat-form-field>\n            </div>\n            <button class=\"_button\"\n                    type=\"submit\"\n                    mat-raised-button color=\"primary\"\n                    [disabled]=\"_localLoading || _answerFormGroupModel.invalid || !_answerFormGroupModel.dirty\">\n                Отправить\n            </button>\n        </form>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/quest-details/components/qd-question.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/quest-details/components/qd-question.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"spq-qd-question__inner\">\n    <div class=\"spq-qd-question__content\"\n         *ngIf=\"_safeUrl && _taskType\"\n         [ngSwitch]=\"_taskType\">\n        <iframe class=\"spq-qd-question__content-video\"\n                *ngSwitchCase=\"_questUrlType.VIDEO\"\n                [src]=\"_safeUrl\"\n                frameborder=\"0\"\n                allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\">\n        </iframe>\n        <img class=\"spq-qd-question__content-picture\"\n             *ngSwitchCase=\"_questUrlType.PICTURE\"\n             [src]=\"_safeUrl\"\n             importance=\"high\"\n             alt=\"Question Picture\">\n    </div>\n    <div class=\"spq-qd-question__question\">\n        <div class=\"spq-qd-question__question-caption\">\n            {{questTask.text}}\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/quest-details/quest-details.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/quest-details/quest-details.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"spq-quest-details__inner\">\n    <div class=\"spq-quest-details__header\">\n        <div class=\"spq-quest-details__header-caption\">\n            {{_questTask?.title}}\n        </div>\n        <div class=\"spq-quest-details__header-actions\">\n            <button mat-stroked-button\n                    (click)=\"_onBackClick()\">\n                Назад\n            </button>\n        </div>\n    </div>\n    <div class=\"spq-quest-details__wrapper\">\n        <spq-qd-question [questTask]=\"_questTask\">\n        </spq-qd-question>\n        <spq-qd-answer [questTask]=\"_questTask\">\n        </spq-qd-answer>\n    </div>\n</div>\n");

/***/ }),

/***/ "./src/app/modules/quest-details/components/embed/finish-action-popup.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/quest-details/components/embed/finish-action-popup.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: SPQFinishActionPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPQFinishActionPopupComponent", function() { return SPQFinishActionPopupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _types_actions_popup_result__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../types/actions-popup-result */ "./src/app/modules/quest-details/types/actions-popup-result.ts");




let SPQFinishActionPopupComponent = class SPQFinishActionPopupComponent {
    constructor(nextQuestDetailsExist) {
        this._actionsPopupResult = _types_actions_popup_result__WEBPACK_IMPORTED_MODULE_3__["SPQActionsPopupResult"];
        this.hostClass = true;
        this._nextDisable = !nextQuestDetailsExist;
    }
};
SPQFinishActionPopupComponent.ctorParameters = () => [
    { type: Boolean, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])("class.spq-finish-action-popup"),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], SPQFinishActionPopupComponent.prototype, "hostClass", void 0);
SPQFinishActionPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "spq-finish-action-popup",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./finish-action-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/quest-details/components/embed/finish-action-popup.component.html")).default,
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])
], SPQFinishActionPopupComponent);



/***/ }),

/***/ "./src/app/modules/quest-details/components/embed/hint-popup.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/modules/quest-details/components/embed/hint-popup.component.ts ***!
  \********************************************************************************/
/*! exports provided: SPQHintPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPQHintPopupComponent", function() { return SPQHintPopupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");



let SPQHintPopupComponent = class SPQHintPopupComponent {
    constructor(hint) {
        this._hint = "";
        this.hostClass = true;
        this._hint = hint;
    }
};
SPQHintPopupComponent.ctorParameters = () => [
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])("class.spq-hint-popup"),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], SPQHintPopupComponent.prototype, "hostClass", void 0);
SPQHintPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "spq-hint-popup",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./hint-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/quest-details/components/embed/hint-popup.component.html")).default,
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String])
], SPQHintPopupComponent);



/***/ }),

/***/ "./src/app/modules/quest-details/components/qd-answer.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/quest-details/components/qd-answer.component.ts ***!
  \*************************************************************************/
/*! exports provided: SPQQuestDetailsAnswerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPQQuestDetailsAnswerComponent", function() { return SPQQuestDetailsAnswerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_qd_navigation_helper_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/qd-navigation-helper.service */ "./src/app/modules/quest-details/services/qd-navigation-helper.service.ts");
/* harmony import */ var _services_quest_details_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/quest-details.service */ "./src/app/modules/quest-details/services/quest-details.service.ts");
/* harmony import */ var _types_actions_popup_result__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../types/actions-popup-result */ "./src/app/modules/quest-details/types/actions-popup-result.ts");
/* harmony import */ var _embed_finish_action_popup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./embed/finish-action-popup.component */ "./src/app/modules/quest-details/components/embed/finish-action-popup.component.ts");
/* harmony import */ var _embed_hint_popup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./embed/hint-popup.component */ "./src/app/modules/quest-details/components/embed/hint-popup.component.ts");










let SPQQuestDetailsAnswerComponent = class SPQQuestDetailsAnswerComponent {
    constructor(dialogService, questDetailsService, navigationService) {
        this.dialogService = dialogService;
        this.questDetailsService = questDetailsService;
        this.navigationService = navigationService;
        this._hintsUsed = false;
        this._failureAnswer = false;
        this._attemptsModel = [
            {
                attemptSpent: false
            },
            {
                attemptSpent: false
            },
            {
                attemptSpent: false
            }
        ];
        this._localLoading = false;
        this._tooltipArray = [];
        this.nextTaskId = "";
        this.hostClass = true;
    }
    ngOnChanges(changes) {
        if (changes["questTask"]) {
            this.initAnswerForm();
            this.subscribeToGetTooltipsCount();
        }
    }
    s() {
        this.initAnswerForm();
        this.subscribeToGetTooltipsCount();
    }
    _onSubmitClick(answer) {
        this.subscribeToCheckAnswer(answer);
    }
    _onHintsClick(count) {
        if (!this._hintsUsed) {
            this._tooltipArray[count] = true;
            this.openHintsDialog(count);
        }
    }
    _trackByAttemptSpentFn(index, attempt) {
        return "" + index + attempt.attemptSpent.toString();
    }
    ngOnDestroy() {
        // this.subscription.forEach(el => el.unsubscribe());
    }
    initAnswerForm() {
        this._answerFormGroupModel = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            answerInput: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1)])
        });
    }
    subscribeToGetTooltipsCount() {
        this.questDetailsService.getQuestTooltipCountByLvl(this.questTask.uuid)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(count => {
            this._tooltipArray = new Array(count).fill(false);
        }))
            .subscribe();
    }
    updateAttemptsModel() {
        this._attemptsModel.pop();
        this._attemptsModel.unshift({
            attemptSpent: true
        });
    }
    subscribeToCheckAnswer(answer) {
        this._localLoading = true;
        this.questDetailsService.setQuestAnswer(this.questTask.uuid, answer)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(response => {
            this._failureAnswer = !response.isPassed;
            if (this._failureAnswer) {
                this.updateAttemptsModel();
                this.setAnswerFormError();
            }
            else {
                this.nextTaskId = response.currentTaskId;
                this.clearField();
                this.openFinishDialogAndSubscribeToClose(!response.isAllPassed && !!response.currentTaskId);
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(() => {
            this._localLoading = false;
        }))
            .subscribe();
    }
    setAnswerFormError() {
        this._answerFormGroupModel.controls["answerInput"].setErrors({ ["answerError"]: "Ответ не верный" });
    }
    clearField() {
        this._answerFormGroupModel.patchValue({
            answerInput: ""
        }, {
            emitEvent: false
        });
    }
    openFinishDialogAndSubscribeToClose(hasNext) {
        this.dialogService.open(_embed_finish_action_popup_component__WEBPACK_IMPORTED_MODULE_8__["SPQFinishActionPopupComponent"], {
            data: hasNext
        })
            .afterClosed()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(result => this.navigateFromPopupResult(result)))
            .subscribe();
    }
    openHintsDialog(lvl) {
        this.questDetailsService.getQuestTooltipByLvl(this.questTask.uuid, lvl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(hints => {
            this.dialogService.open(_embed_hint_popup_component__WEBPACK_IMPORTED_MODULE_9__["SPQHintPopupComponent"], { data: hints.text });
        }))
            .subscribe();
    }
    navigateFromPopupResult(result) {
        switch (result) {
            case _types_actions_popup_result__WEBPACK_IMPORTED_MODULE_7__["SPQActionsPopupResult"].BACK:
                this.navigationService.navigateToQuestFlow();
                break;
            case _types_actions_popup_result__WEBPACK_IMPORTED_MODULE_7__["SPQActionsPopupResult"].NEXT:
                this.nextTaskId
                    ? this.navigationService.navigateToNextQuestDetails(this.nextTaskId)
                    : this.navigationService.navigateToQuestFlow();
                break;
            default:
                throw new Error("Unknown value of SPQActionsPopupResult");
        }
    }
};
SPQQuestDetailsAnswerComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
    { type: _services_quest_details_service__WEBPACK_IMPORTED_MODULE_6__["SPQQuestDetailsService"] },
    { type: _services_qd_navigation_helper_service__WEBPACK_IMPORTED_MODULE_5__["SPQQuestDetailsNavigationService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SPQQuestDetailsAnswerComponent.prototype, "questTask", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])("class.spq-qd-answer"),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], SPQQuestDetailsAnswerComponent.prototype, "hostClass", void 0);
SPQQuestDetailsAnswerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "spq-qd-answer",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./qd-answer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/quest-details/components/qd-answer.component.html")).default,
        providers: [
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]
        ]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
        _services_quest_details_service__WEBPACK_IMPORTED_MODULE_6__["SPQQuestDetailsService"],
        _services_qd_navigation_helper_service__WEBPACK_IMPORTED_MODULE_5__["SPQQuestDetailsNavigationService"]])
], SPQQuestDetailsAnswerComponent);



/***/ }),

/***/ "./src/app/modules/quest-details/components/qd-question.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/quest-details/components/qd-question.component.ts ***!
  \***************************************************************************/
/*! exports provided: SPQQuestTaskUrlType, SPQQuestDetailsQuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPQQuestTaskUrlType", function() { return SPQQuestTaskUrlType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPQQuestDetailsQuestionComponent", function() { return SPQQuestDetailsQuestionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_quest_details_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/quest-details.service */ "./src/app/modules/quest-details/services/quest-details.service.ts");



var SPQQuestTaskUrlType;
(function (SPQQuestTaskUrlType) {
    SPQQuestTaskUrlType["VIDEO"] = "video";
    SPQQuestTaskUrlType["PICTURE"] = "picture";
})(SPQQuestTaskUrlType || (SPQQuestTaskUrlType = {}));
let SPQQuestDetailsQuestionComponent = class SPQQuestDetailsQuestionComponent {
    constructor(questDetailsService) {
        this.questDetailsService = questDetailsService;
        this._questUrlType = SPQQuestTaskUrlType;
        this.hostClass = true;
    }
    ngOnChanges(changes) {
        if (changes["questTask"]) {
            this.setTaskType();
            this.makeSafeUrl();
        }
    }
    setTaskType() {
        this._taskType = this.questTask.url
            ? this.questTask.url.includes(".")
                ? SPQQuestTaskUrlType.PICTURE
                : SPQQuestTaskUrlType.VIDEO
            : null;
    }
    makeSafeUrl() {
        switch (this._taskType) {
            case SPQQuestTaskUrlType.PICTURE:
                this._safeUrl = this.questDetailsService.makeSafeImageUrl(this.questTask.url);
                break;
            case SPQQuestTaskUrlType.VIDEO:
                this._safeUrl = this.questDetailsService.makeSafeVideoUrl(this.questTask.url);
                break;
        }
    }
};
SPQQuestDetailsQuestionComponent.ctorParameters = () => [
    { type: _services_quest_details_service__WEBPACK_IMPORTED_MODULE_2__["SPQQuestDetailsService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SPQQuestDetailsQuestionComponent.prototype, "questTask", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])("class.spq-qd-question"),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], SPQQuestDetailsQuestionComponent.prototype, "hostClass", void 0);
SPQQuestDetailsQuestionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "spq-qd-question",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./qd-question.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/quest-details/components/qd-question.component.html")).default,
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_quest_details_service__WEBPACK_IMPORTED_MODULE_2__["SPQQuestDetailsService"]])
], SPQQuestDetailsQuestionComponent);



/***/ }),

/***/ "./src/app/modules/quest-details/quest-details.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/quest-details/quest-details.component.ts ***!
  \******************************************************************/
/*! exports provided: SPQQuestDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPQQuestDetailsComponent", function() { return SPQQuestDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_qd_navigation_helper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/qd-navigation-helper.service */ "./src/app/modules/quest-details/services/qd-navigation-helper.service.ts");





let SPQQuestDetailsComponent = class SPQQuestDetailsComponent {
    constructor(route, navigationService) {
        this.route = route;
        this.navigationService = navigationService;
        this.hostClass = true;
        this.subscribeToGetQuestTask();
    }
    ngOnInit() { }
    _onBackClick() {
        this.navigationService.back();
    }
    subscribeToGetQuestTask() {
        this.route.data
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => {
            return data.questTask;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(task => {
            this._questTask = task;
        }))
            .subscribe();
    }
};
SPQQuestDetailsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_qd_navigation_helper_service__WEBPACK_IMPORTED_MODULE_4__["SPQQuestDetailsNavigationService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])("class.spq-quest-details"),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], SPQQuestDetailsComponent.prototype, "hostClass", void 0);
SPQQuestDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "spq-quest-details",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./quest-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/quest-details/quest-details.component.html")).default,
        providers: [
            _services_qd_navigation_helper_service__WEBPACK_IMPORTED_MODULE_4__["SPQQuestDetailsNavigationService"]
        ]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _services_qd_navigation_helper_service__WEBPACK_IMPORTED_MODULE_4__["SPQQuestDetailsNavigationService"]])
], SPQQuestDetailsComponent);



/***/ }),

/***/ "./src/app/modules/quest-details/quest-details.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/quest-details/quest-details.module.ts ***!
  \***************************************************************/
/*! exports provided: SPQQuestDetailsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPQQuestDetailsModule", function() { return SPQQuestDetailsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_data_quest_details_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/data/quest-details-data.service */ "./src/app/services/data/quest-details-data.service.ts");
/* harmony import */ var _components_embed_finish_action_popup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/embed/finish-action-popup.component */ "./src/app/modules/quest-details/components/embed/finish-action-popup.component.ts");
/* harmony import */ var _components_embed_hint_popup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/embed/hint-popup.component */ "./src/app/modules/quest-details/components/embed/hint-popup.component.ts");
/* harmony import */ var _components_qd_answer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/qd-answer.component */ "./src/app/modules/quest-details/components/qd-answer.component.ts");
/* harmony import */ var _components_qd_question_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/qd-question.component */ "./src/app/modules/quest-details/components/qd-question.component.ts");
/* harmony import */ var _quest_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./quest-details.component */ "./src/app/modules/quest-details/quest-details.component.ts");
/* harmony import */ var _services_quest_details_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/quest-details.service */ "./src/app/modules/quest-details/services/quest-details.service.ts");
/* harmony import */ var _services_quest_task_resolver__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/quest-task.resolver */ "./src/app/modules/quest-details/services/quest-task.resolver.ts");














const QuestDetailsRoutes = [
    {
        path: "",
        component: _quest_details_component__WEBPACK_IMPORTED_MODULE_11__["SPQQuestDetailsComponent"],
        resolve: {
            questTask: _services_quest_task_resolver__WEBPACK_IMPORTED_MODULE_13__["SPQQuestTaskResolver"]
        }
    }
];
const matModules = [
    _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTooltipModule"]
];
let SPQQuestDetailsModule = class SPQQuestDetailsModule {
};
SPQQuestDetailsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(QuestDetailsRoutes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ...matModules
        ],
        declarations: [
            _quest_details_component__WEBPACK_IMPORTED_MODULE_11__["SPQQuestDetailsComponent"],
            _components_qd_question_component__WEBPACK_IMPORTED_MODULE_10__["SPQQuestDetailsQuestionComponent"],
            _components_qd_answer_component__WEBPACK_IMPORTED_MODULE_9__["SPQQuestDetailsAnswerComponent"],
            _components_embed_finish_action_popup_component__WEBPACK_IMPORTED_MODULE_7__["SPQFinishActionPopupComponent"],
            _components_embed_hint_popup_component__WEBPACK_IMPORTED_MODULE_8__["SPQHintPopupComponent"]
        ],
        entryComponents: [
            _components_embed_finish_action_popup_component__WEBPACK_IMPORTED_MODULE_7__["SPQFinishActionPopupComponent"],
            _components_embed_hint_popup_component__WEBPACK_IMPORTED_MODULE_8__["SPQHintPopupComponent"]
        ],
        exports: [
            _quest_details_component__WEBPACK_IMPORTED_MODULE_11__["SPQQuestDetailsComponent"]
        ],
        providers: [
            _services_data_quest_details_data_service__WEBPACK_IMPORTED_MODULE_6__["SPQQuestDetailsDataService"],
            _services_quest_details_service__WEBPACK_IMPORTED_MODULE_12__["SPQQuestDetailsService"],
            _services_quest_task_resolver__WEBPACK_IMPORTED_MODULE_13__["SPQQuestTaskResolver"]
        ]
    })
], SPQQuestDetailsModule);



/***/ }),

/***/ "./src/app/modules/quest-details/services/qd-navigation-helper.service.ts":
/*!********************************************************************************!*\
  !*** ./src/app/modules/quest-details/services/qd-navigation-helper.service.ts ***!
  \********************************************************************************/
/*! exports provided: SPQQuestDetailsNavigationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPQQuestDetailsNavigationService", function() { return SPQQuestDetailsNavigationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../app-routers */ "./src/app/app-routers.ts");
/* harmony import */ var _services_navigation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/navigation.service */ "./src/app/services/navigation.service.ts");
/* harmony import */ var _quest_details_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./quest-details.service */ "./src/app/modules/quest-details/services/quest-details.service.ts");





let SPQQuestDetailsNavigationService = class SPQQuestDetailsNavigationService {
    constructor(navigationService, questDetailsService) {
        this.navigationService = navigationService;
        this.questDetailsService = questDetailsService;
    }
    navigateToQuestFlow() {
        this.navigationService.navigateTo(_app_routers__WEBPACK_IMPORTED_MODULE_2__["SPQRoutesMap"][_app_routers__WEBPACK_IMPORTED_MODULE_2__["SPQRoutesString"].SPQ_QUEST]);
    }
    navigateToNextQuestDetails(nextTaskId) {
        this.navigationService.navigateTo(_app_routers__WEBPACK_IMPORTED_MODULE_2__["SPQRoutesMap"][_app_routers__WEBPACK_IMPORTED_MODULE_2__["SPQRoutesString"].SPQ_QUEST] + "/" + nextTaskId);
    }
    back() {
        this.navigationService.back();
    }
};
SPQQuestDetailsNavigationService.ctorParameters = () => [
    { type: _services_navigation_service__WEBPACK_IMPORTED_MODULE_3__["SPQNavigationService"] },
    { type: _quest_details_service__WEBPACK_IMPORTED_MODULE_4__["SPQQuestDetailsService"] }
];
SPQQuestDetailsNavigationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_navigation_service__WEBPACK_IMPORTED_MODULE_3__["SPQNavigationService"],
        _quest_details_service__WEBPACK_IMPORTED_MODULE_4__["SPQQuestDetailsService"]])
], SPQQuestDetailsNavigationService);



/***/ }),

/***/ "./src/app/modules/quest-details/services/quest-details.service.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/quest-details/services/quest-details.service.ts ***!
  \*************************************************************************/
/*! exports provided: SPQQuestDetailsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPQQuestDetailsService", function() { return SPQQuestDetailsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _services_data_quest_details_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/data/quest-details-data.service */ "./src/app/services/data/quest-details-data.service.ts");




let SPQQuestDetailsService = class SPQQuestDetailsService {
    constructor(dataService, sanitizer) {
        this.dataService = dataService;
        this.sanitizer = sanitizer;
        this.videoUrl = "https://www.youtube.com/embed/";
        this.videoEndPartUrl = "?loop=1&modestbranding=1&color=white";
    }
    getQuestTooltipByLvl(taskId, lvl) {
        return this.dataService.getQuestTooltipByLvl({
            taskUUID: taskId,
            lvl: lvl
        });
    }
    getQuestTooltipCountByLvl(taskId) {
        return this.dataService.getQuestTooltipCountByLvl(taskId);
    }
    setQuestAnswer(taskId, answer) {
        return this.dataService.setQuestAnswer({
            taskUUID: taskId,
            answer: answer
        });
    }
    getQuestTaskById(taskId) {
        return this.dataService.getQuestTaskById(taskId);
    }
    makeSafeImageUrl(imageUrl) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(this.makeImageUrl(imageUrl));
    }
    makeSafeVideoUrl(videoUrl) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(this.makeVideoUrl(videoUrl));
    }
    makeVideoUrl(videoUrl) {
        return this.videoUrl + videoUrl + this.videoEndPartUrl;
    }
    makeImageUrl(imageUrl) {
        return this.dataService.getResourcesUrl() + imageUrl;
    }
};
SPQQuestDetailsService.ctorParameters = () => [
    { type: _services_data_quest_details_data_service__WEBPACK_IMPORTED_MODULE_3__["SPQQuestDetailsDataService"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
];
SPQQuestDetailsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_quest_details_data_service__WEBPACK_IMPORTED_MODULE_3__["SPQQuestDetailsDataService"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
], SPQQuestDetailsService);



/***/ }),

/***/ "./src/app/modules/quest-details/services/quest-task.resolver.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/quest-details/services/quest-task.resolver.ts ***!
  \***********************************************************************/
/*! exports provided: SPQQuestTaskResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPQQuestTaskResolver", function() { return SPQQuestTaskResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _quest_details_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./quest-details.service */ "./src/app/modules/quest-details/services/quest-details.service.ts");




let SPQQuestTaskResolver = class SPQQuestTaskResolver {
    constructor(questDetailsService) {
        this.questDetailsService = questDetailsService;
    }
    resolve(route, state) {
        const taskId = route.paramMap.get("id");
        return this.questDetailsService.getQuestTaskById(taskId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1));
    }
};
SPQQuestTaskResolver.ctorParameters = () => [
    { type: _quest_details_service__WEBPACK_IMPORTED_MODULE_3__["SPQQuestDetailsService"] }
];
SPQQuestTaskResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_quest_details_service__WEBPACK_IMPORTED_MODULE_3__["SPQQuestDetailsService"]])
], SPQQuestTaskResolver);



/***/ }),

/***/ "./src/app/modules/quest-details/types/actions-popup-result.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/quest-details/types/actions-popup-result.ts ***!
  \*********************************************************************/
/*! exports provided: SPQActionsPopupResult */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPQActionsPopupResult", function() { return SPQActionsPopupResult; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var SPQActionsPopupResult;
(function (SPQActionsPopupResult) {
    SPQActionsPopupResult["NEXT"] = "next";
    SPQActionsPopupResult["BACK"] = "back";
})(SPQActionsPopupResult || (SPQActionsPopupResult = {}));


/***/ })

}]);
//# sourceMappingURL=quest-details-quest-details-module-es2015.js.map
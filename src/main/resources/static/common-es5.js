function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
  /***/
  "./src/app/services/data/quest-data-flow.service.ts":
  /*!**********************************************************!*\
    !*** ./src/app/services/data/quest-data-flow.service.ts ***!
    \**********************************************************/

  /*! exports provided: SQPQuestFlowDataService */

  /***/
  function srcAppServicesDataQuestDataFlowServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SQPQuestFlowDataService", function () {
      return SQPQuestFlowDataService;
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

    var SQPQuestFlowDataService = /*#__PURE__*/function (_abstract_data_servic) {
      _inherits(SQPQuestFlowDataService, _abstract_data_servic);

      var _super = _createSuper(SQPQuestFlowDataService);

      function SQPQuestFlowDataService() {
        var _this;

        _classCallCheck(this, SQPQuestFlowDataService);

        _this = _super.apply(this, arguments);
        _this.allFlowsURL = "section/flow/all";
        _this.flowBriefsURL = "section/brief/all";
        return _this;
      }

      _createClass(SQPQuestFlowDataService, [{
        key: "getAllQuestFlow",
        value: function getAllQuestFlow() {
          return this.get(this.allFlowsURL);
        }
      }, {
        key: "getAllQuestFlowBriefs",
        value: function getAllQuestFlowBriefs() {
          return this.get(this.flowBriefsURL);
        }
      }]);

      return SQPQuestFlowDataService;
    }(_abstract_data_service__WEBPACK_IMPORTED_MODULE_2__["SPQDataService"]);

    SQPQuestFlowDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], SQPQuestFlowDataService);
    /***/
  },

  /***/
  "./src/app/services/data/quest-details-data.service.ts":
  /*!*************************************************************!*\
    !*** ./src/app/services/data/quest-details-data.service.ts ***!
    \*************************************************************/

  /*! exports provided: SPQQuestDetailsDataService */

  /***/
  function srcAppServicesDataQuestDetailsDataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SPQQuestDetailsDataService", function () {
      return SPQQuestDetailsDataService;
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


    var _abstract_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./abstract-data.service */
    "./src/app/services/data/abstract-data.service.ts");

    var SPQQuestDetailsDataService = /*#__PURE__*/function (_abstract_data_servic2) {
      _inherits(SPQQuestDetailsDataService, _abstract_data_servic2);

      var _super2 = _createSuper(SPQQuestDetailsDataService);

      function SPQQuestDetailsDataService() {
        var _this2;

        _classCallCheck(this, SPQQuestDetailsDataService);

        _this2 = _super2.apply(this, arguments);
        _this2.taskDetailsUrl = "task";
        _this2.taskAnswerUrl = "task/answer";
        _this2.questAllTaskBriefUrl = "task/brief/section";
        _this2.questTaskBriefUrl = "task/brief/";
        _this2.questTooltipUrl = "task/tooltip/lvl";
        _this2.questTooltipCountUrl = "task/tooltip/count";
        return _this2;
      }

      _createClass(SPQQuestDetailsDataService, [{
        key: "getQuestTaskById",
        value: function getQuestTaskById(taskId) {
          return this.get(this.taskDetailsUrl, {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set("taskId", taskId.toString())
          });
        }
      }, {
        key: "getQuestTaskBriefById",
        value: function getQuestTaskBriefById(taskId) {
          return this.get(this.questTaskBriefUrl, {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set("taskId", taskId.toString())
          });
        }
      }, {
        key: "setQuestAnswer",
        value: function setQuestAnswer(answer) {
          return this.post(this.taskAnswerUrl, answer);
        }
      }, {
        key: "getQuestTooltipByLvl",
        value: function getQuestTooltipByLvl(tooltip) {
          return this.post(this.questTooltipUrl, tooltip);
        }
      }, {
        key: "getQuestTooltipCountByLvl",
        value: function getQuestTooltipCountByLvl(taskId) {
          return this.get(this.questTooltipCountUrl, {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set("taskId", taskId.toString())
          });
        }
      }]);

      return SPQQuestDetailsDataService;
    }(_abstract_data_service__WEBPACK_IMPORTED_MODULE_3__["SPQDataService"]);

    SPQQuestDetailsDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()], SPQQuestDetailsDataService);
    /***/
  }
}]);
//# sourceMappingURL=common-es5.js.map
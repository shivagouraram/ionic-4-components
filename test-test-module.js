(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["test-test-module"],{

/***/ "./src/app/test/test.module.ts":
/*!*************************************!*\
  !*** ./src/app/test/test.module.ts ***!
  \*************************************/
/*! exports provided: TestPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestPageModule", function() { return TestPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _fivethree_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fivethree/core */ "./dist/@fivethree/core/fesm5/fivethree-core.js");
/* harmony import */ var _test_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./test.page */ "./src/app/test/test.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _test_page__WEBPACK_IMPORTED_MODULE_6__["TestPage"]
    }
];
var TestPageModule = /** @class */ (function () {
    function TestPageModule() {
    }
    TestPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _fivethree_core__WEBPACK_IMPORTED_MODULE_5__["FivethreeCoreModule"]
            ],
            declarations: [_test_page__WEBPACK_IMPORTED_MODULE_6__["TestPage"]]
        })
    ], TestPageModule);
    return TestPageModule;
}());



/***/ }),

/***/ "./src/app/test/test.page.html":
/*!*************************************!*\
  !*** ./src/app/test/test.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <fiv-back-button></fiv-back-button>\n    </ion-buttons>\n    <ion-title>test</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-button (click)=\"show()\">\n    Show\n  </ion-button>\n  <ion-button (click)=\"hide()\">\n    hide\n  </ion-button>\n\n  <ion-button (click)=\"online()\">\n    set online\n  </ion-button>\n\n  <ion-button (click)=\"offline()\">\n    set offline\n  </ion-button>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/test/test.page.scss":
/*!*************************************!*\
  !*** ./src/app/test/test.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlc3QvdGVzdC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/test/test.page.ts":
/*!***********************************!*\
  !*** ./src/app/test/test.page.ts ***!
  \***********************************/
/*! exports provided: TestPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestPage", function() { return TestPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fivethree_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fivethree/core */ "./dist/@fivethree/core/fesm5/fivethree-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TestPage = /** @class */ (function () {
    function TestPage(overlay) {
        this.overlay = overlay;
    }
    TestPage.prototype.ngOnInit = function () {
    };
    TestPage.prototype.show = function () {
        if (!this.componentRef) {
            this.componentRef = this.overlay.createOverlay(_fivethree_core__WEBPACK_IMPORTED_MODULE_1__["FivNetworkStatus"]);
            this.componentRef.instance.onClick.subscribe(this.onclick);
        }
        else {
            this.componentRef.instance.show();
        }
    };
    TestPage.prototype.hide = function () {
        if (this.componentRef) {
            this.componentRef.instance.hide();
        }
    };
    TestPage.prototype.online = function () {
        if (this.componentRef) {
            this.componentRef.instance.setStatus('online');
        }
    };
    TestPage.prototype.offline = function () {
        if (this.componentRef) {
            this.componentRef.instance.setStatus('offline');
        }
    };
    TestPage.prototype.onclick = function (component) {
        console.log(component);
    };
    TestPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-test',
            template: __webpack_require__(/*! ./test.page.html */ "./src/app/test/test.page.html"),
            styles: [__webpack_require__(/*! ./test.page.scss */ "./src/app/test/test.page.scss")]
        }),
        __metadata("design:paramtypes", [_fivethree_core__WEBPACK_IMPORTED_MODULE_1__["FivOverlayService"]])
    ], TestPage);
    return TestPage;
}());



/***/ })

}]);
//# sourceMappingURL=test-test-module.js.map
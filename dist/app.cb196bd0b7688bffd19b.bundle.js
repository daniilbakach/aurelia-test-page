"use strict";
(self["webpackChunkgit_statistic"] = self["webpackChunkgit_statistic"] || []).push([["app"],{

/***/ "app.html":
/*!**********************!*\
  !*** ./src/app.html ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<template>\n  <h1>${message}</h1>\n</template>\n";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "app":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "App": () => (/* binding */ App)
/* harmony export */ });
var App = (function () {
    function App() {
        this.message = 'Hello World!';
    }
    return App;
}());



/***/ }),

/***/ "main":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "configure": () => (/* binding */ configure)
/* harmony export */ });
/* harmony import */ var _config_environment_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/environment.json */ 407);
/* harmony import */ var aurelia_pal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-pal */ 15);


function configure(aurelia) {
    aurelia.use
        .standardConfiguration()
        .feature('resources/index');
    aurelia.use.developmentLogging(_config_environment_json__WEBPACK_IMPORTED_MODULE_0__.debug ? 'debug' : 'warn');
    if (_config_environment_json__WEBPACK_IMPORTED_MODULE_0__.testing) {
        aurelia.use.plugin('aurelia-testing');
    }
    aurelia.start().then(function () { return aurelia.setRoot('app'); });
}


/***/ }),

/***/ "resources/index":
/*!********************************!*\
  !*** ./src/resources/index.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "configure": () => (/* binding */ configure)
/* harmony export */ });
function configure(config) {
}


/***/ }),

/***/ 407:
/*!*********************************!*\
  !*** ./config/environment.json ***!
  \*********************************/
/***/ ((module) => {

module.exports = JSON.parse('{"debug":true,"testing":true}');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_aurelia-binding_dist_native-modules_aurelia-binding_js","vendors-node_modules_aurelia-bootstrapper_dist_native-modules_aurelia-bootstrapper_js-node_mo-047062","vendors-node_modules_aurelia-polyfills_dist_native-modules_aurelia-polyfills_js-node_modules_-d2fa51","vendors-node_modules_aurelia-templating-binding_dist_native-modules_aurelia-templating-bindin-3cec1e","vendors-node_modules_aurelia-templating_dist_native-modules_aurelia-templating_js","vendors-node_modules_aurelia-testing_dist_native-modules_aurelia-testing_js-node_modules_aure-02556b"], () => (__webpack_exec__(639), __webpack_exec__(231), __webpack_exec__(62)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=app.cb196bd0b7688bffd19b.bundle.js.map
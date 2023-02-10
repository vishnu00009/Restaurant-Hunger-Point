"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunktop_restaurant"] = self["webpackChunktop_restaurant"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  vertical-align: baseline;\\n  font-family: inherit;\\n  font-style: inherit;\\n  font-size: 100%;\\n  border: none;\\n  padding: 0;\\n  margin: 0;\\n  box-sizing: border-box;\\n  font-family: Arial, Helvetica, sans-serif;\\n}\\n\\n:root {\\n  --bar-padding: 30px;\\n  --accent-color: rgb(78, 61, 42);\\n}\\n\\n#content {\\n  position: relative;\\n  min-height: 100vh;\\n}\\n\\n/* HEADER STYLES */\\n\\nheader {\\n  width: 100%;\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: space-between;\\n  background-color: rgb(130, 175, 214);\\n  padding: 30px var(--bar-padding);\\n}\\n\\n.header-logo {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 5px;\\n}\\n\\n.logo-wrapper {\\n  display: flex;\\n  align-items: center;\\n  gap: 10px;\\n}\\n\\n.logo-text {\\n  font-size: 1.8rem;\\n  font-weight: 700;\\n  font-family: 'Noto Serif JP', Arial, Helvetica, sans-serif, monospace;\\n}\\n\\n.header-img {\\n  width: 40px;\\n  transform: rotate(-35deg);\\n}\\n\\n.header-title {\\n  font-size: 1.4rem;\\n  font-family: 'Josefin Sans', Arial, Helvetica, sans-serif, monospace;\\n  font-weight: 700;\\n}\\n\\n.nav-links {\\n  list-style-type: none;\\n  height: 100%;\\n  display: flex;\\n  align-items: center;\\n  gap: 10px;\\n}\\n\\n.nav-link {\\n  padding: 0px 10px;\\n  cursor: pointer;\\n  font-size: 1.05rem;\\n  font-family: 'Nunito Sans', Arial, Helvetica, sans-serif;\\n}\\n\\n/* HOME PAGE */\\n\\n.content-wrapper,\\nsection {\\n  margin: 0 auto;\\n  width: clamp(300px, 80vw, 1000px);\\n}\\n\\n.history {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: flex-end;\\n  margin: 50px 0;\\n  position: relative;\\n  height: clamp(200px, 50vh, 400px);\\n  color: var(--accent-color);\\n}\\n\\n.history-background-img {\\n  position: absolute;\\n  z-index: -1;\\n  width: clamp(100px, 110%, 700px);\\n  right: -10%;\\n  bottom: 0;\\n  opacity: 0.65;\\n}\\n\\n.history-title {\\n  margin-bottom: 15px;\\n  width: clamp(50px, 30%, 400px);\\n  font-size: clamp(1.75rem, 0.8333rem + 2.6667vw, 2.5rem);\\n  font-family: 'Josefin Sans', Arial, Helvetica, sans-serif;\\n}\\n\\n.history-desc {\\n  width: clamp(100px, 50%, 500px);\\n  font-size: clamp(0.8rem, 0.5895rem + 0.8421vw, 0.9rem);\\n  font-family: 'Noto Sans', 'Josefin Sans', Arial, Helvetica, sans-serif;\\n}\\n\\n/* ABOUT PAGE */\\n\\n.about-section {\\n  height: clamp(300px, 60vh, 600px);\\n  position: relative;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  gap: 20px;\\n}\\n\\n.about-section img {\\n  position: absolute;\\n  z-index: -2;\\n  width: clamp(300px, 80vw, 1000px);\\n  height: 100%;\\n  object-fit: cover;\\n}\\n\\n.img-overlay {\\n  background-color: black;\\n  height: 100%;\\n  width: 100%;\\n  position: absolute;\\n  opacity: 0.58;\\n  z-index: -1;\\n}\\n\\n.shop-front-caption a,\\n.shop-front-caption a:visited,\\n.shop-front-caption a:link {\\n  display: block;\\n  position: absolute;\\n  text-decoration: none;\\n  right: 0;\\n  bottom: 0;\\n  margin-right: 10px;\\n  margin-bottom: 10px;\\n  color: rgba(255, 255, 255, 0.75);\\n  font-size: 0.6rem;\\n  font-style: italic;\\n}\\n\\n.about-title,\\n.about-desc {\\n  display: block;\\n  padding: 0 35px;\\n  color: white;\\n  font-family: 'Nunito Sans', Arial, Helvetica, sans-serif;\\n}\\n\\n.about-title {\\n  font-size: clamp(1.3rem, 0.534rem + 2.7234vw, 2.1rem);\\n  margin-top: 25px;\\n}\\n\\n.about-desc {\\n  font-size: clamp(1rem, 0.9043rem + 0.3404vw, 1.1rem);\\n}\\n\\n/* MENU PAGE */\\n\\n.menu-header {\\n  margin: 50px 0;\\n}\\n\\n.menu-header-title {\\n  margin-bottom: 8px;\\n  font-size: 1.5rem;\\n  font-weight: 600;\\n  font-family: 'Josefin Sans', Arial, Helvetica, sans-serif;\\n  color: var(--accent-color);\\n}\\n\\n.menu-desc {\\n  font-family: 'Nunito Sans', Arial, Helvetica, sans-serif;\\n}\\n\\n.menu-grid {\\n  display: grid;\\n  grid-template-columns: 1fr 1fr;\\n  gap: 20px;\\n}\\n\\n.menu-item {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  margin-bottom: 25px;\\n}\\n\\n.menu-item:hover {\\n  color: brown;\\n  transform: scale(1.03);\\n}\\n\\n.menu-img {\\n  width: clamp(100px, 100%, 350px);\\n  margin-bottom: 10px;\\n}\\n\\n.menu-title {\\n  font-weight: 600;\\n  font-family: 'Josefin Sans', Arial, Helvetica, sans-serif;\\n}\\n\\n/* ABOUT SUBSECTION */\\n\\nsection {\\n  margin-top: 30px;\\n}\\n\\n.section-title {\\n  display: block;\\n  margin-bottom: 1rem;\\n  font-size: 1.5rem;\\n  font-weight: 600;\\n  font-family: 'Josefin Sans', Arial, Helvetica, sans-serif;\\n  color: var(--accent-color);\\n}\\n\\n.about--grid {\\n  display: grid;\\n  grid-template-columns: 2fr 1fr;\\n  grid-template-rows: 1fr 1fr;\\n  grid-template-areas:\\n    'one two'\\n    'one three';\\n  gap: 12px;\\n}\\n\\n.about--grid > * {\\n  border: 1px solid rgba(0, 0, 0, 0.2);\\n  border-radius: 10px;\\n  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,\\n    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;\\n  padding: 20px;\\n}\\n\\n.about--grid > *:hover {\\n  transform: scale(1.01);\\n}\\n\\n.about--grid-item-1,\\n.about--grid-item-2,\\n.about--grid-item-3 {\\n  display: flex;\\n  align-items: center;\\n  font-family: 'Nunito Sans', Arial, Helvetica, sans-serif;\\n}\\n\\n.about--grid-item-1 {\\n  grid-area: one;\\n}\\n\\n.grid-item-1--img {\\n  display: flex;\\n  flex-direction: column;\\n  margin-right: 10px;\\n  width: fit-content;\\n}\\n\\n.grid-item-1--img img {\\n  width: clamp(100px, 100%, 250px);\\n  border-radius: 5px;\\n}\\n\\n.grid-item-1--img a,\\n.grid-item-1--img a:link,\\n.grid-item-1--img a:visited {\\n  font-size: clamp(0.5rem, -0.069rem + 1.6552vw, 0.8rem);\\n  font-style: italic;\\n  text-decoration: none;\\n  color: rgb(105, 64, 16);\\n  width: fit-content;\\n  margin-top: 5px;\\n}\\n\\n.grid-item-1--text {\\n  width: fit-content;\\n  font-family: 'Nunito Sans', Arial, Helvetica, sans-serif;\\n}\\n\\n.about--grid-item-2 {\\n  grid-area: two;\\n}\\n\\n.about--grid-item-3 {\\n  grid-area: three;\\n}\\n\\n/* FOOTER STYLES */\\n\\nfooter {\\n  width: 100%;\\n  display: flex;\\n  flex-direction: column;\\n  gap: 7px;\\n  margin-top: 100px;\\n  padding: 20px var(--bar-padding);\\n  background-color: rgb(85, 45, 10);\\n  color: rgb(200, 200, 200);\\n  font-size: 0.9rem;\\n  font-family: 'Nunito Sans', Arial, Helvetica, sans-serif, monospace;\\n}\\n\\n.footer-title {\\n  font-weight: 600;\\n}\\n\\n.footer-copyright {\\n  font-size: 0.8rem;\\n}\\n\\n.footer-links {\\n  list-style-type: none;\\n  display: flex;\\n}\\n\\n.footer-link {\\n  margin-right: 30px;\\n  font-size: 0.8rem;\\n  cursor: default;\\n}\\n\\n.footer-dev {\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  gap: 10px;\\n  margin-top: 30px;\\n}\\n\\n.footer-link--github:link,\\n.footer-link--github:visited {\\n  text-decoration: none;\\n  color: rgba(252, 252, 252, 0.85);\\n  vertical-align: center;\\n  font-size: 0.8rem;\\n}\\n\\n/* MEDIA QUERIES */\\n\\n@media (max-width: 500px) {\\n  header {\\n    flex-direction: column;\\n    align-items: center;\\n    gap: 20px;\\n  }\\n\\n  .header-logo {\\n    gap: 10px;\\n  }\\n\\n  .logo-wrapper {\\n    justify-content: center;\\n  }\\n\\n  .nav-bar,\\n  .nav-links {\\n    width: 100%;\\n    display: flex;\\n  }\\n\\n  .nav-bar {\\n    justify-content: center;\\n  }\\n\\n  .nav-links {\\n    justify-content: space-evenly;\\n  }\\n\\n  .about--grid {\\n    grid-template-columns: 1fr 1fr;\\n    grid-template-rows: 2.5fr 1fr;\\n    grid-template-areas:\\n      'one one'\\n      'two three';\\n  }\\n}\\n\\n@media (max-width: 450px) {\\n  .history-desc {\\n    width: clamp(50px, 60%, 300px);\\n  }\\n\\n  .history img {\\n    opacity: 0.4;\\n  }\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://top-restaurant/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://top-restaurant/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://top-restaurant/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://top-restaurant/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://top-restaurant/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://top-restaurant/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://top-restaurant/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://top-restaurant/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://top-restaurant/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://top-restaurant/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/aboutView.js":
/*!**************************!*\
  !*** ./src/aboutView.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _img_shop_ceiling_maricar_limjoco_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/shop-ceiling-maricar-limjoco.jpeg */ \"./src/img/shop-ceiling-maricar-limjoco.jpeg\");\n\n\nconst aboutView = (function () {\n  function renderAboutContent() {\n    const aboutEl = document.createElement('main');\n    aboutEl.classList.add('about-section');\n    aboutEl.classList.add('content-wrapper');\n\n    aboutEl.innerHTML = `\n     \n        <div class=\"img-overlay\"></div>\n        <img src=\"${_img_shop_ceiling_maricar_limjoco_jpeg__WEBPACK_IMPORTED_MODULE_0__}\" alt=\"Shop ceiling by Maricar Limjoco\" />\n        <span class=\"shop-front-caption\">\n          <a href=\"https://unsplash.com/@icalimjoco target=\"_blank\" >\n            Maricar Limjoco on Unsplash</a>\n        </span>\n    \n    \n        <h1 class=\"about-title\">\n          We have provided our curry rice, a dish loved by the Japanese for so long, beyond the border.\n        </h1>\n        <p class=\"about-desc\">\n          The KARI HOUSE started from 3 shops surrounded by rice fields in the suburb area of Nagoya, in 1999. With our customer first spirit, we have been supported by many customers for 20 years until now, and in 2012, we were able to increase our shops up to 1,000. Today, KARI HOUSE has expanded overseas to such as Hawaii, Shanghai, Bangkok, Hong Kong, and Los Angeles, and is continuing to be loved by the local customers.\n        </p>\n    `;\n\n    return aboutEl;\n  }\n\n  return {\n    renderAboutContent,\n  };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (aboutView);\n\n\n//# sourceURL=webpack://top-restaurant/./src/aboutView.js?");

/***/ }),

/***/ "./src/homeView.js":
/*!*************************!*\
  !*** ./src/homeView.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _img_curry_dish_meat_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/curry-dish-meat.png */ \"./src/img/curry-dish-meat.png\");\n\n\nconst homeView = (function () {\n  function renderHomeContent() {\n    const homeContent = document.createElement('div');\n    homeContent.classList.add('home-section');\n    homeContent.classList.add('content-wrapper');\n\n    homeContent.innerHTML = `\n    <main>\n      <div class=\"history\">\n        <img src=\"${_img_curry_dish_meat_png__WEBPACK_IMPORTED_MODULE_0__}\" alt=\"Background image\" class=\"history-background-img\"/>\n        <strong class=\"history-title\">Established in 1999</strong>\n        <p class=\"history-desc\">\n          \"KARI HOUSE Manila\", known as \"KARIMAN\", is a chain restaurant\n          specializing in Japanese-style curry rice. Many people enjoy making\n          their very own KARIMAN curry by customizing the rice portion, spice\n          level, and optional toppings coming in nearly 40 varieties. Please\n          enjoy our curry, which is very popular with the Filipino & Japanese\n          people!\n        </p>\n      </div>\n    </main>`;\n\n    return homeContent;\n  }\n\n  return { renderHomeContent };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homeView);\n\n\n//# sourceURL=webpack://top-restaurant/./src/homeView.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _homeView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homeView */ \"./src/homeView.js\");\n/* harmony import */ var _aboutView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aboutView */ \"./src/aboutView.js\");\n/* harmony import */ var _menuView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menuView */ \"./src/menuView.js\");\n/* harmony import */ var _img_shop_front_julie_fader_jpeg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/shop-front-julie-fader.jpeg */ \"./src/img/shop-front-julie-fader.jpeg\");\n/* harmony import */ var _img_curry_logo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/curry-logo.png */ \"./src/img/curry-logo.png\");\n/* harmony import */ var _img_github_icon_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/github-icon.png */ \"./src/img/github-icon.png\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n\n\n\n\n\nconst View = (function () {\n  const container = document.querySelector('#content');\n\n  function clearAll() {\n    container.innerHTML = '';\n  }\n\n  function renderHeader() {\n    const headerEl = document.createElement('header');\n\n    headerEl.innerHTML = `\n      <div class=\"header-logo\">\n        <div class=\"logo-wrapper\">\n            <img src=\"${_img_curry_logo_png__WEBPACK_IMPORTED_MODULE_4__}\" alt=\"curry-house-logo\" class=\"header-img\"/>\n            <span class=\"logo-text\">カレー屋</span>\n        </div>\n        <span class=\"header-title\">KARI HOUSE Manila</span> \n      </div>\n      <nav class=\"nav-bar\">\n        <ul class=\"nav-links\">\n          <li class=\"nav-link link--home\">Home</li>\n          <li class=\"nav-link link--about\">About</li>\n          <li class=\"nav-link link--menu\">Menu</li>\n        </ul>\n      </nav>`;\n\n    return headerEl;\n  }\n\n  function renderSection() {\n    const sectionEl = document.createElement('section');\n\n    sectionEl.innerHTML = `\n      <span class=\"section-title\">About the shops</span>\n      <div class=\"about--grid\">\n        <div class=\"about--grid-item-1\">\n          <div class=\"grid-item-1--img\">\n            <img src=\"${_img_shop_front_julie_fader_jpeg__WEBPACK_IMPORTED_MODULE_3__}\" alt=\"Shop front by Julie Fader\"/>\n            <caption class=\"shop-front-caption\">\n              <a href=\"https://unsplash.com/@jlfader\" target=\"_blank\">\n              Julie Fader on Unsplash</a>\n            </caption>\n          </div>\n          <div class=\"grid-item-1--text\">KARI HOUSE Manila, the best curry house in the Philippines</div>\n         \n        </div>\n        <div class=\"about--grid-item-2\">See overseas shops here</div>\n        <div class=\"about--grid-item-3\">Company Information</div>\n      </div>`;\n\n    return sectionEl;\n  }\n\n  function renderFooter() {\n    const footerEl = document.createElement('footer');\n\n    footerEl.innerHTML = `\n      <div class=\"footer-main\">\n        <p class=\"footer-title\">KARI HOUSE Manila</p>\n        <p class=\"footer-copyright\">\n          Copyright ©KARI HOUSE CO., LTD. For presentation purposes only.\n        </p>\n      </div>\n      <ul class=\"footer-links\">\n        <li class=\"footer-link\">Terms of Use</li>\n        <li class=\"footer-link\">Legacy</li>\n        <li class=\"footer-link\">Service</li>\n      </ul>\n      <div class=\"footer-dev\">\n        <img src=\"${_img_github_icon_png__WEBPACK_IMPORTED_MODULE_5__}\" width=\"20\" class=\"footer-img\" alt=\"Github icon\" />\n        <a\n        href=\"https://github.com/renchester\"\n        target=\"_blank\"\n        class=\"footer-link--github\"\n        ><p class=\"footer-desc\">Developed by Renchester Ramos</p></a>\n      </div>\n      `;\n\n    return footerEl;\n  }\n\n  function addEvents() {\n    document\n      .querySelector('.nav-link.link--home')\n      .addEventListener('click', () =>\n        renderPage(_homeView__WEBPACK_IMPORTED_MODULE_0__[\"default\"].renderHomeContent()),\n      );\n\n    document\n      .querySelector('.nav-link.link--about')\n      .addEventListener('click', () =>\n        renderPage(_aboutView__WEBPACK_IMPORTED_MODULE_1__[\"default\"].renderAboutContent()),\n      );\n\n    document\n      .querySelector('.nav-link.link--menu')\n      .addEventListener('click', () =>\n        renderPage(_menuView__WEBPACK_IMPORTED_MODULE_2__[\"default\"].renderMenuContent()),\n      );\n  }\n\n  function renderPage(page) {\n    clearAll();\n\n    container.appendChild(renderHeader());\n    container.appendChild(page);\n    container.appendChild(renderSection());\n    container.appendChild(renderFooter());\n\n    addEvents();\n  }\n\n  function init() {\n    renderPage(_homeView__WEBPACK_IMPORTED_MODULE_0__[\"default\"].renderHomeContent());\n  }\n\n  return {\n    renderHeader,\n    renderFooter,\n    addEvents,\n    clearAll,\n    init,\n  };\n})();\n\nView.init();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (View);\n\n\n//# sourceURL=webpack://top-restaurant/./src/index.js?");

/***/ }),

/***/ "./src/menuView.js":
/*!*************************!*\
  !*** ./src/menuView.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _img_curry_dish_meat_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/curry-dish-meat.png */ \"./src/img/curry-dish-meat.png\");\n/* harmony import */ var _img_curry_dish_seafood_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/curry-dish-seafood.png */ \"./src/img/curry-dish-seafood.png\");\n/* harmony import */ var _img_curry_dish_vegetable_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/curry-dish-vegetable.png */ \"./src/img/curry-dish-vegetable.png\");\n/* harmony import */ var _img_curry_dish_other_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/curry-dish-other.png */ \"./src/img/curry-dish-other.png\");\n/* harmony import */ var _img_curry_dish_kids_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/curry-dish-kids.png */ \"./src/img/curry-dish-kids.png\");\n/* harmony import */ var _img_curry_dish_sides_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/curry-dish-sides.png */ \"./src/img/curry-dish-sides.png\");\n\n\n\n\n\n\n\nconst menuView = (function () {\n  function renderMenuContent() {\n    const menuEl = document.createElement('main');\n    menuEl.classList.add('menu-section');\n    menuEl.classList.add('content-wrapper');\n\n    menuEl.innerHTML = `\n        <div class=\"menu-header\">\n            <div class=\"menu-header-title\">About the menu</div>\n            <div class=\"menu-desc\">We offer various toppings such as meat, seafood, and vegetables at KARI HOUSE.</div>\n        </div>    \n        <div class=\"menu-grid\">\n            <div class=\"menu-item item-meat\">\n                <img src=\"${_img_curry_dish_meat_png__WEBPACK_IMPORTED_MODULE_0__}\" alt=\"Meat menu\" class=\"menu-img\"/>\n                <span class=\"menu-title\">Meat Menu</span>\n            </div>\n            <div class=\"menu-item item-seafood\">\n                <img src=\"${_img_curry_dish_seafood_png__WEBPACK_IMPORTED_MODULE_1__}\" alt=\"Seafood menu\" class=\"menu-img\"/>\n                <span class=\"menu-title\">Seafood Menu</span>\n            </div>\n            <div class=\"menu-item item-veg\">\n                <img src=\"${_img_curry_dish_vegetable_png__WEBPACK_IMPORTED_MODULE_2__}\" alt=\"Vegetable menu\" class=\"menu-img\"/>\n                <span class=\"menu-title\">Vegetable Menu</span>\n            </div>\n            <div class=\"menu-item item-other\">\n                <img src=\"${_img_curry_dish_other_png__WEBPACK_IMPORTED_MODULE_3__}\" alt=\"Other dishes\" class=\"menu-img\"/>\n                <span class=\"menu-title\">Other dishes</span>\n            </div>\n            <div class=\"menu-item item-kids\">\n                <img src=\"${_img_curry_dish_kids_png__WEBPACK_IMPORTED_MODULE_4__}\" alt=\"Kid's menu\" class=\"menu-img\"/>\n                <span class=\"menu-title\">Kid's Menu</span>\n            </div>\n            <div class=\"menu-item item-sides\">\n                <img src=\"${_img_curry_dish_sides_png__WEBPACK_IMPORTED_MODULE_5__}\" alt=\"Sides menu\" class=\"menu-img\"/>\n                <span class=\"menu-title\">Sides Menu</span>\n            </div>\n        </div>\n    `;\n\n    return menuEl;\n  }\n\n  return {\n    renderMenuContent,\n  };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuView);\n\n\n//# sourceURL=webpack://top-restaurant/./src/menuView.js?");

/***/ }),

/***/ "./src/img/curry-dish-kids.png":
/*!*************************************!*\
  !*** ./src/img/curry-dish-kids.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"img/curry-dish-kids19016cb0226c5d0d75e9.png\";\n\n//# sourceURL=webpack://top-restaurant/./src/img/curry-dish-kids.png?");

/***/ }),

/***/ "./src/img/curry-dish-meat.png":
/*!*************************************!*\
  !*** ./src/img/curry-dish-meat.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"img/curry-dish-meatfdf009fc60ce199e4010.png\";\n\n//# sourceURL=webpack://top-restaurant/./src/img/curry-dish-meat.png?");

/***/ }),

/***/ "./src/img/curry-dish-other.png":
/*!**************************************!*\
  !*** ./src/img/curry-dish-other.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"img/curry-dish-other6ba6390cb6f94d226f73.png\";\n\n//# sourceURL=webpack://top-restaurant/./src/img/curry-dish-other.png?");

/***/ }),

/***/ "./src/img/curry-dish-seafood.png":
/*!****************************************!*\
  !*** ./src/img/curry-dish-seafood.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"img/curry-dish-seafoodc2a3d032888c27eb008c.png\";\n\n//# sourceURL=webpack://top-restaurant/./src/img/curry-dish-seafood.png?");

/***/ }),

/***/ "./src/img/curry-dish-sides.png":
/*!**************************************!*\
  !*** ./src/img/curry-dish-sides.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"img/curry-dish-sides73887f7d3eb77aa78a87.png\";\n\n//# sourceURL=webpack://top-restaurant/./src/img/curry-dish-sides.png?");

/***/ }),

/***/ "./src/img/curry-dish-vegetable.png":
/*!******************************************!*\
  !*** ./src/img/curry-dish-vegetable.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"img/curry-dish-vegetablef3083d16cbdc67075286.png\";\n\n//# sourceURL=webpack://top-restaurant/./src/img/curry-dish-vegetable.png?");

/***/ }),

/***/ "./src/img/curry-logo.png":
/*!********************************!*\
  !*** ./src/img/curry-logo.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"img/curry-logodbbd0cdab7f7ca438bd3.png\";\n\n//# sourceURL=webpack://top-restaurant/./src/img/curry-logo.png?");

/***/ }),

/***/ "./src/img/github-icon.png":
/*!*********************************!*\
  !*** ./src/img/github-icon.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"img/github-icon4a94dad1efa073cae8ff.png\";\n\n//# sourceURL=webpack://top-restaurant/./src/img/github-icon.png?");

/***/ }),

/***/ "./src/img/shop-ceiling-maricar-limjoco.jpeg":
/*!***************************************************!*\
  !*** ./src/img/shop-ceiling-maricar-limjoco.jpeg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"img/shop-ceiling-maricar-limjocoaf9cf7b6ae28eb9937bd.jpeg\";\n\n//# sourceURL=webpack://top-restaurant/./src/img/shop-ceiling-maricar-limjoco.jpeg?");

/***/ }),

/***/ "./src/img/shop-front-julie-fader.jpeg":
/*!*********************************************!*\
  !*** ./src/img/shop-front-julie-fader.jpeg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"img/shop-front-julie-faderd51c20fe7cbb2519b3fa.jpeg\";\n\n//# sourceURL=webpack://top-restaurant/./src/img/shop-front-julie-fader.jpeg?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
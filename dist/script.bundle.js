/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./XenonBase.js":
/*!**********************!*\
  !*** ./XenonBase.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return XenonBase; });\nclass XenonBase extends EventTarget {\n\n    static get defaults () {\n        return {};\n    }\n\n    constructor () {\n        super();\n        this.el = null;\n    }\n\n    init () {}\n\n    createTemplate () {}\n\n    createEl (templateString) {\n        const el = document.createElement('div');\n        el.innerHTML = templateString.trim();\n        return el.firstElementChild;\n    }\n\n    render (root = document.body) {\n        root.appendChild(this.el);\n    }\n\n    destroy () {\n        this.el.parentElement.removeChild(this.el);\n    }\n\n}\n\n//# sourceURL=webpack:///./XenonBase.js?");

/***/ }),

/***/ "./XenonButton.js":
/*!************************!*\
  !*** ./XenonButton.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return XenonButton; });\n/* harmony import */ var _XenonBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./XenonBase */ \"./XenonBase.js\");\n\n\nclass XenonButton extends _XenonBase__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n\n    static get defaults () {\n        return {};\n    }\n\n    constructor (options) {\n        super(options);\n        this.options = Object.assign({}, XenonButton.defaults, options);\n        this.el = this.createTemplate();\n        this.init();\n        this.render(document.body);\n    }\n\n    init () {\n        this.onClick = this.onClick.bind(this);\n        this.el.addEventListener('click', this.onClick);\n    }\n\n    createTemplate () {\n        return this.createEl(`\n            <button class=\"activate-sidebar\">\n                Button\n            </button>\n        `);\n    }\n\n    onClick () {\n        this.dispatchEvent(new Event('XenonButton.click'));\n    }\n\n}\n\n//# sourceURL=webpack:///./XenonButton.js?");

/***/ }),

/***/ "./XenonCarousel.js":
/*!**************************!*\
  !*** ./XenonCarousel.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return XenonCarousel; });\n/* harmony import */ var _XenonBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./XenonBase */ \"./XenonBase.js\");\n\n\nclass XenonCarousel extends _XenonBase__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n\n    static get defaults () {\n        return {\n            swipeThreshold: 25\n        };\n    }\n\n    // @todo Options: optional controls, optional swipe threshold, content of slide, touches\n    constructor (options) {\n        super(options);\n        this.options = Object.assign({}, XenonCarousel.defaults, options);\n        this.el = this.createTemplate();\n        this.slides = this.el.querySelectorAll('.slide');\n        this.slidesContainer = this.el.querySelector('.slides-container');\n        this.controls = [this.el.querySelector('.controls.left'), this.el.querySelector('.controls.right')];\n        this.init();\n        this.render(document.body);\n    }\n\n    init () {\n        this.currSlideIndex = 0;\n        this.swipeThreshold = 0.25;\n        this.coords = {\n            prev: 0,\n            start: null,\n            curr: null\n        };\n        this.slideWidth = 100; // 100%\n        this.OUT_OF_SWIPE_AREA = this.slideWidth / 4;\n        this.LEFT_THRESHOLD = -1 * (this.slideWidth * (this.slides.length - 1)) - this.OUT_OF_SWIPE_AREA; // (-1) direction\n        this.RIGHT_THRESHOLD = 0 + this.OUT_OF_SWIPE_AREA;\n\n        this.onMouseDown = this.onMouseDown.bind(this);\n        this.onMouseMove = this.onMouseMove.bind(this);\n        this.onMouseUp = this.onMouseUp.bind(this);\n        this.prevSlide = this.prevSlide.bind(this);\n        this.nextSlide = this.nextSlide.bind(this);\n\n        this.slidesContainer.addEventListener('mousedown', this.onMouseDown);\n        document.addEventListener('mouseup', this.onMouseUp);\n        this.controls[0].addEventListener('click', this.prevSlide);\n        this.controls[1].addEventListener('click', this.nextSlide);\n    }\n\n    onMouseDown (e) {\n        this.coords.start = e.clientX;\n        this.slidesContainer.style.setProperty('--transition', 'none');\n        document.addEventListener('mousemove', this.onMouseMove);\n    }\n\n    onMouseMove (e) {\n        this.coords.curr = this.coords.prev + (e.clientX - this.coords.start) / this.slides[0].getBoundingClientRect().width * 100;\n        this.coords.curr = Math.min(this.RIGHT_THRESHOLD, Math.max(this.coords.curr, this.LEFT_THRESHOLD));\n        this.currSlideIndex = Math.round(Math.abs(this.coords.curr) / this.slideWidth); // swipeThreshold 50%\n\n        // // @todo Calculating swipe threshold\n        // const original = Math.abs(this.coords.curr) / this.slideWidth;\n        // const decimalPart = original - Math.trunc(original);\n        // console.log(decimalPart);\n        // if (this.swipeThreshold <= decimalPart <= 1 - this.swipeThreshold) {\n        //     this.currSlideIndex = Math.ceil(Math.abs(this.coords.curr) / this.slideWidth);\n        // } else {\n        //     this.currSlideIndex = Math.floor(Math.abs(this.coords.curr) / this.slideWidth);\n        // }\n\n        this.slidesContainer.style.setProperty('--transform', `${this.coords.curr}%`);\n    }\n\n    onMouseUp () {\n        const slidePos = -1 * this.currSlideIndex * this.slideWidth;\n        this.slidesContainer.style.setProperty('--transition', '0.3s ease-out');\n        this.slidesContainer.style.setProperty('--transform', `${slidePos}%`);\n        this.coords.prev = slidePos;\n        document.removeEventListener('mousemove', this.onMouseMove);\n    }\n\n    createTemplate () {\n        return this.createEl(`\n            <div class=\"viewport\" draggable=\"false\">\n                <div class=\"slides-container\" draggable=\"false\">\n                    <div class=\"slide\" draggable=\"false\">1</div>\n                    <div class=\"slide\" draggable=\"false\">2</div>\n                    <div class=\"slide\" draggable=\"false\">3</div>\n                    <div class=\"slide\" draggable=\"false\">4</div>\n                    <div class=\"slide\" draggable=\"false\">5</div> \n                </div>\n                <div class=\"controls left\"></div>\n                <div class=\"controls right\"></div>\n            </div>`);\n    }\n\n    nextSlide () {\n        const newPos = Math.max(-1 * (this.currSlideIndex + 1) * this.slideWidth, this.LEFT_THRESHOLD + this.OUT_OF_SWIPE_AREA);\n        this.coords.prev = newPos;\n        this.currSlideIndex = Math.min(++this.currSlideIndex, this.slides.length - 1);\n        this.slidesContainer.style.setProperty('--transform', `${newPos}%`);\n    }\n\n    prevSlide () {\n        const newPos = Math.min(-1 * (this.currSlideIndex - 1) * this.slideWidth, this.RIGHT_THRESHOLD - this.OUT_OF_SWIPE_AREA);\n        this.coords.prev = newPos;\n        this.currSlideIndex = Math.max(--this.currSlideIndex, 0);\n        this.slidesContainer.style.setProperty('--transform', `${newPos}%`);\n    }\n\n}\n\n//# sourceURL=webpack:///./XenonCarousel.js?");

/***/ }),

/***/ "./XenonCheckbox.js":
/*!**************************!*\
  !*** ./XenonCheckbox.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return XenonCheckbox; });\n/* harmony import */ var _XenonBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./XenonBase */ \"./XenonBase.js\");\n\n\nclass XenonCheckbox extends _XenonBase__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n\n    static get defaults () {\n        return {\n            checked: false,\n        };\n    }\n\n    constructor (options) {\n        super();\n        this.options = Object.assign({}, XenonCheckbox.defaults, options);\n        this.el = this.createTemplate();\n        this.nativeInput = this.el.querySelector('input');\n        this.init();\n        this.render();\n    }\n\n    createTemplate () {\n        return this.createEl(`\n            <div class=\"checkbox-track ${this.options.checked ? 'checked' : ''}\">\n                <div class=\"checkbox-wrapper\">\n                    <input type=\"checkbox\" checked=\"${this.options.checked ? 'checked' : ''}\"/>\n                </div>\n            </div>         \n        `);\n    }\n\n    init () {\n        this.checked = this.options.checked;\n        this.el.addEventListener('click', () => this.onCheck());\n    }\n\n    render (root = document.body) {\n        root.appendChild(this.el);\n    }\n\n    onCheck () {\n        this.checked = !this.checked;\n        if (this.checked) {\n            this.nativeInput.checked = 'checked';\n            this.dispatchEvent(new CustomEvent('XenonCheckbox.EVENT_CHECKED', {detail: this.checked}));\n        } else {\n            this.nativeInput.checked = '';\n            this.dispatchEvent(new CustomEvent('XenonCheckbox.EVENT_UNCHECKED', {detail: this.checked}));\n        }\n        this.el.classList.toggle('checked');\n    }\n\n    isChecked () {\n        return this.checked;\n    }\n\n}\n\n//# sourceURL=webpack:///./XenonCheckbox.js?");

/***/ }),

/***/ "./XenonCircularProgress.js":
/*!**********************************!*\
  !*** ./XenonCircularProgress.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return XenonCircularProgress; });\n/* harmony import */ var _XenonBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./XenonBase */ \"./XenonBase.js\");\n\n\nclass XenonCircularProgress extends _XenonBase__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n\n    static get defaults () {\n        return {\n            progressBarWidth: '4px',\n            progressBackColor: '#000000',\n            progressColor: '#4ee3c3',\n            progress: '25',\n            progressContainerSize: '100px'\n        };\n    }\n\n    constructor (options) {\n        super(options);\n        this.options = Object.assign({}, XenonCircularProgress.defaults, options);\n        this.el = this.createTemplate();\n        this.progressContent = this.el.querySelector('.progress-content');\n        this.init();\n        this.render();\n    }\n\n    init () {\n        this.progress = this.options.progress;\n        for (let optionName of Object.keys(this.options)) {\n            this.el.style.setProperty(`--${optionName}`, this.options[optionName]);\n        }\n    }\n\n    createTemplate () {\n        return this.createEl(`\n            <div id=\"container\">\n              <svg>\n                <circle class=\"back\"></circle>\n                <circle class=\"progress\"></circle>\n              </svg>\n              <div class=\"progress-content\">${this.options.progress}%</div>\n            </div>      \n        `);\n    }\n\n    /**\n     * @param {Number|String} percent\n     */\n    setProgress (percent) {\n        this.progress = percent.toString();\n        this.progressContent.textContent = `${this.progress}%`;\n        this.el.style.setProperty(`--progress`, this.progress);\n    }\n\n}\n\n//# sourceURL=webpack:///./XenonCircularProgress.js?");

/***/ }),

/***/ "./XenonPlayer.js":
/*!************************!*\
  !*** ./XenonPlayer.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return XenonPlayer; });\n/* harmony import */ var _XenonBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./XenonBase */ \"./XenonBase.js\");\n\n\nclass XenonPlayer extends _XenonBase__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n\n    // @todo Перевод единиц измерения времени\n    // @todo Заполнять прогресс в зависимости от типа источника анимации\n    constructor(duration = 240) {\n        super();\n\n        this.playControl = null;\n        this.backControl = null;\n        this.forwardControl = null;\n\n        this.el = this.createTemplate();\n        this.render(document.body);\n\n        this.progress = parseInt(window.getComputedStyle(this.el).getPropertyValue('--progress'));\n        this.duration = duration;\n\n        this.elRect = this.el.getBoundingClientRect();\n        this.timeFromBlock = this.el.querySelector('.from');\n        this.timeToBlock = this.el.querySelector('.to');\n        this.trackBlock = this.el.querySelector('.player-track');\n\n        // @todo Не правильно работает нажатие\n        this.trackBlock.addEventListener('click', (e) => {\n            const offset = e.clientX - this.elRect.left;\n            this.progress = offset / this.elRect.width * 100;\n            this.el.style.setProperty('--progress', `${this.progress}%`);\n        });\n    }\n\n    createTemplate () {\n        return this.createEl(`\n            <div class=\"player\">\n                <div class=\"player-controls\">\n                    <div class=\"player-play\"></div>\n                    <div class=\"player-back\"></div>\n                    <div class=\"player-forward\"></div>\n                </div>\n                <div class=\"player-time\">\n                    <span class=\"from\">1.23</span>\n                    <span class=\"to\">5.43</span>\n                </div>\n                <div class=\"player-track\"></div>\n            </div>       \n        `);\n    }\n\n    render (root = document.body) {\n        root.appendChild(this.el);\n    }\n\n    play () {\n        this.interval = setInterval(() => this.intervalTick(), 1000);\n    }\n\n    stop () {\n        if (this.interval) {\n            clearInterval(this.interval);\n        }\n    }\n\n    reset () {\n        this.progress = 0;\n        this.el.style.setProperty('--progress', `${this.progress}%`);\n    }\n\n    intervalTick () {\n        if (this.progress >= 100) {\n            clearInterval(this.interval);\n        }\n        const onePercent = this.duration / 100;\n        // const pxPerSec = this.elRect.width / this.duration;\n        // const pxInOnePercent = pxPerSec * onePercent;\n        // this.duration += pxPerSec;\n        // this.progress += pxInOnePercent;\n        // 0-100%\n        this.progress = Math.max(0, Math.min(100, this.progress + onePercent));\n        this.el.style.setProperty('--progress', `${this.progress}%`);\n    }\n\n}\n\n//# sourceURL=webpack:///./XenonPlayer.js?");

/***/ }),

/***/ "./XenonSidebar.js":
/*!*************************!*\
  !*** ./XenonSidebar.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return XenonSidebar; });\n/* harmony import */ var _XenonBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./XenonBase */ \"./XenonBase.js\");\n\n\nclass XenonSidebar extends _XenonBase__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n\n    static get defaults () {\n        return {\n            isOpened: false,\n            dimmerOpacity: '0.7'\n        };\n    }\n\n    constructor (options) {\n        super(options);\n        this.options = Object.assign({}, XenonSidebar.defaults, options);\n        this.el = this.createTemplate();\n        this.sidebar = this.el.querySelector('.sidebar');\n        this.sidebarDimmer = this.el.querySelector('.sidebar-dimmer');\n        this.isOpened = this.options.isOpened;\n        this.init();\n        this.render(document.body);\n    }\n\n    init () {\n        if (!this.isOpened) {\n            this.el.style.display = 'none';\n        } else {\n            this.el.style.display = 'flex';\n        }\n        this._onTransitionEnd = this._onTransitionEnd.bind(this);\n        this.sidebarDimmer.addEventListener('click', () => {\n            this.toggle();\n        });\n    }\n\n    createTemplate () {\n        return this.createEl(`\n            <div class=\"sidebar-container\">\n                <div class=\"sidebar\">\n                    <h2 class=\"sidebar-name\">Sidebar</h2>\n                </div>    \n                <div class=\"sidebar-dimmer\"></div>     \n            </div>         \n        `);\n    }\n\n    toggle () {\n        if (!this.isOpened) {\n            this.el.style.display = 'flex';\n            // @todo why rAF?\n            requestAnimationFrame(() => {\n                requestAnimationFrame(() => {\n                    this.sidebar.style.setProperty('--offset', '0');\n                    this.sidebarDimmer.style.setProperty('--opacity', this.options.dimmerOpacity);\n                    this.isOpened = true;\n                });\n            })\n        } else {\n            this.sidebar.style.setProperty('--offset', '-100%');\n            this.sidebarDimmer.style.setProperty('--opacity', '0');\n            this.isOpened = false;\n            this.sidebar.addEventListener('transitionend', this._onTransitionEnd, false);\n        }\n    }\n\n    _onTransitionEnd (e) {\n        this.el.style.display = 'none';\n        this.sidebar.removeEventListener('transitionend', this._onTransitionEnd, false);\n    }\n\n}\n\n//# sourceURL=webpack:///./XenonSidebar.js?");

/***/ }),

/***/ "./script.js":
/*!*******************!*\
  !*** ./script.js ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _XenonButton_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./XenonButton.js */ \"./XenonButton.js\");\n/* harmony import */ var _XenonCheckbox_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./XenonCheckbox.js */ \"./XenonCheckbox.js\");\n/* harmony import */ var _XenonPlayer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./XenonPlayer.js */ \"./XenonPlayer.js\");\n/* harmony import */ var _XenonCircularProgress_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./XenonCircularProgress.js */ \"./XenonCircularProgress.js\");\n/* harmony import */ var _XenonSidebar_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./XenonSidebar.js */ \"./XenonSidebar.js\");\n/* harmony import */ var _XenonCarousel_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./XenonCarousel.js */ \"./XenonCarousel.js\");\n/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/index.scss */ \"./styles/index.scss\");\n/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\n\n\nconst UIElements = {\n    button: new _XenonButton_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](),\n    checkbox: new _XenonCheckbox_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({checked: true}),\n    checkbox1: new _XenonCheckbox_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](),\n    player: new _XenonPlayer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](240),\n    circularProgress: new _XenonCircularProgress_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]({progress: 20}),\n    sidebar: new _XenonSidebar_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"](),\n    carousel: new _XenonCarousel_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"]()\n};\n\nfor (let elName of Object.keys(UIElements)) {\n    if (elName !== 'sidebar')\n        UIElements[elName].el.classList.add(\"ui-element\");\n}\n\nUIElements.button.addEventListener('XenonButton.click', () => {\n    UIElements.sidebar.toggle();\n});\n\nUIElements.checkbox.addEventListener('CheckBox.EVENT_CHECKED', (e) => console.log(e.detail));\n\n\n//# sourceURL=webpack:///./script.js?");

/***/ }),

/***/ "./styles/index.scss":
/*!***************************!*\
  !*** ./styles/index.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\\nModuleBuildError: Module build failed (from ./node_modules/css-loader/dist/cjs.js):\\nError: Can't resolve '../../images/XenonCarousel/chevron.svg' in '/home/mtarasyuk/Desktop/playground/js_projects/Xenon/styles'\\n    at /home/mtarasyuk/Desktop/playground/js_projects/Xenon/node_modules/enhanced-resolve/lib/Resolver.js:209:21\\n    at /home/mtarasyuk/Desktop/playground/js_projects/Xenon/node_modules/enhanced-resolve/lib/Resolver.js:285:5\\n    at eval (eval at create (/home/mtarasyuk/Desktop/playground/js_projects/Xenon/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:13:1)\\n    at /home/mtarasyuk/Desktop/playground/js_projects/Xenon/node_modules/enhanced-resolve/lib/UnsafeCachePlugin.js:44:7\\n    at /home/mtarasyuk/Desktop/playground/js_projects/Xenon/node_modules/enhanced-resolve/lib/Resolver.js:285:5\\n    at eval (eval at create (/home/mtarasyuk/Desktop/playground/js_projects/Xenon/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:13:1)\\n    at /home/mtarasyuk/Desktop/playground/js_projects/Xenon/node_modules/enhanced-resolve/lib/Resolver.js:285:5\\n    at eval (eval at create (/home/mtarasyuk/Desktop/playground/js_projects/Xenon/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:25:1)\\n    at /home/mtarasyuk/Desktop/playground/js_projects/Xenon/node_modules/enhanced-resolve/lib/DescriptionFilePlugin.js:67:43\\n    at /home/mtarasyuk/Desktop/playground/js_projects/Xenon/node_modules/enhanced-resolve/lib/Resolver.js:285:5\\n    at eval (eval at create (/home/mtarasyuk/Desktop/playground/js_projects/Xenon/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:14:1)\\n    at /home/mtarasyuk/Desktop/playground/js_projects/Xenon/node_modules/enhanced-resolve/lib/Resolver.js:285:5\\n    at eval (eval at create (/home/mtarasyuk/Desktop/playground/js_projects/Xenon/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:14:1)\\n    at /home/mtarasyuk/Desktop/playground/js_projects/Xenon/node_modules/enhanced-resolve/lib/Resolver.js:285:5\\n    at eval (eval at create (/home/mtarasyuk/Desktop/playground/js_projects/Xenon/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:14:1)\\n    at /home/mtarasyuk/Desktop/playground/js_projects/Xenon/node_modules/enhanced-resolve/lib/Resolver.js:285:5\\n    at eval (eval at create (/home/mtarasyuk/Desktop/playground/js_projects/Xenon/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:13:1)\\n    at /home/mtarasyuk/Desktop/playground/js_projects/Xenon/node_modules/enhanced-resolve/lib/DirectoryExistsPlugin.js:27:15\\n    at /home/mtarasyuk/Desktop/playground/js_projects/Xenon/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:85:15\\n    at processTicksAndRejections (internal/process/task_queues.js:79:11)\\n    at /home/mtarasyuk/Desktop/playground/js_projects/Xenon/node_modules/webpack/lib/NormalModule.js:316:20\\n    at /home/mtarasyuk/Desktop/playground/js_projects/Xenon/node_modules/loader-runner/lib/LoaderRunner.js:367:11\\n    at /home/mtarasyuk/Desktop/playground/js_projects/Xenon/node_modules/loader-runner/lib/LoaderRunner.js:233:18\\n    at context.callback (/home/mtarasyuk/Desktop/playground/js_projects/Xenon/node_modules/loader-runner/lib/LoaderRunner.js:111:13)\\n    at Object.loader (/home/mtarasyuk/Desktop/playground/js_projects/Xenon/node_modules/css-loader/dist/index.js:152:5)\\n    at processTicksAndRejections (internal/process/task_queues.js:97:5)\");\n\n//# sourceURL=webpack:///./styles/index.scss?");

/***/ })

/******/ });
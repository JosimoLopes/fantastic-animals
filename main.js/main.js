/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/accordion-list.js":
/*!**************************************!*\
  !*** ./js/modules/accordion-list.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Accordion)\n/* harmony export */ });\nclass Accordion {\n  constructor(list) {\n    this.accordionList = document.querySelectorAll(list);\n    this.activeClass = \"active\";\n  }\n\n  toggleAccordion(item) {\n    item.classList.toggle(this.activeClass);\n    item.nextElementSibling.classList.toggle(this.activeClass);\n  }\n\n  addAccordionEvent() {\n    this.accordionList.forEach((item) => {\n      item.addEventListener(\"click\", () => this.toggleAccordion(item));\n    });\n  }\n\n  init() {\n    if (this.accordionList.length) {\n      this.toggleAccordion(this.accordionList[0]);\n      this.addAccordionEvent();\n    }\n\n    return this;\n  }\n}\n\n\n//# sourceURL=webpack://fantastic-animals/./js/modules/accordion-list.js?");

/***/ }),

/***/ "./js/modules/anima-numbers.js":
/*!*************************************!*\
  !*** ./js/modules/anima-numbers.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAnimaNumbers)\n/* harmony export */ });\nfunction initAnimaNumbers() {\n  const numbers = document.querySelectorAll(\"[data-number]\");\n\n  function animaNumbers() {\n    numbers.forEach((n) => {\n      const total = +n.innerText;\n      const increment = Math.floor(total / 100);\n      let start = 0;\n      const timer = setInterval(() => {\n        start += increment;\n        n.innerText = start;\n        if (start > total) {\n          n.innerText = total;\n          clearInterval(timer);\n        }\n      }, 25 * Math.random());\n    });\n  }\n\n  let observer;\n\n  function handleMutation(mutation) {\n    if (mutation[0].target.classList.contains(\"active\")) {\n      animaNumbers();\n      observer.disconnect();\n    }\n  }\n\n  observer = new MutationObserver(handleMutation);\n\n  const observeTarget = document.querySelector(\".numbers\");\n\n  observer.observe(observeTarget, {\n    attributes: true,\n  });\n}\n\n\n//# sourceURL=webpack://fantastic-animals/./js/modules/anima-numbers.js?");

/***/ }),

/***/ "./js/modules/business-hours.js":
/*!**************************************!*\
  !*** ./js/modules/business-hours.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initBusinessHours)\n/* harmony export */ });\nfunction initBusinessHours() {\n  const businessHours = document.querySelector(\"[data-week]\");\n  const weekDays = businessHours.dataset.week.split(\",\").map(Number);\n  const hoursWeek = businessHours.dataset.hours.split(\",\").map(Number);\n\n  const dateNow = new Date();\n  const currentDay = dateNow.getDay();\n  const currentHour = dateNow.getHours();\n\n  function openClosedStatus() {\n    const isWeekDay = weekDays.indexOf(currentDay) !== -1;\n    const isBusinessHour = currentHour >= hoursWeek[0] && currentHour < hoursWeek[1];\n    if (isWeekDay && isBusinessHour) {\n      businessHours.classList.add(\"open\");\n    } else {\n      businessHours.classList.add(\"closed\");\n    }\n  }\n\n  openClosedStatus();\n}\n\n\n//# sourceURL=webpack://fantastic-animals/./js/modules/business-hours.js?");

/***/ }),

/***/ "./js/modules/dropdown-menu.js":
/*!*************************************!*\
  !*** ./js/modules/dropdown-menu.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initDropdownMenu)\n/* harmony export */ });\n/* harmony import */ var _outside_click_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outside-click.js */ \"./js/modules/outside-click.js\");\n\n\nfunction initDropdownMenu() {\n  const dropdownMenus = document.querySelectorAll(\"[data-dropdown]\");\n\n  function handleClick(e) {\n    e.preventDefault();\n    e.target.innerHTML === \"About\" ? this.classList.toggle(\"active\") : null;\n    (0,_outside_click_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, [\"touchstart\", \"click\"], () => {\n      this.classList.remove(\"active\");\n    });\n  }\n\n  dropdownMenus.forEach((menu) => {\n    [\"touchstart\", \"click\"].forEach((userEvent) => {\n      menu.addEventListener(userEvent, handleClick);\n    });\n  });\n}\n\n\n//# sourceURL=webpack://fantastic-animals/./js/modules/dropdown-menu.js?");

/***/ }),

/***/ "./js/modules/fetch-animals.js":
/*!*************************************!*\
  !*** ./js/modules/fetch-animals.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFetchAnimals)\n/* harmony export */ });\n/* harmony import */ var _anima_numbers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./anima-numbers.js */ \"./js/modules/anima-numbers.js\");\n\n\nfunction initFetchAnimals() {\n  function createAnimal(animal) {\n    const div = document.createElement(\"div\");\n    div.classList.add(\"animal-number\");\n    div.innerHTML = `<h3>${animal.species}</h3><span data-number>${animal.total}</span>`;\n    return div;\n  }\n\n  async function fetchAnimals(url) {\n    try {\n      const animalsJSON = await (await fetch(url)).json();\n      const sectionNumbers = document.querySelector(\".numbers-grid\");\n\n      animalsJSON.forEach((a) => {\n        const divAnimal = createAnimal(a);\n\n        sectionNumbers.appendChild(divAnimal);\n      });\n\n      (0,_anima_numbers_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    } catch (error) {\n      console.log(error);\n    }\n  }\n\n  fetchAnimals(\"./animals-api.json\");\n}\n\n\n//# sourceURL=webpack://fantastic-animals/./js/modules/fetch-animals.js?");

/***/ }),

/***/ "./js/modules/fetch-bc.js":
/*!********************************!*\
  !*** ./js/modules/fetch-bc.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFetchBc)\n/* harmony export */ });\nfunction initFetchBc() {}\n\nasync function getBitcoinRate() {\n  try {\n    const url = \"https://blockchain.info/ticker\";\n    const bcObject = await (await fetch(url)).json();\n    const bcRate = (100 / bcObject.BRL.sell).toFixed(4);\n\n    displayRate(bcRate);\n  } catch (error) {\n    console.log(error);\n  }\n}\n\nfunction displayRate(rate) {\n  const rateSpan = document.querySelector(\".btc-rate\");\n\n  rateSpan.innerText = rate;\n}\n\ngetBitcoinRate();\n\n\n//# sourceURL=webpack://fantastic-animals/./js/modules/fetch-bc.js?");

/***/ }),

/***/ "./js/modules/menu-mobile.js":
/*!***********************************!*\
  !*** ./js/modules/menu-mobile.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initMenuMobile)\n/* harmony export */ });\n/* harmony import */ var _outside_click_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outside-click.js */ \"./js/modules/outside-click.js\");\n\n\nfunction initMenuMobile() {\n  const menuButton = document.querySelector('[data-menu=\"button\"]');\n  const menuList = document.querySelector('[data-menu=\"list\"]');\n\n  function openMenu() {\n    menuList.classList.toggle(\"active\");\n    menuButton.classList.toggle(\"active\");\n    (0,_outside_click_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(menuList, [\"click\"], () => {\n      menuList.classList.remove(\"active\");\n      menuButton.classList.remove(\"active\");\n    });\n  }\n\n  if (menuButton) {\n    menuButton.addEventListener(\"click\", openMenu);\n  }\n}\n\n\n//# sourceURL=webpack://fantastic-animals/./js/modules/menu-mobile.js?");

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initModal)\n/* harmony export */ });\nfunction initModal() {\n  const openButton = document.querySelector('[data-modal=\"open\"]');\n  const closeButton = document.querySelector('[data-modal=\"close\"]');\n  const containerModal = document.querySelector('[data-modal=\"container\"]');\n\n  function toggleModal(e) {\n    Object.prototype.toString.call(this) === \"[object HTMLAnchorElement]\" ? e.preventDefault() : null;\n    containerModal.classList.toggle(\"active\");\n  }\n\n  function clickOut(e) {\n    e.target === this ? toggleModal() : \"\";\n  }\n\n  if (openButton && closeButton && containerModal) {\n    openButton.addEventListener(\"click\", toggleModal);\n    closeButton.addEventListener(\"click\", toggleModal);\n    containerModal.addEventListener(\"click\", clickOut);\n  }\n}\n\n\n//# sourceURL=webpack://fantastic-animals/./js/modules/modal.js?");

/***/ }),

/***/ "./js/modules/outside-click.js":
/*!*************************************!*\
  !*** ./js/modules/outside-click.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ outsideClick)\n/* harmony export */ });\nfunction outsideClick(element, events, callback) {\n  const html = document.documentElement;\n  const outside = \"data-outside\";\n  function handleOutsideClick(e) {\n    if (!element.contains(e.target)) {\n      element.removeAttribute(outside);\n      events.forEach((e) => {\n        html.removeEventListener(e, handleOutsideClick);\n      });\n      callback();\n    }\n  }\n\n  if (!element.hasAttribute(outside)) {\n    events.forEach((userEvent) => {\n      setTimeout(() => {\n        html.addEventListener(userEvent, handleOutsideClick);\n      });\n    });\n    element.setAttribute(outside, \"\");\n  }\n}\n\n\n//# sourceURL=webpack://fantastic-animals/./js/modules/outside-click.js?");

/***/ }),

/***/ "./js/modules/scroll-anima.js":
/*!************************************!*\
  !*** ./js/modules/scroll-anima.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initScrollAnimation)\n/* harmony export */ });\nfunction initScrollAnimation() {\n  const sections = document.querySelectorAll(\"[data-anime='scroll']\");\n  const viewMid = window.innerHeight * 0.75;\n  // sections[0].classList.add(\"active\");\n\n  const scrollAnimation = () => {\n    sections.forEach((section) => {\n      const sectionTop = section.getBoundingClientRect().top;\n      const isSectionVisible = sectionTop - viewMid < 0;\n\n      if (isSectionVisible) {\n        section.classList.add(\"active\");\n      } else if (section.classList.contains(\"active\")) {\n        section.classList.remove(\"active\");\n      }\n    });\n  };\n\n  if (sections.length) {\n    scrollAnimation();\n\n    window.addEventListener(\"scroll\", scrollAnimation);\n  }\n}\n\n\n//# sourceURL=webpack://fantastic-animals/./js/modules/scroll-anima.js?");

/***/ }),

/***/ "./js/modules/subtle-scroll.js":
/*!*************************************!*\
  !*** ./js/modules/subtle-scroll.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ SubtleScroll)\n/* harmony export */ });\nclass SubtleScroll {\n  constructor(links, options) {\n    this.links = document.querySelectorAll(links);\n\n    if (options === undefined) {\n      this.options = { behavior: \"smooth\", block: \"start\" };\n    } else {\n      this.options = options;\n    }\n\n    this.scrollToSection = this.scrollToSection.bind(this);\n  }\n\n  scrollToSection(e) {\n    e.preventDefault();\n    const href = e.currentTarget.getAttribute(\"href\");\n    const section = document.querySelector(href);\n\n    section.scrollIntoView(this.options);\n  }\n\n  addLinkEvent() {\n    this.links.forEach((link) => {\n      link.addEventListener(\"click\", this.scrollToSection);\n    });\n  }\n\n  init() {\n    if (this.links.length) {\n      this.addLinkEvent();\n    }\n\n    return this;\n  }\n}\n\n\n//# sourceURL=webpack://fantastic-animals/./js/modules/subtle-scroll.js?");

/***/ }),

/***/ "./js/modules/tabnav.js":
/*!******************************!*\
  !*** ./js/modules/tabnav.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TabNav)\n/* harmony export */ });\nclass TabNav {\n  constructor(menu, content) {\n    this.tabMenu = document.querySelectorAll(menu);\n    this.tabContent = document.querySelectorAll(content);\n    this.activeClass = \"active\";\n  }\n\n  activeTab(index) {\n    const direction = this.tabContent[index].dataset.anime;\n    this.tabContent.forEach((item) => {\n      item.classList.remove(this.activeClass);\n    });\n    this.tabContent[index].classList.add(this.activeClass, direction);\n  }\n\n  addTabNavEvent() {\n    this.tabMenu.forEach((item, index) => {\n      item.addEventListener(\"click\", () => {\n        this.activeTab(index);\n      });\n    });\n  }\n\n  init() {\n    if (this.tabMenu.length && this.tabContent.length) {\n      this.activeTab(0);\n      this.addTabNavEvent();\n    }\n\n    return this;\n  }\n}\n\n\n//# sourceURL=webpack://fantastic-animals/./js/modules/tabnav.js?");

/***/ }),

/***/ "./js/modules/tooltip.js":
/*!*******************************!*\
  !*** ./js/modules/tooltip.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initTooltip)\n/* harmony export */ });\nfunction initTooltip() {\n  const tooltips = document.querySelectorAll(\"[data-tooltip]\");\n\n  const onMouseMove = {\n    handleEvent(e) {\n      this.tooltipBox.style.top = e.pageY + 20 + \"px\";\n      this.tooltipBox.style.left = e.pageX + 20 + \"px\";\n    },\n  };\n\n  const onMouseLeave = {\n    handleEvent() {\n      this.tooltipBox.remove();\n      this.element.removeEventListener(\"mouseleave\", onMouseLeave);\n      this.element.removeEventListener(\"mousemove\", onMouseMove);\n    },\n  };\n\n  const createTooltipBox = (element) => {\n    const tooltipBox = document.createElement(\"div\");\n    const text = element.getAttribute(\"aria-label\");\n    tooltipBox.classList.add(\"tooltip\");\n    tooltipBox.innerText = text;\n    document.body.appendChild(tooltipBox);\n    return tooltipBox;\n  };\n\n  function onMouseOver({ pageY, pageX }) {\n    const tooltipBox = createTooltipBox(this);\n    tooltipBox.style.top = `${pageY}px`;\n    tooltipBox.style.left = `${pageX}px`;\n\n    onMouseMove.tooltipBox = tooltipBox;\n    onMouseMove.element = this;\n\n    onMouseLeave.tooltipBox = tooltipBox;\n    onMouseLeave.element = this;\n\n    this.addEventListener(\"mouseleave\", onMouseLeave);\n    this.addEventListener(\"mousemove\", onMouseMove);\n  }\n\n  tooltips.forEach((t) => {\n    t.addEventListener(\"mouseover\", onMouseOver);\n  });\n}\n\n\n//# sourceURL=webpack://fantastic-animals/./js/modules/tooltip.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_subtle_scroll_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/subtle-scroll.js */ \"./js/modules/subtle-scroll.js\");\n/* harmony import */ var _modules_accordion_list_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/accordion-list.js */ \"./js/modules/accordion-list.js\");\n/* harmony import */ var _modules_tabnav_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/tabnav.js */ \"./js/modules/tabnav.js\");\n/* harmony import */ var _modules_scroll_anima_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/scroll-anima.js */ \"./js/modules/scroll-anima.js\");\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/modal.js */ \"./js/modules/modal.js\");\n/* harmony import */ var _modules_tooltip_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/tooltip.js */ \"./js/modules/tooltip.js\");\n/* harmony import */ var _modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/dropdown-menu.js */ \"./js/modules/dropdown-menu.js\");\n/* harmony import */ var _modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/menu-mobile.js */ \"./js/modules/menu-mobile.js\");\n/* harmony import */ var _modules_business_hours_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/business-hours.js */ \"./js/modules/business-hours.js\");\n/* harmony import */ var _modules_fetch_animals_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/fetch-animals.js */ \"./js/modules/fetch-animals.js\");\n/* harmony import */ var _modules_fetch_bc_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/fetch-bc.js */ \"./js/modules/fetch-bc.js\");\n\n\n\n\n\n\n\n\n\n\n\n\nconst subtleScroll = new _modules_subtle_scroll_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('a[href^=\"#\"]');\nsubtleScroll.init();\n\nconst accordion = new _modules_accordion_list_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"[data-anime='accordion'] dt\");\naccordion.init();\n\nconst tabnav = new _modules_tabnav_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\"[data-tab='menu'] li\", \"[data-tab='content'] section\");\ntabnav.init();\n\n(0,_modules_scroll_anima_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n(0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n(0,_modules_tooltip_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n(0,_modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n(0,_modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\n(0,_modules_business_hours_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\n(0,_modules_fetch_animals_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])();\n(0,_modules_fetch_bc_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"])();\n\n\n//# sourceURL=webpack://fantastic-animals/./js/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/script.js");
/******/ 	
/******/ })()
;
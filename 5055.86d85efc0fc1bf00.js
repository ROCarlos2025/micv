"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[5055],{

/***/ 630:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomePageRoutingModule: () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 8431);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 1624);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
var _HomePageRoutingModule;




const routes = [{
  path: '',
  component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage
}];
class HomePageRoutingModule {}
_HomePageRoutingModule = HomePageRoutingModule;
_HomePageRoutingModule.ɵfac = function HomePageRoutingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _HomePageRoutingModule)();
};
_HomePageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _HomePageRoutingModule
});
_HomePageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](HomePageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 5055:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomePageModule: () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4460);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 1624);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ 630);
/* harmony import */ var _pages_experiencia_detalle_experiencia_detalle_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/experiencia-detalle/experiencia-detalle.component */ 9955);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
var _HomePageModule;







class HomePageModule {}
_HomePageModule = HomePageModule;
_HomePageModule.ɵfac = function HomePageModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _HomePageModule)();
};
_HomePageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: _HomePageModule
});
_HomePageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](HomePageModule, {
    declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage, _pages_experiencia_detalle_experiencia_detalle_component__WEBPACK_IMPORTED_MODULE_2__.ExperienciaDetalleComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule]
  });
})();

/***/ }),

/***/ 1624:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomePage: () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var C_Users_Hola_Desktop_Ionic_micv_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 8431);

var _HomePage;



const _c0 = () => ["/experiencia", "santander-loyalty"];
const _c1 = () => ["/experiencia", "cibanco"];
const _c2 = () => ["/experiencia", "axa"];
const _c3 = () => ["/experiencia", "sgf"];
const _c4 = () => ["/experiencia", "gft"];
const _c5 = () => ["/experiencia", "praxis"];
class HomePage {
  constructor() {}
  ngOnInit() {
    return (0,C_Users_Hola_Desktop_Ionic_micv_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {})();
  } // await this.storage.create();
  // const prefersDark = (await this.storage.get('theme')) === 'dark';
  // document.body.classList.toggle('dark', prefersDark);
  toggleTheme(event) {
    const darkMode = event.detail.checked;
    document.body.classList.toggle('dark', darkMode);
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }
  downloadPDF() {
    const link = document.createElement('a');
    link.href = 'assets/RobertoCarlosPineda_CVMinsait2025.pdf';
    link.download = 'RobertoCarlosPineda_CVMinsait2025.pdf';
    link.target = '_blank';
    link.click();
  }
  downloadPDFEnglish() {
    const link = document.createElement('a');
    link.href = 'assets/CV_2025_English.pdf';
    link.download = 'CV_2025_English.pdf';
    link.target = '_blank';
    link.click();
  }
}
_HomePage = HomePage;
_HomePage.ɵfac = function HomePage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _HomePage)();
};
_HomePage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _HomePage,
  selectors: [["app-home"]],
  standalone: false,
  decls: 119,
  vars: 12,
  consts: [["id", "cv-content"], [1, "cv-header"], [1, "cv-top-bar"], [1, "cv-name-title"], [1, "cv-name"], [1, "cv-logo"], ["src", "assets/indra.svg", "alt", "Minsait Indra logo"], [1, "cv-divider"], [1, "cv-summary"], [1, "profile-header"], ["src", "assets/roberto.jpg", "alt", "Foto de perfil"], [3, "routerLink"], [1, "botones-container"], [1, "ion-justify-content-center"], ["size-xs", "12", "size-md", "4"], ["expand", "block", 3, "click"]],
  template: function HomePage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-content", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Roberto Carlos Pineda Tabarez");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Desarrollador Front End Angular");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "img", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 8)(12, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Ingeniero en Sistemas Computacionales con s\u00F3lida experiencia en desarrollo Front-End usando Angular. Especialista en interfaces de alta calidad, prototipos y maquetaci\u00F3n web con Figma, Adobe XD y Photoshop. Experto en dise\u00F1o responsivo, integraci\u00F3n de servicios web y consumo de APIs. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p")(15, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Perfil profesional de inter\u00E9s:");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " Me he destacado en la migraci\u00F3n tecnol\u00F3gica de sistemas legacy a Angular, integraci\u00F3n de servicios REST, manejo avanzado de RxJS, as\u00ED como en la implementaci\u00F3n de Google Analytics y Google Optimize para la mejora continua de aplicaciones. He contribuido en proyectos clave para empresas como Santander, CI Banco, AXA y Fundaci\u00F3n Carlos Slim, GFT, Minsait desde la maqueta hasta la puesta en producci\u00F3n. Busco seguir creciendo en un entorno desafiante que valore la innovaci\u00F3n y la mejora continua. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "img", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Roberto Carlos Pineda Tabarez");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Front-End Developer / Angular Specialist");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "ion-card")(25, "ion-card-header")(26, "ion-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Perfil Profesional");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "ion-card-content")(29, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, " Ingeniero en Sistemas Computacionales con m\u00E1s de 7 a\u00F1os de experiencia en desarrollo Front-End, especializado en Angular y tecnolog\u00EDas modernas del ecosistema web. He colaborado en proyectos para sectores bancarios y corporativos, liderando la creaci\u00F3n de interfaces de usuario de alta calidad, dise\u00F1o responsivo y optimizaci\u00F3n visual, siempre alineado con herramientas como Figma, Adobe XD y Photoshop. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, " Cuento con experiencia en el desarrollo de aplicaciones m\u00F3viles h\u00EDbridas utilizando Ionic + Angular, creando interfaces responsivas, funcionales y optimizadas para plataformas (android, iOs). He participado en procesos completos desde la maquetaci\u00F3n hasta el despliegue, integrando servicios web y aprovechando las capacidades nativas del dispositivo. Mi enfoque est\u00E1 en aportar soluciones eficientes, visualmente atractivas y escalables, bajo las mejores pr\u00E1cticas de desarrollo, buscando siempre la mejora del look & feel y la experiencia del usuario. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "ion-card")(34, "ion-card-header")(35, "ion-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Experiencia Profesional");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "ion-card-content")(38, "ul")(39, "li")(40, "a", 11)(41, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Santander - Proyecto Loyalty (2024-2025)");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "li")(44, "a", 11)(45, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "CI-Banco - Gestor Documental (2023-2024)");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "li")(48, "a", 11)(49, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "AXA - Reportes Adhoc (2023)");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "li")(52, "a", 11)(53, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Santander Global Facilities (2021-2022)");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "li")(56, "a", 11)(57, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "GFT M\u00E9xico (2020-2021)");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "li")(60, "a", 11)(61, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "PRAXIS M\u00E9xico (2016-2019)");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "ion-card")(64, "ion-card-header")(65, "ion-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "Conocimientos T\u00E9cnicos");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "ion-card-content")(68, "p")(69, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "Lenguajes:");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, " TypeScript, HTML5, CSS3, JavaScript, SASS ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "p")(73, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "Frameworks:");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, " Angular (v7 a v18), RxJS, Bootstrap");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "p")(77, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "Herramientas:");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, " Git, Jenkins, Figma, Adobe XD");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "p")(81, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "Bases de datos:");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, " MySQL, MongoDB, SQL Server");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "ion-card")(85, "ion-card-header")(86, "ion-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, "Educaci\u00F3n");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "ion-card-content")(89, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, "Ingenier\u00EDa en Sistemas Computacionales, ITSH (2011 - 2016)");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, "Instituto T\u00E9cnologico Superior de Huetamo");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "ion-card")(94, "ion-card-header")(95, "ion-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, "Idiomas");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "ion-card-content")(98, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99, "Espa\u00F1ol (Nativo), Ingl\u00E9s (B1)");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "ion-card")(101, "ion-card-header")(102, "ion-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](103, "Datos de contacto");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "ion-card-content")(105, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](106, "767-106-54-22");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](108, "roberts.pineda.rcp@gmail.com");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "ion-content")(110, "div", 12)(111, "ion-grid")(112, "ion-row", 13)(113, "ion-col", 14)(114, "ion-button", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomePage_Template_ion_button_click_114_listener() {
        return ctx.downloadPDF();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](115, " Exportar a PDF (Espa\u00F1ol) ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "ion-col", 14)(117, "ion-button", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomePage_Template_ion_button_click_117_listener() {
        return ctx.downloadPDFEnglish();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](118, " Export to PDF (English) ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](40);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](6, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](7, _c1));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](8, _c2));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](9, _c3));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](10, _c4));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](11, _c5));
    }
  },
  dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonCardContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonCardHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonCardTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHrefDelegate, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink],
  styles: [".profile-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 20px;\n}\n.profile-header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 120px;\n  border-radius: 50%;\n  border: 4px solid var(--ion-color-primary);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);\n}\n.profile-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  margin-top: 10px;\n  color: var(--ion-color-primary);\n}\n.profile-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: 400;\n  opacity: 0.8;\n}\n\nion-card[_ngcontent-%COMP%] {\n  border-radius: 16px;\n  margin-bottom: 16px;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);\n}\n\nion-card-title[_ngcontent-%COMP%] {\n  color: var(--ion-color-primary);\n  font-weight: bold;\n}\n\n.cv-header[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 1;\n  width: 100%;\n  top: 0;\n  left: 0;\n}\n.cv-header[_ngcontent-%COMP%]   .cv-top-bar[_ngcontent-%COMP%] {\n  background-color: #1d3c4e;\n  color: white;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 0;\n  padding: 1rem;\n  height: 110px;\n  padding-left: 50px;\n}\n.cv-header[_ngcontent-%COMP%]   .cv-top-bar[_ngcontent-%COMP%]   .cv-name[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  font-weight: 600;\n  margin: 0;\n}\n.cv-header[_ngcontent-%COMP%]   .cv-top-bar[_ngcontent-%COMP%]   .cv-name-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.5rem;\n}\n.cv-header[_ngcontent-%COMP%]   .cv-top-bar[_ngcontent-%COMP%]   .cv-name-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1rem;\n  font-weight: normal;\n}\n.cv-header[_ngcontent-%COMP%]   .cv-top-bar[_ngcontent-%COMP%]   .cv-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 40px;\n}\n.cv-header[_ngcontent-%COMP%]   .cv-divider[_ngcontent-%COMP%] {\n  background-color: #e87ea1;\n  height: 25px;\n  width: 100%;\n}\n\n.cv-summary[_ngcontent-%COMP%] {\n  padding: 2rem;\n  font-size: 0.95rem;\n  line-height: 1.6;\n  margin-top: 110px;\n  text-align: justify;\n}\n\np[_ngcontent-%COMP%] {\n  text-align: justify;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUFDRjtBQUNFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLDBDQUFBO0VBQ0EseUNBQUE7QUFDSjtBQUVFO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLCtCQUFBO0FBQUo7QUFHRTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBREo7O0FBS0E7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMENBQUE7QUFGRjs7QUFLQTtFQUNFLCtCQUFBO0VBQ0EsaUJBQUE7QUFGRjs7QUFLQTtFQUNFLGVBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0FBRkY7QUFJRTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFGSjtBQUlJO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7QUFGTjtBQU1NO0VBQ0UsU0FBQTtFQUNBLGlCQUFBO0FBSlI7QUFNTTtFQUNFLFNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFKUjtBQVFJO0VBQ0UsWUFBQTtBQU5OO0FBVUU7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBUko7O0FBWUE7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFURjs7QUFZQTtFQUNFLG1CQUFBO0FBVEYiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZmlsZS1oZWFkZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG5cclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgaGVpZ2h0OiAxMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJvcmRlcjogNHB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIH1cclxuXHJcbiAgaDEge1xyXG4gICAgZm9udC1zaXplOiAxLjhyZW07XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICB9XHJcblxyXG4gIGgyIHtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIG9wYWNpdHk6IDAuODtcclxuICB9XHJcbn1cclxuXHJcbmlvbi1jYXJkIHtcclxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xyXG59XHJcblxyXG5pb24tY2FyZC10aXRsZSB7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmN2LWhlYWRlciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcblxyXG4gIC5jdi10b3AtYmFyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxZDNjNGU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICBoZWlnaHQ6IDExMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xyXG5cclxuICAgIC5jdi1uYW1lIHtcclxuICAgICAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgIH1cclxuXHJcbiAgICAuY3YtbmFtZS10aXRsZSB7XHJcbiAgICAgIGgxIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgIH1cclxuICAgICAgaDIge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5jdi1sb2dvIGltZyB7XHJcbiAgICAgIGhlaWdodDogNDBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5jdi1kaXZpZGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlODdlYTE7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbn1cclxuXHJcbi5jdi1zdW1tYXJ5IHtcclxuICBwYWRkaW5nOiAycmVtO1xyXG4gIGZvbnQtc2l6ZTogMC45NXJlbTtcclxuICBsaW5lLWhlaWdodDogMS42O1xyXG4gIG1hcmdpbi10b3A6IDExMHB4O1xyXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbn1cclxuXHJcbnAge1xyXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ })

}]);
//# sourceMappingURL=5055.86d85efc0fc1bf00.js.map
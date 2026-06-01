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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6684);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 1624);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ 630);
/* harmony import */ var _pages_experiencia_detalle_experiencia_detalle_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/experiencia-detalle/experiencia-detalle.component */ 9955);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 8431);
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
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](HomePageModule, {
    declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage, _pages_experiencia_detalle_experiencia_detalle_component__WEBPACK_IMPORTED_MODULE_2__.ExperienciaDetalleComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2596);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6684);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 1507);
var _HomePage;




function HomePage_div_126_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const exp_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", exp_r2.logo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", exp_r2.company);
  }
}
function HomePage_div_126_span_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tag_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tag_r4);
  }
}
function HomePage_div_126_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 96)(1, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 98)(3, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomePage_div_126_Template_div_click_4_listener() {
      const exp_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.navigateToDetail(exp_r2.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 101)(6, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, HomePage_div_126_div_8_Template, 2, 2, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h4", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, HomePage_div_126_span_16_Template, 2, 1, "span", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "ion-icon", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const exp_r2 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("stagger-" + (i_r5 % 6 + 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.lang === "en" ? exp_r2.periodEn : exp_r2.period, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", exp_r2.logo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.lang === "en" ? exp_r2.titleEn : exp_r2.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](exp_r2.company);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.lang === "en" ? exp_r2.descriptionEn : exp_r2.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", exp_r2.tags);
  }
}
function HomePage_div_140_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 113)(1, "div", 114)(2, "span", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const skill_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](skill_r6.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", skill_r6.level, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", skill_r6.level, "%")("--delay", skill_r6.delay);
  }
}
function HomePage_div_146_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 113)(1, "div", 114)(2, "span", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const skill_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](skill_r7.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", skill_r7.level, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", skill_r7.level, "%")("--delay", skill_r7.delay);
  }
}
function HomePage_div_152_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 113)(1, "div", 114)(2, "span", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const skill_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](skill_r8.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", skill_r8.level, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", skill_r8.level, "%")("--delay", skill_r8.delay);
  }
}
function HomePage_div_158_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ion-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const skill_r9 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", skill_r9.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.lang === "en" ? skill_r9.nameEn : skill_r9.nameEs);
  }
}
class HomePage {
  constructor(router, ngZone) {
    this.router = router;
    this.ngZone = ngZone;
    this.lang = 'es';
    this.darkMode = false;
    this.showNav = false;
    this.experiences = [{
      id: 'minsait-telcel',
      period: '08/2025 — Presente',
      periodEn: '08/2025 — Present',
      title: 'Lead Front-End Portal Registro Biométrico',
      titleEn: 'Lead Front-End Biometric Registration Portal',
      company: 'Minsait - Telcel',
      description: 'Configuración y lanzamiento de proyecto Angular v20 con arquitectura Atomic Design para estructura front-end escalable.',
      descriptionEn: 'Configured and launched Angular v20 project using Atomic Design architecture for scalable front-end application structure.',
      tags: ['Angular v20', 'TypeScript', 'Signals', 'RxJS', 'Nginx'],
      logo: 'assets/empresas/telcel.png'
    }, {
      id: 'santander-loyalty',
      period: '09/2024 — 07/2025',
      periodEn: '09/2024 — 07/2025',
      title: 'Lead Front-End - Loyalty',
      titleEn: 'Lead Front-End - Loyalty',
      company: 'Santander',
      description: 'Configuración y lanzamiento de proyecto Angular v18, integrando UI FLAME de Santander y librerías de terceros para manejo de fechas, filtrado, paginación y búsqueda.',
      descriptionEn: "Configured and launched Angular v18 project, integrating Santander's UI FLAME and third-party libraries for date handling, filtering, pagination, and search.",
      tags: ['Angular v18', 'UI FLAME', 'TypeScript', 'RxJS', 'Figma'],
      logo: 'assets/empresas/santander.png'
    }, {
      id: 'cibanco',
      period: '12/2023 — 08/2024',
      periodEn: '12/2023 — 08/2024',
      title: 'Front-End CI-Banco / Gestor Documental',
      titleEn: 'Front-End CI-Banco / Document Management',
      company: 'CI-Banco',
      description: 'Configuración de proyecto Angular 17 con Bootstrap v5.2.3, Angular Material, crypto-js y @ngrx para gestión del estado.',
      descriptionEn: 'Configured Angular 17 project with Bootstrap v5.2.3, Angular Material, crypto-js and @ngrx for state management.',
      tags: ['Angular v17', 'Bootstrap', '@ngrx', 'Angular Material', 'crypto-js'],
      logo: 'assets/empresas/CIBanco.png'
    }, {
      id: 'axa',
      period: '03/2023 — 12/2023',
      periodEn: '03/2023 — 12/2023',
      title: 'Front-End Developer - Reportes Adhoc',
      titleEn: 'Front-End Developer - Adhoc Reports',
      company: 'AXA',
      description: 'Migración de AngularJS a Angular v15.2.8 con Node.js 18.15.0, reemplazando JSP con componentes modernos Angular.',
      descriptionEn: 'Migration from AngularJS to Angular v15.2.8 with Node.js 18.15.0, replacing JSP with modern Angular components.',
      tags: ['Angular v15', 'Node.js', 'Bootstrap', 'RxJS', 'MongoDB'],
      logo: 'assets/empresas/AXA.png'
    }, {
      id: 'sgf',
      period: '10/2021 — 08/2022',
      periodEn: '10/2021 — 08/2022',
      title: 'Especialista Front End',
      titleEn: 'Mex Front End Specialist',
      company: 'Santander Global Facilities / ClictwoSell',
      description: 'Creación de prototipos UI con Figma y Miro, desarrollo de modelos de datos con TypeScript tipado seguro, pruebas unitarias.',
      descriptionEn: 'Created UI prototypes with Figma and Miro, developed data models with type-safe TypeScript, wrote unit tests for code quality.',
      tags: ['Angular 7-9', 'Figma', 'Google Analytics', 'iOS/Android'],
      logo: 'assets/empresas/santander.png'
    }, {
      id: 'gft',
      period: '01/2020 — 10/2021',
      periodEn: '01/2020 — 10/2021',
      title: 'Desarrollador Front-End Senior',
      titleEn: 'Senior Front-End Developer',
      company: 'GFT México / Santander Móvil',
      description: 'Integración de Bootstrap v5.2.3, RxJS, DataTables, Moment y FileSaver para manejo de grandes conjuntos de datos.',
      descriptionEn: 'Integrated Bootstrap v5.2.3, RxJS, DataTables, Moment and FileSaver for large datasets and file handling.',
      tags: ['Angular 7', 'Jasmine/Karma', 'Tealium', 'RxJS'],
      logo: 'assets/empresas/santander.png'
    }];
    this.programmingSkills = [{
      name: 'Angular',
      level: 97,
      delay: '0.1s'
    }, {
      name: 'TypeScript',
      level: 95,
      delay: '0.2s'
    }, {
      name: 'RxJS',
      level: 92,
      delay: '0.3s'
    }, {
      name: 'JavaScript',
      level: 90,
      delay: '0.4s'
    }, {
      name: 'Node.js',
      level: 78,
      delay: '0.5s'
    }, {
      name: 'HTML5 / CSS3 / SCSS',
      level: 95,
      delay: '0.6s'
    }];
    this.toolsSkills = [{
      name: 'Git / GitHub Actions',
      level: 90,
      delay: '0.1s'
    }, {
      name: 'Figma / UI Prototyping',
      level: 85,
      delay: '0.2s'
    }, {
      name: 'Nginx',
      level: 80,
      delay: '0.3s'
    }, {
      name: 'npm / Build Tooling',
      level: 92,
      delay: '0.4s'
    }, {
      name: 'Postman / Swagger',
      level: 88,
      delay: '0.5s'
    }];
    this.databaseSkills = [{
      name: 'MySQL',
      level: 75,
      delay: '0.1s'
    }, {
      name: 'MongoDB',
      level: 72,
      delay: '0.2s'
    }, {
      name: 'Oracle',
      level: 68,
      delay: '0.3s'
    }, {
      name: 'SQL Server',
      level: 70,
      delay: '0.4s'
    }];
    this.softSkills = [{
      icon: 'people-outline',
      nameEn: 'Team Collaboration',
      nameEs: 'Trabajo en Equipo'
    }, {
      icon: 'chatbubbles-outline',
      nameEn: 'Interpersonal Skills',
      nameEs: 'Habilidades Interpersonales'
    }, {
      icon: 'timer-outline',
      nameEn: 'Respecting Timelines',
      nameEs: 'Cumplimiento de Plazos'
    }, {
      icon: 'bulb-outline',
      nameEn: 'Problem Solving',
      nameEs: 'Resolución de Problemas'
    }, {
      icon: 'document-text-outline',
      nameEn: 'Code Documentation',
      nameEs: 'Documentación de Código'
    }, {
      icon: 'accessibility-outline',
      nameEn: 'Accessibility',
      nameEs: 'Accesibilidad'
    }];
  }
  ngOnInit() {
    // Detect browser language, default to Spanish
    // Only use localStorage if user explicitly toggled language
    const userToggled = localStorage.getItem('portfolio-lang-manual');
    if (userToggled) {
      this.lang = userToggled;
    } else {
      const browserLang = navigator.language || navigator.userLanguage || 'es';
      this.lang = browserLang.startsWith('en') ? 'en' : 'es';
    }
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme === 'dark') {
      this.darkMode = true;
      document.body.classList.add('dark');
    }
  }
  ngAfterViewInit() {
    this.setupScrollAnimations();
  }
  setupScrollAnimations() {
    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });
    setTimeout(() => {
      document.querySelectorAll('.animate-on-scroll').forEach(el => {
        this.observer.observe(el);
      });
    }, 100);
  }
  onScroll(event) {
    this.ngZone.run(() => {
      this.showNav = event.detail.scrollTop > 300;
    });
  }
  scrollTo(sectionId) {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
  toggleLang() {
    this.lang = this.lang === 'en' ? 'es' : 'en';
    localStorage.setItem('portfolio-lang-manual', this.lang);
  }
  toggleTheme() {
    this.darkMode = !this.darkMode;
    document.body.classList.toggle('dark', this.darkMode);
    localStorage.setItem('portfolio-theme', this.darkMode ? 'dark' : 'light');
  }
  navigateToDetail(id) {
    this.router.navigate(['/experiencia', id]);
  }
  downloadPDF() {
    const link = document.createElement('a');
    const isEnglish = this.lang === 'en';
    link.href = isEnglish ? 'assets/CV_Roberto_English.pdf' : 'assets/CV_Roberto_Español.pdf';
    link.download = isEnglish ? 'Roberto_Pineda_CV_2026_EN.pdf' : 'Roberto_Pineda_CV_2026_ES.pdf';
    link.target = '_blank';
    link.click();
  }
  downloadPDFEnglish() {
    const link = document.createElement('a');
    link.href = 'assets/CV_Roberto_English.pdf';
    link.download = 'Roberto_Pineda_CV_2026_EN.pdf';
    link.target = '_blank';
    link.click();
  }
}
_HomePage = HomePage;
_HomePage.ɵfac = function HomePage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _HomePage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
};
_HomePage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _HomePage,
  selectors: [["app-home"]],
  standalone: false,
  decls: 227,
  vars: 58,
  consts: [[3, "ionScroll", "scrollEvents"], [1, "floating-nav", "glass-strong"], [1, "nav-content"], [1, "nav-logo"], [1, "nav-links"], [3, "click"], [1, "nav-actions"], [1, "lang-toggle", 3, "click"], [1, "theme-toggle", 3, "click"], [3, "name"], ["id", "hero", 1, "hero-section"], [1, "hero-bg"], [1, "gradient-orb", "orb-1"], [1, "gradient-orb", "orb-2"], [1, "gradient-orb", "orb-3"], [1, "grid-overlay"], [1, "hero-content"], [1, "hero-badge", "animate-on-scroll"], [1, "badge-dot"], [1, "hero-photo", "animate-on-scroll", "stagger-1"], [1, "photo-ring"], ["src", "assets/roberto.jpg", "alt", "Roberto Carlos Pineda Tabarez"], [1, "hero-title", "animate-on-scroll", "stagger-2"], [1, "hero-greeting"], [1, "hero-name"], [1, "hero-subtitle", "animate-on-scroll", "stagger-3"], [1, "typed-text"], [1, "hero-description", "animate-on-scroll", "stagger-4"], [1, "hero-stats", "animate-on-scroll", "stagger-5"], [1, "stat"], [1, "stat-number"], [1, "stat-label"], [1, "stat-divider"], [1, "hero-cta", "animate-on-scroll", "stagger-6"], [1, "btn-primary", 3, "click"], ["name", "arrow-forward-outline"], [1, "btn-secondary", 3, "click"], ["name", "document-outline"], [1, "scroll-indicator", "animate-on-scroll", "stagger-6"], [1, "mouse"], [1, "wheel"], ["id", "about", 1, "section", "about-section"], [1, "section-container"], [1, "section-header", "animate-on-scroll"], [1, "section-tag"], [1, "section-title"], [1, "about-grid"], [1, "about-text", "animate-on-scroll", "stagger-1"], [1, "about-lead"], [1, "about-highlights", "animate-on-scroll", "stagger-2"], [1, "highlight-card"], [1, "highlight-icon"], ["name", "shield-checkmark-outline"], ["name", "rocket-outline"], ["name", "people-outline"], ["name", "layers-outline"], ["id", "experience", 1, "section", "experience-section"], [1, "timeline"], ["class", "timeline-item animate-on-scroll", 3, "class", 4, "ngFor", "ngForOf"], ["id", "skills", 1, "section", "skills-section"], [1, "skills-grid"], [1, "skill-category", "animate-on-scroll", "stagger-1"], [1, "category-title"], ["name", "code-slash-outline"], [1, "skill-bars"], ["class", "skill-bar-item", 4, "ngFor", "ngForOf"], [1, "skill-category", "animate-on-scroll", "stagger-2"], ["name", "construct-outline"], [1, "skill-category", "animate-on-scroll", "stagger-3"], ["name", "server-outline"], [1, "skill-category", "animate-on-scroll", "stagger-4"], ["name", "heart-outline"], [1, "soft-skills-grid"], ["class", "soft-skill", 4, "ngFor", "ngForOf"], ["id", "education", 1, "section", "education-section"], [1, "education-cards"], [1, "edu-card", "animate-on-scroll", "stagger-1"], [1, "edu-year"], [1, "edu-school"], [1, "edu-card", "animate-on-scroll", "stagger-2"], ["id", "contact", 1, "section", "contact-section"], [1, "contact-grid", "animate-on-scroll", "stagger-1"], ["href", "mailto:roberts.pineda.rcp@gmail.com", 1, "contact-card"], [1, "contact-icon"], ["name", "mail-outline"], ["href", "tel:+527671065422", 1, "contact-card"], ["name", "call-outline"], ["href", "https://rocarlos2025.github.io/micv", "target", "_blank", 1, "contact-card"], ["name", "globe-outline"], [1, "download-section", "animate-on-scroll", "stagger-2"], [1, "btn-primary", "btn-large", 3, "click"], ["name", "download-outline"], [1, "footer"], [1, "footer-content"], [1, "footer-tech"], [1, "footer-languages"], [1, "timeline-item", "animate-on-scroll"], [1, "timeline-marker"], [1, "marker-dot"], [1, "marker-line"], [1, "timeline-card", 3, "click"], [1, "card-header"], [1, "card-period"], ["class", "card-company-logo", 4, "ngIf"], [1, "card-title"], [1, "card-company"], [1, "card-description"], [1, "card-tags"], ["class", "tag", 4, "ngFor", "ngForOf"], [1, "card-arrow"], [1, "card-company-logo"], [3, "src", "alt"], [1, "tag"], [1, "skill-bar-item"], [1, "skill-info"], [1, "skill-name"], [1, "skill-level"], [1, "skill-bar"], [1, "skill-fill"], [1, "soft-skill"]],
  template: function HomePage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-content", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ionScroll", function HomePage_Template_ion_content_ionScroll_0_listener($event) {
        return ctx.onScroll($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1)(2, "div", 2)(3, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "RCP");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4)(6, "a", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomePage_Template_a_click_6_listener() {
        return ctx.scrollTo("about");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomePage_Template_a_click_8_listener() {
        return ctx.scrollTo("experience");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomePage_Template_a_click_10_listener() {
        return ctx.scrollTo("skills");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomePage_Template_a_click_12_listener() {
        return ctx.scrollTo("contact");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6)(15, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomePage_Template_button_click_15_listener() {
        return ctx.toggleLang();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomePage_Template_button_click_17_listener() {
        return ctx.toggleTheme();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "ion-icon", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "section", 10)(20, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 12)(22, "div", 13)(23, "div", 14)(24, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 16)(26, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "span", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "div", 20)(31, "img", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h1", 22)(33, "span", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Roberto Carlos");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Pineda Tabarez");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p", 25)(40, "span", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Lead Front-End Developer");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 28)(45, "div", 29)(46, "span", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "10+");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "div", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 29)(52, "span", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "7+");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "div", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 29)(58, "span", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "100%");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "span", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 33)(63, "button", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomePage_Template_button_click_63_listener() {
        return ctx.scrollTo("experience");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "ion-icon", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "button", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomePage_Template_button_click_66_listener() {
        return ctx.downloadPDF();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "ion-icon", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 38)(70, "div", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "div", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "section", 41)(75, "div", 42)(76, "div", 43)(77, "span", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "h2", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 46)(82, "div", 47)(83, "p", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 49)(90, "div", 50)(91, "div", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "ion-icon", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 50)(98, "div", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "ion-icon", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 50)(105, "div", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "ion-icon", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 50)(112, "div", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "ion-icon", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "section", 56)(119, "div", 42)(120, "div", 43)(121, "span", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "h2", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](126, HomePage_div_126_Template, 19, 8, "div", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "section", 59)(128, "div", 42)(129, "div", 43)(130, "span", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "h2", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 60)(135, "div", 61)(136, "h3", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](137, "ion-icon", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](140, HomePage_div_140_Template, 8, 6, "div", 65);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 66)(142, "h3", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](143, "ion-icon", 67);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](146, HomePage_div_146_Template, 8, 6, "div", 65);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 68)(148, "h3", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](149, "ion-icon", 69);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](152, HomePage_div_152_Template, 8, 6, "div", 65);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 70)(154, "h3", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](155, "ion-icon", 71);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "div", 72);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](158, HomePage_div_158_Template, 4, 2, "div", 73);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "section", 74)(160, "div", 42)(161, "div", 43)(162, "span", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "h2", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 75)(167, "div", 76)(168, "div", 77);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "2011 \u2014 2016");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "p", 78);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, " Instituto Tecnol\u00F3gico Superior de Huetamo Michoac\u00E1n ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "div", 79)(175, "div", 77);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "p", 78);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "section", 80)(182, "div", 42)(183, "div", 43)(184, "span", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "h2", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "div", 81)(189, "a", 82)(190, "div", 83);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](191, "ion-icon", 84);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, "Email");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, "roberts.pineda.rcp@gmail.com");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "a", 85)(197, "div", 83);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](198, "ion-icon", 86);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, "+52 767 106 5422");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "a", 87)(204, "div", 83);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](205, "ion-icon", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, "rocarlos2025.github.io/micv");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "div", 89)(211, "button", 90);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomePage_Template_button_click_211_listener() {
        return ctx.downloadPDFEnglish();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](212, "ion-icon", 91);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "footer", 92)(215, "div", 93)(216, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](219, "Roberto Carlos Pineda Tabarez");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "p", 94);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](221, "Angular v19 \u00B7 Ionic 8 \u00B7 TypeScript \u00B7 SCSS");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "div", 95)(223, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](226);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("scrollEvents", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("visible", ctx.showNav);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.lang === "en" ? "About" : "Acerca");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.lang === "en" ? "Experience" : "Experiencia");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.lang === "en" ? "Skills" : "Habilidades");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.lang === "en" ? "Contact" : "Contacto");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.lang === "en" ? "ES" : "EN", " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", ctx.darkMode ? "sunny-outline" : "moon-outline");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.lang === "en" ? "Available for new opportunities" : "Disponible para nuevas oportunidades", " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.lang === "en" ? "Hello, I'm" : "Hola, soy");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.lang === "en" ? "10+ years crafting scalable architectures with Angular & TypeScript. Expert in building high-performance applications with cutting-edge technology." : "10+ a\u00F1os creando arquitecturas escalables con Angular y TypeScript. Experto en aplicaciones de alto rendimiento con tecnolog\u00EDa de vanguardia.", " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.lang === "en" ? "Years Experience" : "A\u00F1os de Experiencia");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.lang === "en" ? "Angular Specialist" : "Especialista Angular");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.lang === "en" ? "Security Compliance" : "Seguridad Veracode");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.lang === "en" ? "View My Work" : "Ver Mi Trabajo", " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.lang === "en" ? "Download CV" : "Descargar CV", " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.lang === "en" ? "Scroll to explore" : "Desliza para explorar");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.lang === "en" ? "ABOUT ME" : "SOBRE M\u00CD");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.lang === "en" ? "Building the future of web" : "Construyendo el futuro de la web", " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.lang === "en" ? "Lead Front-End Developer with 10+ years of experience in software development and 7+ years specializing in Angular and TypeScript." : "Desarrollador Front-End Lead con 10+ a\u00F1os de experiencia en desarrollo de software y 7+ a\u00F1os especializado en Angular y TypeScript.", " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.lang === "en" ? "Expert in building scalable architectures with Angular v20, utilizing Signals and RxJS for high-performance reactivity. Proven track record leading distributed teams, achieving 100% Veracode security compliance, and ensuring zero-downtime releases." : "Experto en construir arquitecturas escalables con Angular v20, utilizando Signals y RxJS para reactividad de alto rendimiento. Historial probado liderando equipos distribuidos, logrando 100% de cumplimiento de seguridad Veracode y asegurando releases sin downtime.", " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.lang === "en" ? "Dedicated to delivering high-quality web applications aligned with business growth and fast-paced release cycles." : "Dedicado a entregar aplicaciones web de alta calidad alineadas con el crecimiento del negocio y ciclos de liberaci\u00F3n \u00E1giles.", " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.lang === "en" ? "Security First" : "Seguridad Primero", " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.lang === "en" ? "100% Veracode compliance" : "100% cumplimiento Veracode", " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.lang === "en" ? "Zero Downtime" : "Cero Downtime");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.lang === "en" ? "Seamless deployments" : "Deploys sin interrupciones", " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.lang === "en" ? "Team Lead" : "L\u00EDder de Equipo");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.lang === "en" ? "Distributed teams" : "Equipos distribuidos", " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.lang === "en" ? "Atomic Design" : "Dise\u00F1o At\u00F3mico");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.lang === "en" ? "Scalable architecture" : "Arquitectura escalable", " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.lang === "en" ? "CAREER" : "CARRERA");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.lang === "en" ? "Work Experience" : "Experiencia Profesional", " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.experiences);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.lang === "en" ? "EXPERTISE" : "EXPERTISE");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.lang === "en" ? "Technical Skills" : "Habilidades T\u00E9cnicas", " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.lang === "en" ? "Languages & Frameworks" : "Lenguajes y Frameworks", " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.programmingSkills);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.lang === "en" ? "Tools & Platforms" : "Herramientas y Plataformas", " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.toolsSkills);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.lang === "en" ? "Databases" : "Bases de Datos", " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.databaseSkills);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.lang === "en" ? "Soft Skills" : "Habilidades Blandas", " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.softSkills);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.lang === "en" ? "EDUCATION" : "EDUCACI\u00D3N");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.lang === "en" ? "Academic Background" : "Formaci\u00F3n Acad\u00E9mica", " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.lang === "en" ? "Bachelor's Degree in Computer Systems Engineering" : "Ingenier\u00EDa en Sistemas Computacionales", " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.lang === "en" ? "In Progress" : "En Curso", " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.lang === "en" ? "Master's in Artificial Intelligence" : "Maestr\u00EDa en Inteligencia Artificial", " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.lang === "en" ? "National Institute of M\u00E9xico" : "Instituto Nacional de M\u00E9xico", " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.lang === "en" ? "CONTACT" : "CONTACTO");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.lang === "en" ? "Let's work together" : "Trabajemos juntos", " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.lang === "en" ? "Phone" : "Tel\u00E9fono");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.lang === "en" ? "Website" : "Sitio Web");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.lang === "en" ? "Download CV (English)" : "Descargar CV (Ingl\u00E9s)", " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.lang === "en" ? "Designed & Built by" : "Dise\u00F1ado y desarrollado por", " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\uD83C\uDDF2\uD83C\uDDFD ", ctx.lang === "en" ? "Spanish - Native" : "Espa\u00F1ol - Nativo", "");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\uD83C\uDDFA\uD83C\uDDF8 ", ctx.lang === "en" ? "English - B1" : "Ingl\u00E9s - B1", "");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonIcon],
  styles: ["\n\n\n\n\n.floating-nav[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 16px;\n  left: 50%;\n  transform: translateX(-50%) translateY(-100px);\n  z-index: 1000;\n  border-radius: var(--radius-full);\n  padding: 12px 24px;\n  opacity: 0;\n  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1);\n  max-width: 90vw;\n}\n.floating-nav.visible[_ngcontent-%COMP%] {\n  transform: translateX(-50%) translateY(0);\n  opacity: 1;\n}\n.floating-nav[_ngcontent-%COMP%]   .nav-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 24px;\n}\n.floating-nav[_ngcontent-%COMP%]   .nav-logo[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-weight: 700;\n  font-size: 1.1rem;\n  color: var(--color-accent);\n}\n.floating-nav[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n}\n.floating-nav[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--color-text-secondary);\n  text-decoration: none;\n  font-size: 0.85rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: color var(--transition-fast);\n}\n.floating-nav[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: var(--color-accent);\n}\n@media (max-width: 768px) {\n  .floating-nav[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.floating-nav[_ngcontent-%COMP%]   .nav-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n}\n.floating-nav[_ngcontent-%COMP%]   .lang-toggle[_ngcontent-%COMP%], \n.floating-nav[_ngcontent-%COMP%]   .theme-toggle[_ngcontent-%COMP%] {\n  background: var(--color-surface-elevated);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-full);\n  padding: 6px 12px;\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: var(--color-text-primary);\n  cursor: pointer;\n  transition: all var(--transition-fast);\n  display: flex;\n  align-items: center;\n}\n.floating-nav[_ngcontent-%COMP%]   .lang-toggle[_ngcontent-%COMP%]:hover, \n.floating-nav[_ngcontent-%COMP%]   .theme-toggle[_ngcontent-%COMP%]:hover {\n  background: var(--color-accent);\n  color: white;\n  border-color: var(--color-accent);\n}\n.floating-nav[_ngcontent-%COMP%]   .theme-toggle[_ngcontent-%COMP%] {\n  padding: 6px 10px;\n  font-size: 1rem;\n}\n\n.hero-section[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: var(--space-2xl);\n  overflow: hidden;\n}\n\n.hero-bg[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  overflow: hidden;\n}\n.hero-bg[_ngcontent-%COMP%]   .gradient-orb[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  filter: blur(80px);\n  opacity: 0.4;\n  animation: morphBlob 15s ease-in-out infinite;\n}\n.hero-bg[_ngcontent-%COMP%]   .gradient-orb.orb-1[_ngcontent-%COMP%] {\n  width: 600px;\n  height: 600px;\n  background: linear-gradient(135deg, #6366f1, #8b5cf6);\n  top: -20%;\n  right: -10%;\n  animation-delay: 0s;\n}\n.hero-bg[_ngcontent-%COMP%]   .gradient-orb.orb-2[_ngcontent-%COMP%] {\n  width: 500px;\n  height: 500px;\n  background: linear-gradient(135deg, #06b6d4, #3b82f6);\n  bottom: -15%;\n  left: -10%;\n  animation-delay: -5s;\n}\n.hero-bg[_ngcontent-%COMP%]   .gradient-orb.orb-3[_ngcontent-%COMP%] {\n  width: 400px;\n  height: 400px;\n  background: linear-gradient(135deg, #ec4899, #f43f5e);\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  animation-delay: -10s;\n  opacity: 0.2;\n}\n.hero-bg[_ngcontent-%COMP%]   .grid-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background-image: linear-gradient(rgba(99, 102, 241, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(99, 102, 241, 0.03) 1px, transparent 1px);\n  background-size: 60px 60px;\n}\n\n.hero-content[_ngcontent-%COMP%] {\n  position: relative;\n  text-align: center;\n  max-width: 800px;\n  z-index: 1;\n}\n\n.hero-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 16px;\n  background: var(--color-surface-glass);\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-full);\n  font-size: 0.8rem;\n  font-weight: 500;\n  color: var(--color-text-secondary);\n  margin-bottom: var(--space-xl);\n}\n.hero-badge[_ngcontent-%COMP%]   .badge-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  background: var(--color-success);\n  border-radius: 50%;\n  animation: pulse 2s ease-in-out infinite;\n}\n\n.hero-photo[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  margin-bottom: var(--space-xl);\n}\n.hero-photo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 140px;\n  height: 140px;\n  border-radius: 50%;\n  object-fit: cover;\n  position: relative;\n  z-index: 2;\n  border: 4px solid var(--color-surface);\n  box-shadow: var(--shadow-2xl);\n}\n.hero-photo[_ngcontent-%COMP%]   .photo-ring[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: -6px;\n  border-radius: 50%;\n  background: linear-gradient(135deg, var(--color-accent), #ec4899, #06b6d4);\n  animation: rotateGlow 4s linear infinite;\n  z-index: 1;\n}\n\n.hero-title[_ngcontent-%COMP%] {\n  margin-bottom: var(--space-md);\n}\n.hero-title[_ngcontent-%COMP%]   .hero-greeting[_ngcontent-%COMP%] {\n  display: block;\n  font-family: var(--font-primary);\n  font-size: 1rem;\n  font-weight: 400;\n  color: var(--color-text-secondary);\n  margin-bottom: var(--space-sm);\n}\n.hero-title[_ngcontent-%COMP%]   .hero-name[_ngcontent-%COMP%] {\n  display: block;\n  font-family: var(--font-display);\n  font-size: clamp(2.5rem, 6vw, 4rem);\n  font-weight: 700;\n  color: var(--color-text-primary);\n  line-height: 1.1;\n  letter-spacing: -0.02em;\n}\n\n.hero-subtitle[_ngcontent-%COMP%] {\n  margin-bottom: var(--space-lg);\n}\n.hero-subtitle[_ngcontent-%COMP%]   .typed-text[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: clamp(1.2rem, 3vw, 1.6rem);\n  font-weight: 500;\n  background: linear-gradient(135deg, var(--color-accent), #ec4899);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n\n.hero-description[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n  line-height: 1.7;\n  color: var(--color-text-secondary);\n  max-width: 600px;\n  margin: 0 auto var(--space-2xl);\n}\n\n.hero-stats[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: var(--space-xl);\n  margin-bottom: var(--space-2xl);\n  flex-wrap: wrap;\n}\n.hero-stats[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.hero-stats[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%]   .stat-number[_ngcontent-%COMP%] {\n  display: block;\n  font-family: var(--font-display);\n  font-size: 2rem;\n  font-weight: 700;\n  color: var(--color-text-primary);\n}\n.hero-stats[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--color-text-tertiary);\n  font-weight: 500;\n}\n.hero-stats[_ngcontent-%COMP%]   .stat-divider[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 40px;\n  background: var(--color-border-strong);\n}\n\n.hero-cta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--space-md);\n  justify-content: center;\n  flex-wrap: wrap;\n}\n\n.btn-primary[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 14px 28px;\n  background: var(--color-accent);\n  color: white;\n  border: none;\n  border-radius: var(--radius-full);\n  font-size: 0.95rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all var(--transition-base);\n  box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: var(--color-accent-dark);\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(99, 102, 241, 0.4);\n}\n.btn-primary[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\n.btn-primary.btn-large[_ngcontent-%COMP%] {\n  padding: 18px 36px;\n  font-size: 1.05rem;\n}\n\n.btn-secondary[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 14px 28px;\n  background: transparent;\n  color: var(--color-text-primary);\n  border: 1.5px solid var(--color-border-strong);\n  border-radius: var(--radius-full);\n  font-size: 0.95rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all var(--transition-base);\n}\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  border-color: var(--color-accent);\n  color: var(--color-accent);\n  transform: translateY(-2px);\n}\n\n.scroll-indicator[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 40px;\n  left: 50%;\n  transform: translateX(-50%);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n}\n.scroll-indicator[_ngcontent-%COMP%]   .mouse[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 38px;\n  border: 2px solid var(--color-text-tertiary);\n  border-radius: 12px;\n  position: relative;\n}\n.scroll-indicator[_ngcontent-%COMP%]   .mouse[_ngcontent-%COMP%]   .wheel[_ngcontent-%COMP%] {\n  width: 4px;\n  height: 8px;\n  background: var(--color-accent);\n  border-radius: var(--radius-full);\n  position: absolute;\n  top: 8px;\n  left: 50%;\n  transform: translateX(-50%);\n  animation: float 1.5s ease-in-out infinite;\n}\n.scroll-indicator[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: var(--color-text-tertiary);\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n}\n\n.section[_ngcontent-%COMP%] {\n  padding: var(--space-5xl) var(--space-xl);\n}\n@media (max-width: 768px) {\n  .section[_ngcontent-%COMP%] {\n    padding: var(--space-4xl) var(--space-md);\n  }\n}\n\n.section-container[_ngcontent-%COMP%] {\n  max-width: 1100px;\n  margin: 0 auto;\n}\n\n.section-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: var(--space-4xl);\n}\n.section-header[_ngcontent-%COMP%]   .section-tag[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 0.75rem;\n  font-weight: 700;\n  letter-spacing: 0.15em;\n  color: var(--color-accent);\n  margin-bottom: var(--space-md);\n  padding: 6px 16px;\n  background: rgba(99, 102, 241, 0.08);\n  border-radius: var(--radius-full);\n}\n.section-header[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: clamp(2rem, 4vw, 3rem);\n  font-weight: 700;\n  color: var(--color-text-primary);\n  letter-spacing: -0.02em;\n  line-height: 1.2;\n}\n\n.about-section[_ngcontent-%COMP%] {\n  background: var(--color-surface-elevated);\n}\n\n.about-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: var(--space-3xl);\n  align-items: start;\n}\n@media (max-width: 768px) {\n  .about-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: var(--space-2xl);\n  }\n}\n\n.about-text[_ngcontent-%COMP%]   .about-lead[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: 500;\n  color: var(--color-text-primary);\n  line-height: 1.6;\n  margin-bottom: var(--space-lg);\n}\n.about-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  line-height: 1.8;\n  color: var(--color-text-secondary);\n  margin-bottom: var(--space-md);\n}\n\n.about-highlights[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: var(--space-md);\n}\n.about-highlights[_ngcontent-%COMP%]   .highlight-card[_ngcontent-%COMP%] {\n  padding: var(--space-lg);\n  background: var(--color-surface);\n  border-radius: var(--radius-lg);\n  border: 1px solid var(--color-border);\n  transition: all var(--transition-base);\n}\n.about-highlights[_ngcontent-%COMP%]   .highlight-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: var(--shadow-lg);\n  border-color: var(--color-accent);\n}\n.about-highlights[_ngcontent-%COMP%]   .highlight-card[_ngcontent-%COMP%]   .highlight-icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(99, 102, 241, 0.08);\n  border-radius: var(--radius-md);\n  margin-bottom: var(--space-md);\n}\n.about-highlights[_ngcontent-%COMP%]   .highlight-card[_ngcontent-%COMP%]   .highlight-icon[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  color: var(--color-accent);\n}\n.about-highlights[_ngcontent-%COMP%]   .highlight-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: var(--color-text-primary);\n  margin-bottom: 4px;\n}\n.about-highlights[_ngcontent-%COMP%]   .highlight-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--color-text-tertiary);\n}\n\n.timeline[_ngcontent-%COMP%] {\n  position: relative;\n  padding-left: 40px;\n}\n.timeline[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  left: 15px;\n  top: 0;\n  bottom: 0;\n  width: 2px;\n  background: linear-gradient(to bottom, var(--color-accent), transparent);\n}\n\n.timeline-item[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: var(--space-2xl);\n}\n.timeline-item[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n\n.timeline-marker[_ngcontent-%COMP%] {\n  position: absolute;\n  left: -40px;\n  top: 24px;\n}\n.timeline-marker[_ngcontent-%COMP%]   .marker-dot[_ngcontent-%COMP%] {\n  width: 12px;\n  height: 12px;\n  background: var(--color-accent);\n  border-radius: 50%;\n  position: relative;\n  z-index: 2;\n  box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.2);\n}\n\n.timeline-card[_ngcontent-%COMP%] {\n  position: relative;\n  padding: var(--space-xl);\n  background: var(--color-surface);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-xl);\n  cursor: pointer;\n  transition: all var(--transition-base);\n  overflow: hidden;\n}\n.timeline-card[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  background: linear-gradient(135deg, rgba(99, 102, 241, 0.02), transparent);\n  opacity: 0;\n  transition: opacity var(--transition-base);\n}\n.timeline-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px) translateX(4px);\n  box-shadow: var(--shadow-xl);\n  border-color: rgba(99, 102, 241, 0.3);\n}\n.timeline-card[_ngcontent-%COMP%]:hover::before {\n  opacity: 1;\n}\n.timeline-card[_ngcontent-%COMP%]:hover   .card-arrow[_ngcontent-%COMP%] {\n  transform: translateX(4px);\n  opacity: 1;\n}\n.timeline-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: var(--space-md);\n}\n.timeline-card[_ngcontent-%COMP%]   .card-period[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: var(--color-accent);\n  letter-spacing: 0.05em;\n}\n.timeline-card[_ngcontent-%COMP%]   .card-company-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 28px;\n  opacity: 0.7;\n  filter: grayscale(30%);\n}\n.timeline-card[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: var(--color-text-primary);\n  margin-bottom: 4px;\n}\n.timeline-card[_ngcontent-%COMP%]   .card-company[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 500;\n  color: var(--color-text-secondary);\n  margin-bottom: var(--space-md);\n}\n.timeline-card[_ngcontent-%COMP%]   .card-description[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  line-height: 1.6;\n  color: var(--color-text-secondary);\n  margin-bottom: var(--space-md);\n}\n.timeline-card[_ngcontent-%COMP%]   .card-tags[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.timeline-card[_ngcontent-%COMP%]   .card-tags[_ngcontent-%COMP%]   .tag[_ngcontent-%COMP%] {\n  padding: 4px 10px;\n  background: rgba(99, 102, 241, 0.06);\n  border: 1px solid rgba(99, 102, 241, 0.12);\n  border-radius: var(--radius-full);\n  font-size: 0.72rem;\n  font-weight: 500;\n  color: var(--color-accent);\n}\n.timeline-card[_ngcontent-%COMP%]   .card-arrow[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 24px;\n  top: 50%;\n  transform: translateX(0) translateY(-50%);\n  opacity: 0;\n  transition: all var(--transition-base);\n  color: var(--color-accent);\n  font-size: 1.4rem;\n}\n\n.skills-section[_ngcontent-%COMP%] {\n  background: var(--color-surface-elevated);\n}\n\n.skills-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: var(--space-2xl);\n}\n@media (max-width: 768px) {\n  .skills-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n\n.skill-category[_ngcontent-%COMP%] {\n  padding: var(--space-xl);\n  background: var(--color-surface);\n  border-radius: var(--radius-xl);\n  border: 1px solid var(--color-border);\n}\n.skill-category[_ngcontent-%COMP%]   .category-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-family: var(--font-display);\n  font-size: 1.1rem;\n  font-weight: 600;\n  color: var(--color-text-primary);\n  margin-bottom: var(--space-xl);\n}\n.skill-category[_ngcontent-%COMP%]   .category-title[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  color: var(--color-accent);\n}\n\n.skill-bars[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-md);\n}\n\n.skill-bar-item[_ngcontent-%COMP%]   .skill-info[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 6px;\n}\n.skill-bar-item[_ngcontent-%COMP%]   .skill-info[_ngcontent-%COMP%]   .skill-name[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 500;\n  color: var(--color-text-primary);\n}\n.skill-bar-item[_ngcontent-%COMP%]   .skill-info[_ngcontent-%COMP%]   .skill-level[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: var(--color-accent);\n}\n.skill-bar-item[_ngcontent-%COMP%]   .skill-bar[_ngcontent-%COMP%] {\n  height: 6px;\n  background: var(--color-surface-elevated);\n  border-radius: var(--radius-full);\n  overflow: hidden;\n}\n.skill-bar-item[_ngcontent-%COMP%]   .skill-bar[_ngcontent-%COMP%]   .skill-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background: linear-gradient(90deg, var(--color-accent), var(--color-accent-light));\n  border-radius: var(--radius-full);\n  transition: width 1.5s cubic-bezier(0.4, 0, 0.2, 1);\n  transition-delay: var(--delay, 0s);\n}\n\n.soft-skills-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: var(--space-md);\n}\n.soft-skills-grid[_ngcontent-%COMP%]   .soft-skill[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px;\n  background: var(--color-surface-elevated);\n  border-radius: var(--radius-md);\n  transition: all var(--transition-fast);\n}\n.soft-skills-grid[_ngcontent-%COMP%]   .soft-skill[_ngcontent-%COMP%]:hover {\n  background: rgba(99, 102, 241, 0.06);\n  transform: translateX(4px);\n}\n.soft-skills-grid[_ngcontent-%COMP%]   .soft-skill[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  color: var(--color-accent);\n}\n.soft-skills-grid[_ngcontent-%COMP%]   .soft-skill[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  font-weight: 500;\n  color: var(--color-text-secondary);\n}\n\n.education-cards[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: var(--space-xl);\n}\n@media (max-width: 768px) {\n  .education-cards[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n\n.edu-card[_ngcontent-%COMP%] {\n  padding: var(--space-xl);\n  background: var(--color-surface);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-xl);\n  transition: all var(--transition-base);\n}\n.edu-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: var(--shadow-lg);\n  border-color: var(--color-accent);\n}\n.edu-card[_ngcontent-%COMP%]   .edu-year[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: var(--color-accent);\n  margin-bottom: var(--space-md);\n  letter-spacing: 0.05em;\n}\n.edu-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 1.15rem;\n  font-weight: 600;\n  color: var(--color-text-primary);\n  margin-bottom: var(--space-sm);\n}\n.edu-card[_ngcontent-%COMP%]   .edu-school[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: var(--color-text-secondary);\n}\n\n.contact-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: var(--space-xl);\n  margin-bottom: var(--space-2xl);\n}\n@media (max-width: 768px) {\n  .contact-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n\n.contact-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: var(--space-2xl) var(--space-xl);\n  background: var(--color-surface-elevated);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-xl);\n  text-decoration: none;\n  transition: all var(--transition-base);\n}\n.contact-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-6px);\n  box-shadow: var(--shadow-xl);\n  border-color: var(--color-accent);\n}\n.contact-card[_ngcontent-%COMP%]:hover   .contact-icon[_ngcontent-%COMP%] {\n  background: var(--color-accent);\n}\n.contact-card[_ngcontent-%COMP%]:hover   .contact-icon[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: white;\n}\n.contact-card[_ngcontent-%COMP%]   .contact-icon[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(99, 102, 241, 0.08);\n  border-radius: var(--radius-lg);\n  margin-bottom: var(--space-md);\n  transition: all var(--transition-base);\n}\n.contact-card[_ngcontent-%COMP%]   .contact-icon[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  color: var(--color-accent);\n  transition: color var(--transition-fast);\n}\n.contact-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: var(--color-text-primary);\n  margin-bottom: 4px;\n}\n.contact-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: var(--color-text-secondary);\n  text-align: center;\n}\n\n.download-section[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.footer[_ngcontent-%COMP%] {\n  padding: var(--space-3xl) var(--space-xl);\n  text-align: center;\n  border-top: 1px solid var(--color-border);\n}\n.footer[_ngcontent-%COMP%]   .footer-content[_ngcontent-%COMP%] {\n  max-width: 600px;\n  margin: 0 auto;\n}\n.footer[_ngcontent-%COMP%]   .footer-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: var(--color-text-secondary);\n  margin-bottom: var(--space-sm);\n}\n.footer[_ngcontent-%COMP%]   .footer-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--color-text-primary);\n}\n.footer[_ngcontent-%COMP%]   .footer-content[_ngcontent-%COMP%]   .footer-tech[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--color-text-tertiary);\n  letter-spacing: 0.05em;\n}\n.footer[_ngcontent-%COMP%]   .footer-content[_ngcontent-%COMP%]   .footer-languages[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: var(--space-lg);\n  margin-top: var(--space-md);\n}\n.footer[_ngcontent-%COMP%]   .footer-content[_ngcontent-%COMP%]   .footer-languages[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--color-text-tertiary);\n}\n\n@media (max-width: 480px) {\n  .hero-section[_ngcontent-%COMP%] {\n    padding: var(--space-xl) var(--space-md);\n    min-height: 100vh;\n  }\n  .hero-photo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 110px;\n    height: 110px;\n  }\n  .hero-title[_ngcontent-%COMP%]   .hero-name[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n  .hero-stats[_ngcontent-%COMP%] {\n    gap: var(--space-md);\n  }\n  .hero-stats[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%]   .stat-number[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n  .hero-stats[_ngcontent-%COMP%]   .stat-divider[_ngcontent-%COMP%] {\n    height: 30px;\n  }\n  .hero-cta[_ngcontent-%COMP%] {\n    flex-direction: column;\n    width: 100%;\n  }\n  .hero-cta[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%], \n   .hero-cta[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n  .scroll-indicator[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .section[_ngcontent-%COMP%] {\n    padding: var(--space-3xl) var(--space-md);\n  }\n  .section-header[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n    font-size: 1.6rem;\n  }\n  .timeline[_ngcontent-%COMP%] {\n    padding-left: 30px;\n  }\n  .timeline[_ngcontent-%COMP%]::before {\n    left: 10px;\n  }\n  .timeline-marker[_ngcontent-%COMP%] {\n    left: -30px;\n  }\n  .timeline-card[_ngcontent-%COMP%] {\n    padding: var(--space-lg);\n  }\n  .timeline-card[_ngcontent-%COMP%]   .card-arrow[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .about-highlights[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .education-cards[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .contact-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .soft-skills-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@media (min-width: 481px) and (max-width: 768px) {\n  .hero-section[_ngcontent-%COMP%] {\n    padding: var(--space-2xl) var(--space-lg);\n  }\n  .hero-cta[_ngcontent-%COMP%] {\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: center;\n  }\n  .about-highlights[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n@supports (padding: env(safe-area-inset-top)) {\n  .floating-nav[_ngcontent-%COMP%] {\n    top: calc(16px + env(safe-area-inset-top));\n  }\n  .hero-section[_ngcontent-%COMP%] {\n    padding-top: calc(var(--space-2xl) + env(safe-area-inset-top));\n  }\n  .footer[_ngcontent-%COMP%] {\n    padding-bottom: calc(var(--space-3xl) + env(safe-area-inset-bottom));\n  }\n}\n.plt-capacitor[_nghost-%COMP%]   .hero-section[_ngcontent-%COMP%], .plt-capacitor   [_nghost-%COMP%]   .hero-section[_ngcontent-%COMP%] {\n  padding-top: calc(var(--space-2xl) + 44px);\n}\n.plt-capacitor[_nghost-%COMP%]   .floating-nav[_ngcontent-%COMP%], .plt-capacitor   [_nghost-%COMP%]   .floating-nav[_ngcontent-%COMP%] {\n  top: 60px;\n}\n\n@media (orientation: landscape) and (max-height: 500px) {\n  .hero-section[_ngcontent-%COMP%] {\n    min-height: auto;\n    padding: var(--space-xl);\n  }\n  .hero-photo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 80px;\n    height: 80px;\n  }\n  .hero-stats[_ngcontent-%COMP%] {\n    margin-bottom: var(--space-md);\n  }\n  .scroll-indicator[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O2lEQUFBO0FBTUE7RUFDRSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSw4Q0FBQTtFQUNBLGFBQUE7RUFDQSxpQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGtHQUNFO0VBRUYsZUFBQTtBQUhGO0FBS0U7RUFDRSx5Q0FBQTtFQUNBLFVBQUE7QUFISjtBQU1FO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQUpKO0FBT0U7RUFDRSxnQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQkFBQTtBQUxKO0FBUUU7RUFDRSxhQUFBO0VBQ0EsU0FBQTtBQU5KO0FBUUk7RUFDRSxrQ0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx3Q0FBQTtBQU5OO0FBUU07RUFDRSwwQkFBQTtBQU5SO0FBVUk7RUFqQkY7SUFrQkksYUFBQTtFQVBKO0FBQ0Y7QUFVRTtFQUNFLGFBQUE7RUFDQSxRQUFBO0VBQ0EsbUJBQUE7QUFSSjtBQVdFOztFQUVFLHlDQUFBO0VBQ0EscUNBQUE7RUFDQSxpQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLHNDQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBVEo7QUFXSTs7RUFDRSwrQkFBQTtFQUNBLFlBQUE7RUFDQSxpQ0FBQTtBQVJOO0FBWUU7RUFDRSxpQkFBQTtFQUNBLGVBQUE7QUFWSjs7QUFlQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQVpGOztBQWVBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7QUFaRjtBQWNFO0VBQ0Usa0JB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LFlBQUE7RUFwSUY7RUF1SUE7SUFDRSw4QkFBQTtFQXJJRjtFQXdJQTtJQUNFLGFBQUE7RUF0SUY7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgIFBSRU1JVU0gUE9SVEZPTElPIFNUWUxFU1xyXG4gICBBcHBsZS9TYW1zdW5nLWluc3BpcmVkIERlc2lnbiBTeXN0ZW1cclxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbi8vID09PT09PT09PT09PSBGTE9BVElORyBOQVYgPT09PT09PT09PT09XHJcbi5mbG9hdGluZy1uYXYge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDE2cHg7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC0xMDBweCk7XHJcbiAgei1pbmRleDogMTAwMDtcclxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtZnVsbCk7XHJcbiAgcGFkZGluZzogMTJweCAyNHB4O1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgdHJhbnNpdGlvbjpcclxuICAgIHRyYW5zZm9ybSAwLjVzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSksXHJcbiAgICBvcGFjaXR5IDAuNXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcclxuICBtYXgtd2lkdGg6IDkwdnc7XHJcblxyXG4gICYudmlzaWJsZSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgwKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG5cclxuICAubmF2LWNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDI0cHg7XHJcbiAgfVxyXG5cclxuICAubmF2LWxvZ28ge1xyXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtZGlzcGxheSk7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItYWNjZW50KTtcclxuICB9XHJcblxyXG4gIC5uYXYtbGlua3Mge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGdhcDogMjBweDtcclxuXHJcbiAgICBhIHtcclxuICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtc2Vjb25kYXJ5KTtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICBmb250LXNpemU6IDAuODVyZW07XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgdHJhbnNpdGlvbjogY29sb3IgdmFyKC0tdHJhbnNpdGlvbi1mYXN0KTtcclxuXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1hY2NlbnQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubmF2LWFjdGlvbnMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGdhcDogOHB4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5sYW5nLXRvZ2dsZSxcclxuICAudGhlbWUtdG9nZ2xlIHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXN1cmZhY2UtZWxldmF0ZWQpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3ItYm9yZGVyKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1mdWxsKTtcclxuICAgIHBhZGRpbmc6IDZweCAxMnB4O1xyXG4gICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtcHJpbWFyeSk7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgdmFyKC0tdHJhbnNpdGlvbi1mYXN0KTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1hY2NlbnQpO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tY29sb3ItYWNjZW50KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC50aGVtZS10b2dnbGUge1xyXG4gICAgcGFkZGluZzogNnB4IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgfVxyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT0gSEVSTyBTRUNUSU9OID09PT09PT09PT09PVxyXG4uaGVyby1zZWN0aW9uIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcGFkZGluZzogdmFyKC0tc3BhY2UtMnhsKTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uaGVyby1iZyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGluc2V0OiAwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gIC5ncmFkaWVudC1vcmIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgZmlsdGVyOiBibHVyKDgwcHgpO1xyXG4gICAgb3BhY2l0eTogMC40O1xyXG4gICAgYW5pbWF0aW9uOiBtb3JwaEJsb2IgMTVzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xyXG5cclxuICAgICYub3JiLTEge1xyXG4gICAgICB3aWR0aDogNjAwcHg7XHJcbiAgICAgIGhlaWdodDogNjAwcHg7XHJcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2MzY2ZjEsICM4YjVjZjYpO1xyXG4gICAgICB0b3A6IC0yMCU7XHJcbiAgICAgIHJpZ2h0OiAtMTAlO1xyXG4gICAgICBhbmltYXRpb24tZGVsYXk6IDBzO1xyXG4gICAgfVxyXG5cclxuICAgICYub3JiLTIge1xyXG4gICAgICB3aWR0aDogNTAwcHg7XHJcbiAgICAgIGhlaWdodDogNTAwcHg7XHJcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwNmI2ZDQsICMzYjgyZjYpO1xyXG4gICAgICBib3R0b206IC0xNSU7XHJcbiAgICAgIGxlZnQ6IC0xMCU7XHJcbiAgICAgIGFuaW1hdGlvbi1kZWxheTogLTVzO1xyXG4gICAgfVxyXG5cclxuICAgICYub3JiLTMge1xyXG4gICAgICB3aWR0aDogNDAwcHg7XHJcbiAgICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNlYzQ4OTksICNmNDNmNWUpO1xyXG4gICAgICB0b3A6IDUwJTtcclxuICAgICAgbGVmdDogNTAlO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgYW5pbWF0aW9uLWRlbGF5OiAtMTBzO1xyXG4gICAgICBvcGFjaXR5OiAwLjI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuZ3JpZC1vdmVybGF5IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGluc2V0OiAwO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTpcclxuICAgICAgbGluZWFyLWdyYWRpZW50KHJnYmEoOTksIDEwMiwgMjQxLCAwLjAzKSAxcHgsIHRyYW5zcGFyZW50IDFweCksXHJcbiAgICAgIGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSg5OSwgMTAyLCAyNDEsIDAuMDMpIDFweCwgdHJhbnNwYXJlbnQgMXB4KTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogNjBweCA2MHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmhlcm8tY29udGVudCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXgtd2lkdGg6IDgwMHB4O1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi5oZXJvLWJhZGdlIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogOHB4O1xyXG4gIHBhZGRpbmc6IDhweCAxNnB4O1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXN1cmZhY2UtZ2xhc3MpO1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvci1ib3JkZXIpO1xyXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1mdWxsKTtcclxuICBmb250LXNpemU6IDAuOHJlbTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LXNlY29uZGFyeSk7XHJcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc3BhY2UteGwpO1xyXG5cclxuICAuYmFkZ2UtZG90IHtcclxuICAgIHdpZHRoOiA4cHg7XHJcbiAgICBoZWlnaHQ6IDhweDtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXN1Y2Nlc3MpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYW5pbWF0aW9uOiBwdWxzZSAycyBlYXNlLWluLW91dCBpbmZpbml0ZTtcclxuICB9XHJcbn1cclxuXHJcbi5oZXJvLXBob3RvIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbi1ib3R0b206IHZhcigtLXNwYWNlLXhsKTtcclxuXHJcbiAgaW1nIHtcclxuICAgIHdpZHRoOiAxNDBweDtcclxuICAgIGhlaWdodDogMTQwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICBib3JkZXI6IDRweCBzb2xpZCB2YXIoLS1jb2xvci1zdXJmYWNlKTtcclxuICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy0yeGwpO1xyXG4gIH1cclxuXHJcbiAgLnBob3RvLXJpbmcge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgaW5zZXQ6IC02cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCB2YXIoLS1jb2xvci1hY2NlbnQpLCAjZWM0ODk5LCAjMDZiNmQ0KTtcclxuICAgIGFuaW1hdGlvbjogcm90YXRlR2xvdyA0cyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gIH1cclxufVxyXG5cclxuLmhlcm8tdGl0bGUge1xyXG4gIG1hcmdpbi1ib3R0b206IHZhcigtLXNwYWNlLW1kKTtcclxuXHJcbiAgLmhlcm8tZ3JlZXRpbmcge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1wcmltYXJ5KTtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1zZWNvbmRhcnkpO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc3BhY2Utc20pO1xyXG4gIH1cclxuXHJcbiAgLmhlcm8tbmFtZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWRpc3BsYXkpO1xyXG4gICAgZm9udC1zaXplOiBjbGFtcCgyLjVyZW0sIDZ2dywgNHJlbSk7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtcHJpbWFyeSk7XHJcbiAgICBsaW5lLWhlaWdodDogMS4xO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjAyZW07XHJcbiAgfVxyXG59XHJcblxyXG4uaGVyby1zdWJ0aXRsZSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc3BhY2UtbGcpO1xyXG5cclxuICAudHlwZWQtdGV4dCB7XHJcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1kaXNwbGF5KTtcclxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMS4ycmVtLCAzdncsIDEuNnJlbSk7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgdmFyKC0tY29sb3ItYWNjZW50KSwgI2VjNDg5OSk7XHJcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuICB9XHJcbn1cclxuXHJcbi5oZXJvLWRlc2NyaXB0aW9uIHtcclxuICBmb250LXNpemU6IDEuMDVyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDEuNztcclxuICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1zZWNvbmRhcnkpO1xyXG4gIG1heC13aWR0aDogNjAwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG8gdmFyKC0tc3BhY2UtMnhsKTtcclxufVxyXG5cclxuLmhlcm8tc3RhdHMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBnYXA6IHZhcigtLXNwYWNlLXhsKTtcclxuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zcGFjZS0yeGwpO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuXHJcbiAgLnN0YXQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgIC5zdGF0LW51bWJlciB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1kaXNwbGF5KTtcclxuICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1wcmltYXJ5KTtcclxuICAgIH1cclxuXHJcbiAgICAuc3RhdC1sYWJlbCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC10ZXJ0aWFyeSk7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuc3RhdC1kaXZpZGVyIHtcclxuICAgIHdpZHRoOiAxcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1ib3JkZXItc3Ryb25nKTtcclxuICB9XHJcbn1cclxuXHJcbi5oZXJvLWN0YSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IHZhcigtLXNwYWNlLW1kKTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbi5idG4tcHJpbWFyeSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDhweDtcclxuICBwYWRkaW5nOiAxNHB4IDI4cHg7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItYWNjZW50KTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1mdWxsKTtcclxuICBmb250LXNpemU6IDAuOTVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYWxsIHZhcigtLXRyYW5zaXRpb24tYmFzZSk7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggMTVweCByZ2JhKDk5LCAxMDIsIDI0MSwgMC4zKTtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1hY2NlbnQtZGFyayk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XHJcbiAgICBib3gtc2hhZG93OiAwIDhweCAyNXB4IHJnYmEoOTksIDEwMiwgMjQxLCAwLjQpO1xyXG4gIH1cclxuXHJcbiAgJjphY3RpdmUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gIH1cclxuXHJcbiAgJi5idG4tbGFyZ2Uge1xyXG4gICAgcGFkZGluZzogMThweCAzNnB4O1xyXG4gICAgZm9udC1zaXplOiAxLjA1cmVtO1xyXG4gIH1cclxufVxyXG5cclxuLmJ0bi1zZWNvbmRhcnkge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiA4cHg7XHJcbiAgcGFkZGluZzogMTRweCAyOHB4O1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LXByaW1hcnkpO1xyXG4gIGJvcmRlcjogMS41cHggc29saWQgdmFyKC0tY29sb3ItYm9yZGVyLXN0cm9uZyk7XHJcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLWZ1bGwpO1xyXG4gIGZvbnQtc2l6ZTogMC45NXJlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiBhbGwgdmFyKC0tdHJhbnNpdGlvbi1iYXNlKTtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLWFjY2VudCk7XHJcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItYWNjZW50KTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcclxuICB9XHJcbn1cclxuXHJcbi5zY3JvbGwtaW5kaWNhdG9yIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiA0MHB4O1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiA4cHg7XHJcblxyXG4gIC5tb3VzZSB7XHJcbiAgICB3aWR0aDogMjRweDtcclxuICAgIGhlaWdodDogMzhweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNvbG9yLXRleHQtdGVydGlhcnkpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAud2hlZWwge1xyXG4gICAgICB3aWR0aDogNHB4O1xyXG4gICAgICBoZWlnaHQ6IDhweDtcclxuICAgICAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItYWNjZW50KTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLWZ1bGwpO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogOHB4O1xyXG4gICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgICAgYW5pbWF0aW9uOiBmbG9hdCAxLjVzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3BhbiB7XHJcbiAgICBmb250LXNpemU6IDAuN3JlbTtcclxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LXRlcnRpYXJ5KTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgfVxyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT0gU0VDVElPTiBCQVNFID09PT09PT09PT09PVxyXG4uc2VjdGlvbiB7XHJcbiAgcGFkZGluZzogdmFyKC0tc3BhY2UtNXhsKSB2YXIoLS1zcGFjZS14bCk7XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgcGFkZGluZzogdmFyKC0tc3BhY2UtNHhsKSB2YXIoLS1zcGFjZS1tZCk7XHJcbiAgfVxyXG59XHJcblxyXG4uc2VjdGlvbi1jb250YWluZXIge1xyXG4gIG1heC13aWR0aDogMTEwMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4uc2VjdGlvbi1oZWFkZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zcGFjZS00eGwpO1xyXG5cclxuICAuc2VjdGlvbi10YWcge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjE1ZW07XHJcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItYWNjZW50KTtcclxuICAgIG1hcmdpbi1ib3R0b206IHZhcigtLXNwYWNlLW1kKTtcclxuICAgIHBhZGRpbmc6IDZweCAxNnB4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSg5OSwgMTAyLCAyNDEsIDAuMDgpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLWZ1bGwpO1xyXG4gIH1cclxuXHJcbiAgLnNlY3Rpb24tdGl0bGUge1xyXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtZGlzcGxheSk7XHJcbiAgICBmb250LXNpemU6IGNsYW1wKDJyZW0sIDR2dywgM3JlbSk7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtcHJpbWFyeSk7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMDJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgfVxyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT0gQUJPVVQgU0VDVElPTiA9PT09PT09PT09PT1cclxuLmFib3V0LXNlY3Rpb24ge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXN1cmZhY2UtZWxldmF0ZWQpO1xyXG59XHJcblxyXG4uYWJvdXQtZ3JpZCB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XHJcbiAgZ2FwOiB2YXIoLS1zcGFjZS0zeGwpO1xyXG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgIGdhcDogdmFyKC0tc3BhY2UtMnhsKTtcclxuICB9XHJcbn1cclxuXHJcbi5hYm91dC10ZXh0IHtcclxuICAuYWJvdXQtbGVhZCB7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1wcmltYXJ5KTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbiAgICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zcGFjZS1sZyk7XHJcbiAgfVxyXG5cclxuICBwIHtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjg7XHJcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1zZWNvbmRhcnkpO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc3BhY2UtbWQpO1xyXG4gIH1cclxufVxyXG5cclxuLmFib3V0LWhpZ2hsaWdodHMge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xyXG4gIGdhcDogdmFyKC0tc3BhY2UtbWQpO1xyXG5cclxuICAuaGlnaGxpZ2h0LWNhcmQge1xyXG4gICAgcGFkZGluZzogdmFyKC0tc3BhY2UtbGcpO1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tY29sb3Itc3VyZmFjZSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtbGcpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3ItYm9yZGVyKTtcclxuICAgIHRyYW5zaXRpb246IGFsbCB2YXIoLS10cmFuc2l0aW9uLWJhc2UpO1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTRweCk7XHJcbiAgICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1sZyk7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tY29sb3ItYWNjZW50KTtcclxuICAgIH1cclxuXHJcbiAgICAuaGlnaGxpZ2h0LWljb24ge1xyXG4gICAgICB3aWR0aDogNDRweDtcclxuICAgICAgaGVpZ2h0OiA0NHB4O1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgYmFja2dyb3VuZDogcmdiYSg5OSwgMTAyLCAyNDEsIDAuMDgpO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtbWQpO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zcGFjZS1tZCk7XHJcblxyXG4gICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLWFjY2VudCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBoNCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1wcmltYXJ5KTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG4gICAgfVxyXG5cclxuICAgIHAge1xyXG4gICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtdGVydGlhcnkpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gPT09PT09PT09PT09IEVYUEVSSUVOQ0UgU0VDVElPTiA9PT09PT09PT09PT1cclxuLnRpbWVsaW5lIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcGFkZGluZy1sZWZ0OiA0MHB4O1xyXG5cclxuICAmOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDE1cHg7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICB3aWR0aDogMnB4O1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgdmFyKC0tY29sb3ItYWNjZW50KSwgdHJhbnNwYXJlbnQpO1xyXG4gIH1cclxufVxyXG5cclxuLnRpbWVsaW5lLWl0ZW0ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zcGFjZS0yeGwpO1xyXG5cclxuICAmOmxhc3QtY2hpbGQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICB9XHJcbn1cclxuXHJcbi50aW1lbGluZS1tYXJrZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAtNDBweDtcclxuICB0b3A6IDI0cHg7XHJcblxyXG4gIC5tYXJrZXItZG90IHtcclxuICAgIHdpZHRoOiAxMnB4O1xyXG4gICAgaGVpZ2h0OiAxMnB4O1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItYWNjZW50KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMCA0cHggcmdiYSg5OSwgMTAyLCAyNDEsIDAuMik7XHJcbiAgfVxyXG59XHJcblxyXG4udGltZWxpbmUtY2FyZCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNlLXhsKTtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1zdXJmYWNlKTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvci1ib3JkZXIpO1xyXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy14bCk7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IGFsbCB2YXIoLS10cmFuc2l0aW9uLWJhc2UpO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICY6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgaW5zZXQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDk5LCAxMDIsIDI0MSwgMC4wMiksIHRyYW5zcGFyZW50KTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IHZhcigtLXRyYW5zaXRpb24tYmFzZSk7XHJcbiAgfVxyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNHB4KSB0cmFuc2xhdGVYKDRweCk7XHJcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3cteGwpO1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDk5LCAxMDIsIDI0MSwgMC4zKTtcclxuXHJcbiAgICAmOjpiZWZvcmUge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkLWFycm93IHtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDRweCk7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuY2FyZC1oZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zcGFjZS1tZCk7XHJcbiAgfVxyXG5cclxuICAuY2FyZC1wZXJpb2Qge1xyXG4gICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWFjY2VudCk7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xyXG4gIH1cclxuXHJcbiAgLmNhcmQtY29tcGFueS1sb2dvIGltZyB7XHJcbiAgICBoZWlnaHQ6IDI4cHg7XHJcbiAgICBvcGFjaXR5OiAwLjc7XHJcbiAgICBmaWx0ZXI6IGdyYXlzY2FsZSgzMCUpO1xyXG4gIH1cclxuXHJcbiAgLmNhcmQtdGl0bGUge1xyXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtZGlzcGxheSk7XHJcbiAgICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtcHJpbWFyeSk7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbiAgfVxyXG5cclxuICAuY2FyZC1jb21wYW55IHtcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LXNlY29uZGFyeSk7XHJcbiAgICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zcGFjZS1tZCk7XHJcbiAgfVxyXG5cclxuICAuY2FyZC1kZXNjcmlwdGlvbiB7XHJcbiAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1zZWNvbmRhcnkpO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc3BhY2UtbWQpO1xyXG4gIH1cclxuXHJcbiAgLmNhcmQtdGFncyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgZ2FwOiA4cHg7XHJcblxyXG4gICAgLnRhZyB7XHJcbiAgICAgIHBhZGRpbmc6IDRweCAxMHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDk5LCAxMDIsIDI0MSwgMC4wNik7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoOTksIDEwMiwgMjQxLCAwLjEyKTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLWZ1bGwpO1xyXG4gICAgICBmb250LXNpemU6IDAuNzJyZW07XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1hY2NlbnQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmNhcmQtYXJyb3cge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDI0cHg7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKSB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zaXRpb246IGFsbCB2YXIoLS10cmFuc2l0aW9uLWJhc2UpO1xyXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWFjY2VudCk7XHJcbiAgICBmb250LXNpemU6IDEuNHJlbTtcclxuICB9XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PSBTS0lMTFMgU0VDVElPTiA9PT09PT09PT09PT1cclxuLnNraWxscy1zZWN0aW9uIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1zdXJmYWNlLWVsZXZhdGVkKTtcclxufVxyXG5cclxuLnNraWxscy1ncmlkIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuICBnYXA6IHZhcigtLXNwYWNlLTJ4bCk7XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgfVxyXG59XHJcblxyXG4uc2tpbGwtY2F0ZWdvcnkge1xyXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNlLXhsKTtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1zdXJmYWNlKTtcclxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMteGwpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yLWJvcmRlcik7XHJcblxyXG4gIC5jYXRlZ29yeS10aXRsZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMTBweDtcclxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWRpc3BsYXkpO1xyXG4gICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtcHJpbWFyeSk7XHJcbiAgICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zcGFjZS14bCk7XHJcblxyXG4gICAgaW9uLWljb24ge1xyXG4gICAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICAgICAgY29sb3I6IHZhcigtLWNvbG9yLWFjY2VudCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uc2tpbGwtYmFycyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogdmFyKC0tc3BhY2UtbWQpO1xyXG59XHJcblxyXG4uc2tpbGwtYmFyLWl0ZW0ge1xyXG4gIC5za2lsbC1pbmZvIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBtYXJnaW4tYm90dG9tOiA2cHg7XHJcblxyXG4gICAgLnNraWxsLW5hbWUge1xyXG4gICAgICBmb250LXNpemU6IDAuODVyZW07XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LXByaW1hcnkpO1xyXG4gICAgfVxyXG5cclxuICAgIC5za2lsbC1sZXZlbCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICBjb2xvcjogdmFyKC0tY29sb3ItYWNjZW50KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5za2lsbC1iYXIge1xyXG4gICAgaGVpZ2h0OiA2cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1zdXJmYWNlLWVsZXZhdGVkKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1mdWxsKTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICAgLnNraWxsLWZpbGwge1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgICA5MGRlZyxcclxuICAgICAgICB2YXIoLS1jb2xvci1hY2NlbnQpLFxyXG4gICAgICAgIHZhcigtLWNvbG9yLWFjY2VudC1saWdodClcclxuICAgICAgKTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLWZ1bGwpO1xyXG4gICAgICB0cmFuc2l0aW9uOiB3aWR0aCAxLjVzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XHJcbiAgICAgIHRyYW5zaXRpb24tZGVsYXk6IHZhcigtLWRlbGF5LCAwcyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uc29mdC1za2lsbHMtZ3JpZCB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XHJcbiAgZ2FwOiB2YXIoLS1zcGFjZS1tZCk7XHJcblxyXG4gIC5zb2Z0LXNraWxsIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAxMHB4O1xyXG4gICAgcGFkZGluZzogMTJweDtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXN1cmZhY2UtZWxldmF0ZWQpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLW1kKTtcclxuICAgIHRyYW5zaXRpb246IGFsbCB2YXIoLS10cmFuc2l0aW9uLWZhc3QpO1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDk5LCAxMDIsIDI0MSwgMC4wNik7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg0cHgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1pY29uIHtcclxuICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1hY2NlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHNwYW4ge1xyXG4gICAgICBmb250LXNpemU6IDAuODJyZW07XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LXNlY29uZGFyeSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT0gRURVQ0FUSU9OIFNFQ1RJT04gPT09PT09PT09PT09XHJcbi5lZHVjYXRpb24tY2FyZHMge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xyXG4gIGdhcDogdmFyKC0tc3BhY2UteGwpO1xyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gIH1cclxufVxyXG5cclxuLmVkdS1jYXJkIHtcclxuICBwYWRkaW5nOiB2YXIoLS1zcGFjZS14bCk7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3Itc3VyZmFjZSk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3ItYm9yZGVyKTtcclxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMteGwpO1xyXG4gIHRyYW5zaXRpb246IGFsbCB2YXIoLS10cmFuc2l0aW9uLWJhc2UpO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNHB4KTtcclxuICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1sZyk7XHJcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLWFjY2VudCk7XHJcbiAgfVxyXG5cclxuICAuZWR1LXllYXIge1xyXG4gICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWFjY2VudCk7XHJcbiAgICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zcGFjZS1tZCk7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xyXG4gIH1cclxuXHJcbiAgaDMge1xyXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtZGlzcGxheSk7XHJcbiAgICBmb250LXNpemU6IDEuMTVyZW07XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtcHJpbWFyeSk7XHJcbiAgICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zcGFjZS1zbSk7XHJcbiAgfVxyXG5cclxuICAuZWR1LXNjaG9vbCB7XHJcbiAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LXNlY29uZGFyeSk7XHJcbiAgfVxyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT0gQ09OVEFDVCBTRUNUSU9OID09PT09PT09PT09PVxyXG4uY29udGFjdC1ncmlkIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XHJcbiAgZ2FwOiB2YXIoLS1zcGFjZS14bCk7XHJcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc3BhY2UtMnhsKTtcclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICB9XHJcbn1cclxuXHJcbi5jb250YWN0LWNhcmQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNlLTJ4bCkgdmFyKC0tc3BhY2UteGwpO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXN1cmZhY2UtZWxldmF0ZWQpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yLWJvcmRlcik7XHJcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLXhsKTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgdHJhbnNpdGlvbjogYWxsIHZhcigtLXRyYW5zaXRpb24tYmFzZSk7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC02cHgpO1xyXG4gICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LXhsKTtcclxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tY29sb3ItYWNjZW50KTtcclxuXHJcbiAgICAuY29udGFjdC1pY29uIHtcclxuICAgICAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItYWNjZW50KTtcclxuICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmNvbnRhY3QtaWNvbiB7XHJcbiAgICB3aWR0aDogNTZweDtcclxuICAgIGhlaWdodDogNTZweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDk5LCAxMDIsIDI0MSwgMC4wOCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtbGcpO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc3BhY2UtbWQpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIHZhcigtLXRyYW5zaXRpb24tYmFzZSk7XHJcblxyXG4gICAgaW9uLWljb24ge1xyXG4gICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgY29sb3I6IHZhcigtLWNvbG9yLWFjY2VudCk7XHJcbiAgICAgIHRyYW5zaXRpb246IGNvbG9yIHZhcigtLXRyYW5zaXRpb24tZmFzdCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoNCB7XHJcbiAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1wcmltYXJ5KTtcclxuICAgIG1hcmdpbi1ib3R0b206IDRweDtcclxuICB9XHJcblxyXG4gIHAge1xyXG4gICAgZm9udC1zaXplOiAwLjgycmVtO1xyXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtc2Vjb25kYXJ5KTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbn1cclxuXHJcbi5kb3dubG9hZC1zZWN0aW9uIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PSBGT09URVIgPT09PT09PT09PT09XHJcbi5mb290ZXIge1xyXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNlLTN4bCkgdmFyKC0tc3BhY2UteGwpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tY29sb3ItYm9yZGVyKTtcclxuXHJcbiAgLmZvb3Rlci1jb250ZW50IHtcclxuICAgIG1heC13aWR0aDogNjAwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuXHJcbiAgICBwIHtcclxuICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LXNlY29uZGFyeSk7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IHZhcigtLXNwYWNlLXNtKTtcclxuXHJcbiAgICAgIHN0cm9uZyB7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtcHJpbWFyeSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZm9vdGVyLXRlY2gge1xyXG4gICAgICBmb250LXNpemU6IDAuNzVyZW07XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LXRlcnRpYXJ5KTtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcclxuICAgIH1cclxuXHJcbiAgICAuZm9vdGVyLWxhbmd1YWdlcyB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBnYXA6IHZhcigtLXNwYWNlLWxnKTtcclxuICAgICAgbWFyZ2luLXRvcDogdmFyKC0tc3BhY2UtbWQpO1xyXG5cclxuICAgICAgc3BhbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtdGVydGlhcnkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT0gUkVTUE9OU0lWRSAtIE1PQklMRSBGSVJTVCA9PT09PT09PT09PT1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gIC5oZXJvLXNlY3Rpb24ge1xyXG4gICAgcGFkZGluZzogdmFyKC0tc3BhY2UteGwpIHZhcigtLXNwYWNlLW1kKTtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIH1cclxuXHJcbiAgLmhlcm8tcGhvdG8gaW1nIHtcclxuICAgIHdpZHRoOiAxMTBweDtcclxuICAgIGhlaWdodDogMTEwcHg7XHJcbiAgfVxyXG5cclxuICAuaGVyby10aXRsZSAuaGVyby1uYW1lIHtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICB9XHJcblxyXG4gIC5oZXJvLXN0YXRzIHtcclxuICAgIGdhcDogdmFyKC0tc3BhY2UtbWQpO1xyXG5cclxuICAgIC5zdGF0IC5zdGF0LW51bWJlciB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5zdGF0LWRpdmlkZXIge1xyXG4gICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuaGVyby1jdGEge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgIC5idG4tcHJpbWFyeSxcclxuICAgIC5idG4tc2Vjb25kYXJ5IHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnNjcm9sbC1pbmRpY2F0b3Ige1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIC5zZWN0aW9uIHtcclxuICAgIHBhZGRpbmc6IHZhcigtLXNwYWNlLTN4bCkgdmFyKC0tc3BhY2UtbWQpO1xyXG4gIH1cclxuXHJcbiAgLnNlY3Rpb24taGVhZGVyIC5zZWN0aW9uLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xyXG4gIH1cclxuXHJcbiAgLnRpbWVsaW5lIHtcclxuICAgIHBhZGRpbmctbGVmdDogMzBweDtcclxuXHJcbiAgICAmOjpiZWZvcmUge1xyXG4gICAgICBsZWZ0OiAxMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnRpbWVsaW5lLW1hcmtlciB7XHJcbiAgICBsZWZ0OiAtMzBweDtcclxuICB9XHJcblxyXG4gIC50aW1lbGluZS1jYXJkIHtcclxuICAgIHBhZGRpbmc6IHZhcigtLXNwYWNlLWxnKTtcclxuXHJcbiAgICAuY2FyZC1hcnJvdyB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYWJvdXQtaGlnaGxpZ2h0cyB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICB9XHJcblxyXG4gIC5lZHVjYXRpb24tY2FyZHMge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgfVxyXG5cclxuICAuY29udGFjdC1ncmlkIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gIH1cclxuXHJcbiAgLnNvZnQtc2tpbGxzLWdyaWQge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNDgxcHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5oZXJvLXNlY3Rpb24ge1xyXG4gICAgcGFkZGluZzogdmFyKC0tc3BhY2UtMnhsKSB2YXIoLS1zcGFjZS1sZyk7XHJcbiAgfVxyXG5cclxuICAuaGVyby1jdGEge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmFib3V0LWhpZ2hsaWdodHMge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xyXG4gIH1cclxufVxyXG5cclxuLy8gU2FmZSBhcmVhIGZvciBpT1Mgbm90Y2hcclxuQHN1cHBvcnRzIChwYWRkaW5nOiBlbnYoc2FmZS1hcmVhLWluc2V0LXRvcCkpIHtcclxuICAuZmxvYXRpbmctbmF2IHtcclxuICAgIHRvcDogY2FsYygxNnB4ICsgZW52KHNhZmUtYXJlYS1pbnNldC10b3ApKTtcclxuICB9XHJcblxyXG4gIC5oZXJvLXNlY3Rpb24ge1xyXG4gICAgcGFkZGluZy10b3A6IGNhbGModmFyKC0tc3BhY2UtMnhsKSArIGVudihzYWZlLWFyZWEtaW5zZXQtdG9wKSk7XHJcbiAgfVxyXG5cclxuICAuZm9vdGVyIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLXNwYWNlLTN4bCkgKyBlbnYoc2FmZS1hcmVhLWluc2V0LWJvdHRvbSkpO1xyXG4gIH1cclxufVxyXG5cclxuLy8gQ2FwYWNpdG9yL05hdGl2ZSBhcHAgYWRqdXN0bWVudHNcclxuOmhvc3QtY29udGV4dCgucGx0LWNhcGFjaXRvcikge1xyXG4gIC5oZXJvLXNlY3Rpb24ge1xyXG4gICAgcGFkZGluZy10b3A6IGNhbGModmFyKC0tc3BhY2UtMnhsKSArIDQ0cHgpO1xyXG4gIH1cclxuXHJcbiAgLmZsb2F0aW5nLW5hdiB7XHJcbiAgICB0b3A6IGNhbGMoMTZweCArIDQ0cHgpO1xyXG4gIH1cclxufVxyXG5cclxuLy8gTGFuZHNjYXBlIG9yaWVudGF0aW9uXHJcbkBtZWRpYSAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtaGVpZ2h0OiA1MDBweCkge1xyXG4gIC5oZXJvLXNlY3Rpb24ge1xyXG4gICAgbWluLWhlaWdodDogYXV0bztcclxuICAgIHBhZGRpbmc6IHZhcigtLXNwYWNlLXhsKTtcclxuICB9XHJcblxyXG4gIC5oZXJvLXBob3RvIGltZyB7XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIGhlaWdodDogODBweDtcclxuICB9XHJcblxyXG4gIC5oZXJvLXN0YXRzIHtcclxuICAgIG1hcmdpbi1ib3R0b206IHZhcigtLXNwYWNlLW1kKTtcclxuICB9XHJcblxyXG4gIC5zY3JvbGwtaW5kaWNhdG9yIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ })

}]);
//# sourceMappingURL=5055.212ea61de0b9d2b9.js.map
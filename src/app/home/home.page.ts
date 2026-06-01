import { Component, OnInit, AfterViewInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit, AfterViewInit {
  lang: 'en' | 'es' = 'es';
  darkMode = false;
  showNav = false;

  experiences = [
    {
      id: 'minsait-telcel',
      period: '08/2025 — Presente',
      periodEn: '08/2025 — Present',
      title: 'Lead Front-End Portal Registro Biométrico',
      titleEn: 'Lead Front-End Biometric Registration Portal',
      company: 'Minsait - Telcel',
      description:
        'Configuración y lanzamiento de proyecto Angular v20 con arquitectura Atomic Design para estructura front-end escalable.',
      descriptionEn:
        'Configured and launched Angular v20 project using Atomic Design architecture for scalable front-end application structure.',
      tags: ['Angular v20', 'TypeScript', 'Signals', 'RxJS', 'Nginx'],
      logo: 'assets/empresas/telcel.png',
    },
    {
      id: 'santander-loyalty',
      period: '09/2024 — 07/2025',
      periodEn: '09/2024 — 07/2025',
      title: 'Lead Front-End - Loyalty',
      titleEn: 'Lead Front-End - Loyalty',
      company: 'Santander',
      description:
        'Configuración y lanzamiento de proyecto Angular v18, integrando UI FLAME de Santander y librerías de terceros para manejo de fechas, filtrado, paginación y búsqueda.',
      descriptionEn:
        "Configured and launched Angular v18 project, integrating Santander's UI FLAME and third-party libraries for date handling, filtering, pagination, and search.",
      tags: ['Angular v18', 'UI FLAME', 'TypeScript', 'RxJS', 'Figma'],
      logo: 'assets/empresas/santander.png',
    },
    {
      id: 'cibanco',
      period: '12/2023 — 08/2024',
      periodEn: '12/2023 — 08/2024',
      title: 'Front-End CI-Banco / Gestor Documental',
      titleEn: 'Front-End CI-Banco / Document Management',
      company: 'CI-Banco',
      description:
        'Configuración de proyecto Angular 17 con Bootstrap v5.2.3, Angular Material, crypto-js y @ngrx para gestión del estado.',
      descriptionEn:
        'Configured Angular 17 project with Bootstrap v5.2.3, Angular Material, crypto-js and @ngrx for state management.',
      tags: [
        'Angular v17',
        'Bootstrap',
        '@ngrx',
        'Angular Material',
        'crypto-js',
      ],
      logo: 'assets/empresas/CIBanco.png',
    },
    {
      id: 'axa',
      period: '03/2023 — 12/2023',
      periodEn: '03/2023 — 12/2023',
      title: 'Front-End Developer - Reportes Adhoc',
      titleEn: 'Front-End Developer - Adhoc Reports',
      company: 'AXA',
      description:
        'Migración de AngularJS a Angular v15.2.8 con Node.js 18.15.0, reemplazando JSP con componentes modernos Angular.',
      descriptionEn:
        'Migration from AngularJS to Angular v15.2.8 with Node.js 18.15.0, replacing JSP with modern Angular components.',
      tags: ['Angular v15', 'Node.js', 'Bootstrap', 'RxJS', 'MongoDB'],
      logo: 'assets/empresas/AXA.png',
    },
    {
      id: 'sgf',
      period: '10/2021 — 08/2022',
      periodEn: '10/2021 — 08/2022',
      title: 'Especialista Front End',
      titleEn: 'Mex Front End Specialist',
      company: 'Santander Global Facilities / ClictwoSell',
      description:
        'Creación de prototipos UI con Figma y Miro, desarrollo de modelos de datos con TypeScript tipado seguro, pruebas unitarias.',
      descriptionEn:
        'Created UI prototypes with Figma and Miro, developed data models with type-safe TypeScript, wrote unit tests for code quality.',
      tags: ['Angular 7-9', 'Figma', 'Google Analytics', 'iOS/Android'],
      logo: 'assets/empresas/santander.png',
    },
    {
      id: 'gft',
      period: '01/2020 — 10/2021',
      periodEn: '01/2020 — 10/2021',
      title: 'Desarrollador Front-End Senior',
      titleEn: 'Senior Front-End Developer',
      company: 'GFT México / Santander Móvil',
      description:
        'Integración de Bootstrap v5.2.3, RxJS, DataTables, Moment y FileSaver para manejo de grandes conjuntos de datos.',
      descriptionEn:
        'Integrated Bootstrap v5.2.3, RxJS, DataTables, Moment and FileSaver for large datasets and file handling.',
      tags: ['Angular 7', 'Jasmine/Karma', 'Tealium', 'RxJS'],
      logo: 'assets/empresas/santander.png',
    },
  ];

  programmingSkills = [
    { name: 'Angular', level: 97, delay: '0.1s' },
    { name: 'TypeScript', level: 95, delay: '0.2s' },
    { name: 'RxJS', level: 92, delay: '0.3s' },
    { name: 'JavaScript', level: 90, delay: '0.4s' },
    { name: 'Node.js', level: 78, delay: '0.5s' },
    { name: 'HTML5 / CSS3 / SCSS', level: 95, delay: '0.6s' },
  ];

  toolsSkills = [
    { name: 'Git / GitHub Actions', level: 90, delay: '0.1s' },
    { name: 'Figma / UI Prototyping', level: 85, delay: '0.2s' },
    { name: 'Nginx', level: 80, delay: '0.3s' },
    { name: 'npm / Build Tooling', level: 92, delay: '0.4s' },
    { name: 'Postman / Swagger', level: 88, delay: '0.5s' },
  ];

  databaseSkills = [
    { name: 'MySQL', level: 75, delay: '0.1s' },
    { name: 'MongoDB', level: 72, delay: '0.2s' },
    { name: 'Oracle', level: 68, delay: '0.3s' },
    { name: 'SQL Server', level: 70, delay: '0.4s' },
  ];

  softSkills = [
    {
      icon: 'people-outline',
      nameEn: 'Team Collaboration',
      nameEs: 'Trabajo en Equipo',
    },
    {
      icon: 'chatbubbles-outline',
      nameEn: 'Interpersonal Skills',
      nameEs: 'Habilidades Interpersonales',
    },
    {
      icon: 'timer-outline',
      nameEn: 'Respecting Timelines',
      nameEs: 'Cumplimiento de Plazos',
    },
    {
      icon: 'bulb-outline',
      nameEn: 'Problem Solving',
      nameEs: 'Resolución de Problemas',
    },
    {
      icon: 'document-text-outline',
      nameEn: 'Code Documentation',
      nameEs: 'Documentación de Código',
    },
    {
      icon: 'accessibility-outline',
      nameEn: 'Accessibility',
      nameEs: 'Accesibilidad',
    },
  ];

  private observer!: IntersectionObserver;

  constructor(
    private router: Router,
    private ngZone: NgZone,
  ) {}

  ngOnInit() {
    // Detect browser language, default to Spanish
    // Only use localStorage if user explicitly toggled language
    const userToggled = localStorage.getItem('portfolio-lang-manual');
    if (userToggled) {
      this.lang = userToggled as 'en' | 'es';
    } else {
      const browserLang =
        navigator.language || (navigator as any).userLanguage || 'es';
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
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' },
    );

    setTimeout(() => {
      document.querySelectorAll('.animate-on-scroll').forEach((el) => {
        this.observer.observe(el);
      });
    }, 100);
  }

  onScroll(event: any) {
    this.ngZone.run(() => {
      this.showNav = event.detail.scrollTop > 300;
    });
  }

  scrollTo(sectionId: string) {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
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

  navigateToDetail(id: string) {
    this.router.navigate(['/experiencia', id]);
  }

  downloadPDF() {
    const link = document.createElement('a');
    const isEnglish = this.lang === 'en';
    link.href = isEnglish
      ? 'assets/CV_Roberto_English.pdf'
      : 'assets/CV_Roberto_Español.pdf';
    link.download = isEnglish
      ? 'Roberto_Pineda_CV_2026_EN.pdf'
      : 'Roberto_Pineda_CV_2026_ES.pdf';
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

import { Component, signal } from '@angular/core';

interface Project {
  id: string;
  title: string;
  description: string;
  icon: string;
  demoUrl?: string;
  githubUrl?: string;
  backendUrl?: string;
  tags: string[];
  active?: boolean;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.html',
  standalone: true
})
export class Projects {
  // Signal de solo lectura conteniendo el listado de proyectos (Data-Driven)
  readonly projects = signal<Project[]>([
    {
      id: 'enavol',
      title: 'ENAVOL 2026 - Ecos Foundation',
      description: 'Plataforma web interactiva para la recopilación de datos y visualización de impacto, integrada con Odoo ERP. Desarrollada con Next.js (App Router) y React 19, implementando autenticación segura con sesiones del lado del servidor, paneles interactivos con gráficos estadísticos (Chart.js), animaciones fluidas y optimización de rendimiento enfocado en SEO y Core Web Vitals.',
      icon: 'fas fa-hand-holding-heart',
      demoUrl: 'https://enavol.ecosfoundation.ong/',
      tags: ['NEXT.JS', 'REACT 19', 'ZOD', 'SHADCN/UI', 'TAILWIND CSS'],
      active: true
    },
    {
      id: 'peru-tradicion',
      title: 'Tu Catalogo Web - Catálogo SaaS',
      description: 'Plataforma de comercio electrónico multi-inquilino (SaaS) con soporte multi-tenancy dinámico por ruta e inquilino. Desarrollada en Angular 20 con base de datos en tiempo real (Firebase), notificaciones reactivas (Hot Toast) y pruebas E2E automatizadas con Playwright. Co-creado con agentes de IA mediante arquitectura modular y prompts de diseño estructurados (SOLID), y validado mediante testing manual.',
      icon: 'fas fa-store',
      demoUrl: 'https://catalogoweb-22ac6.web.app/',
      tags: ['ANGULAR 20', 'FIREBASE', 'PLAYWRIGHT', 'TAILWIND CSS', 'SAAS'],
      active: true
    },
    {
      id: 'ogosi-dent',
      title: 'Ogosi Dent - Gestión de Citas (PWA)',
      description: 'Progressive Web App (PWA) de citas dentales con soporte offline y service workers. Construida sobre Angular 20 (Signals, Zoneless) y Firebase (Auth, Firestore, Storage) sin servidor. Cuenta con una arquitectura desacoplada y pruebas unitarias rápidas utilizando Vitest. Diseñada guiando agentes de IA mediante prompts de buenas prácticas y patrones limpios, y comprobada con testing exploratorio manual.',
      icon: 'fas fa-tooth',
      demoUrl: 'https://ogosi-dent.web.app/',
      tags: ['ANGULAR 20', 'FIREBASE', 'VITEST', 'PWA', 'TAILWIND CSS'],
      active: true
    }
  ]);
}

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
      description: 'Plataforma web para la visualización de datos de impacto social, integrada con servicios de Odoo ERP. Trabajé en el desarrollo y maquetación de los componentes de interfaz de usuario utilizando Next.js, React y Tailwind CSS. Me encargué de coordinar el correcto consumo de datos en el frontend y validar funcionalmente los flujos críticos (como formularios con Zod y paneles interactivos con Chart.js), asegurando entregas limpias para la aprobación del líder técnico hacia producción.',
      icon: 'fas fa-hand-holding-heart',
      demoUrl: 'https://enavol.ecosfoundation.ong/',
      tags: ['NEXT.JS', 'REACT 19', 'ZOD', 'SHADCN/UI', 'TAILWIND CSS'],
      active: true
    },
    {
      id: 'peru-tradicion',
      title: 'Tu Catalogo Web - Catálogo SaaS',
      description: 'Plataforma de comercio electrónico en formato de catálogo comercial, utilizando Angular y Firebase. Estructuré las vistas del catálogo y construí la lógica interactiva del carrito de compras. El proyecto se desarrolló bajo requerimientos modulares, donde utilicé flujos de desarrollo asistidos por IA para agilizar la escritura del código bajo buenas prácticas, asumiendo la responsabilidad total de las pruebas manuales de extremo a extremo para asegurar que el proceso de checkout no tuviera fallas.',
      icon: 'fas fa-store',
      demoUrl: 'https://catalogoweb-22ac6.web.app/',
      tags: ['ANGULAR 20', 'FIREBASE', 'PLAYWRIGHT', 'TAILWIND CSS', 'SAAS'],
      active: true
    },
    {
      id: 'ogosi-dent',
      title: 'Ogosi Dent - Gestión de Citas (PWA)',
      description: 'Aplicación web (PWA) diseñada para el control y reserva de citas odontológicas, conectada a servicios de Firebase (Auth y Firestore). Implementé la interfaz interactiva de la agenda médica y configuré las propiedades básicas de una PWA para la disponibilidad de vistas sin conexión. Validé de manera exhaustiva cada flujo modular mediante testing funcional y exploratorio manual, garantizando la consistencia de las citas registradas antes de su despliegue final.',
      icon: 'fas fa-tooth',
      demoUrl: 'https://ogosi-dent.web.app/',
      tags: ['ANGULAR 20', 'FIREBASE', 'VITEST', 'PWA', 'TAILWIND CSS'],
      active: true
    }
  ]);
}

import { Component, signal } from '@angular/core';

interface Certification {
  id: string;
  title: string;
  provider: string;
  status: string;
  statusBorderClass: string;
  statusTextClass: string;
  icon: string;
  tags: string[];
}

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.html',
  standalone: true
})
export class Certifications {
  // Signal conteniendo la lista de certificaciones para renderizado reactivo
  readonly certifications = signal<Certification[]>([
    {
      id: 'dmc-fullstack',
      title: 'Especialización en Desarrollo Web Full Stack',
      provider: 'DMC Institute',
      status: 'EN CURSO',
      statusBorderClass: 'border-yellow-800 bg-yellow-900/30',
      statusTextClass: 'text-yellow-400',
      icon: 'fas fa-laptop-code text-accent-cyan',
      tags: ['ANGULAR', 'NESTJS', 'POSTGRESQL', 'TYPESCRIPT']
    },
    {
      id: 'ecos-internship',
      title: 'Pasante Desarrollador Frontend',
      provider: 'Ecos Foundation',
      status: 'EN CURSO',
      statusBorderClass: 'border-yellow-800 bg-yellow-900/30',
      statusTextClass: 'text-yellow-400',
      icon: 'fas fa-hands-helping text-green-400',
      tags: ['NEXT.JS', 'REACT 19', 'ZOD', 'SHADCN/UI', 'TAILWIND CSS']
    }
  ]);
}

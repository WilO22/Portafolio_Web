import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActiveSectionService {
  // Writable signal privado para encapsular la mutabilidad del estado
  private readonly _activeSection = signal<string>('home');

  // Read-only signal público para prevenir mutaciones descontroladas desde componentes externos
  readonly activeSection = this._activeSection.asReadonly();

  // Canal controlado para actualizar el estado
  setActiveSection(sectionId: string): void {
    if (this._activeSection() !== sectionId) {
      this._activeSection.set(sectionId);
    }
  }
}

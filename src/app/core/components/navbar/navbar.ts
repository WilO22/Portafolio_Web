import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ActiveSectionService } from '../../services/active-section.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  standalone: true
})
export class Navbar {
  private readonly activeSectionService = inject(ActiveSectionService);
  protected readonly activeSection = this.activeSectionService.activeSection;

  // Reactive Signal to control the state of the mobile hamburger menu
  protected readonly isMenuOpen = signal(false);

  protected toggleMenu(): void {
    this.isMenuOpen.update(open => !open);
  }

  protected closeMenu(): void {
    this.isMenuOpen.set(false);
  }
}

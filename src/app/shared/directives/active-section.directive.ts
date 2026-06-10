import { Directive, ElementRef, Inject, OnInit, OnDestroy, PLATFORM_ID, inject, input } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ActiveSectionService } from '../../core/services/active-section.service';

@Directive({
  selector: '[appActiveSection]',
  standalone: true
})
export class ActiveSectionDirective implements OnInit, OnDestroy {
  private readonly el = inject(ElementRef);
  private readonly activeSectionService = inject(ActiveSectionService);
  private readonly platformId = inject(PLATFORM_ID);
  
  // Input basado en Signal para extender el comportamiento sin modificar la directiva (Open/Closed Principle)
  readonly rootMargin = input<string>('-30% 0px -60% 0px');
  
  private observer?: IntersectionObserver;

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: this.rootMargin(),
      threshold: 0
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = this.el.nativeElement.getAttribute('id');
          if (id) {
            this.activeSectionService.setActiveSection(id);
          }
        }
      });
    }, options);

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}

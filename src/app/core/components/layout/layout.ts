import { Component } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { Hero } from '../../../features/hero/hero';
import { About } from '../../../features/about/about';
import { Stack } from '../../../features/stack/stack';
import { Certifications } from '../../../features/certifications/certifications';
import { Projects } from '../../../features/projects/projects';
import { Contact } from '../../../features/contact/contact';
import { ActiveSectionDirective } from '../../../shared/directives/active-section.directive';

@Component({
  selector: 'app-layout',
  imports: [
    Navbar,
    Hero,
    About,
    Stack,
    Certifications,
    Projects,
    Contact,
    ActiveSectionDirective
  ],
  templateUrl: './layout.html',
  standalone: true
})
export class Layout {}

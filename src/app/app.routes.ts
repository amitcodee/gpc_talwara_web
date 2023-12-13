import { Routes } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HeroSectionComponent } from './home/hero-section/hero-section.component';

export const routes: Routes = [
  {
    path: '',
   component: HeroSectionComponent
  },
  {
    path: 'contact',
    component: ContactUsComponent,
  },
];

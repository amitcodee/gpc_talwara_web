import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet,RouterLink } from '@angular/router';
import { HeaderComponent } from "./header-footer/header/header.component";

import { HeroSectionComponent } from "./home/hero-section/hero-section.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet,RouterLink,HeaderComponent, HeroSectionComponent, ]
})
export class AppComponent {
  title = 'Gpc Talwara';
}

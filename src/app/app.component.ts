import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header-footer/header/header.component";

import { HeroSectionComponent } from "./pages/hero-section/hero-section.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet,HeaderComponent, HeroSectionComponent, ]
})
export class AppComponent {
  title = 'Gpc Talwara';
}

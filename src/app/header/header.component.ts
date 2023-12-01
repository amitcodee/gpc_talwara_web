import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../language.service';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
isEnglish: any;
isDarkMode: any;
getCurrentLanguage() {
throw new Error('Method not implemented.');
}
  navbarScrolled = false;

  @HostListener('window:scroll') 
  onWindowScroll() {
    if (window.pageYOffset > 50) {
      this.navbarScrolled = true;
    } else {
      this.navbarScrolled = false;
    }
  }
  constructor(
    private languageService: LanguageService,
    private themeService: ThemeService
  ) {}

  toggleLanguage() {
    this.languageService.toggleLanguage();
  }

  toggleDarkMode() {
    this.themeService.toggleDarkMode();
  }
}

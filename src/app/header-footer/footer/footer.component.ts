import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language/language.service';
import { TextSizeService } from '../../services/text-size/text-size.service';
import { ThemeService } from '../../services/theme/theme.service';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-footer',
    imports: [CommonModule, RouterLink],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss'
})
export class FooterComponent {
  isDarkMode = false;
   showFixedBottomDiv = false;
  languageOptions: string[] = ['English', 'ਪੰਜਾਬੀ','हिंदी'];

  constructor(
    private textSizeService: TextSizeService,
    private languageService: LanguageService,
    private themeService: ThemeService
  ) {}

  ngOnInit() {
    this.isDarkMode = this.themeService.getDarkMode();
  }

  getTextSize(): number {
    return this.textSizeService.getTextSize();
  }

  getCurrentLanguage() {
    return this.languageService.currentLanguage;
  }

  scrollToTopAndCloseNavbar() {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Close the navigation menu for mobile screens
    if (this.isMobile()) {
      const navbarToggler = document.querySelector('.navbar-toggler') as HTMLElement;
      const navbarCollapse = document.querySelector('.navbar-collapse') as HTMLElement;

      if (navbarCollapse && navbarCollapse.classList.contains('show')) {
        navbarToggler.click();
      }
    }
  }

  isMobile(): boolean {
    return window.innerWidth < 992;
  }
}

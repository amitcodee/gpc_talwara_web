import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language/language.service';
import { ThemeService } from '../../services/theme/theme.service';
import { TextSizeService } from '../../services/text-size/text-size.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isDarkMode: any;
  navbarScrolled = false;
  languageOptions: string[] = ['English', 'ਪੰਜਾਬੀ','हिंदी'];

  @HostListener('window:scroll') 
  onWindowScroll() {
    if (window.pageYOffset > 100) {
      this.navbarScrolled = true;
    } else {
      this.navbarScrolled = false;
    }
  }

  constructor(
    private textSizeService: TextSizeService,
    private languageService: LanguageService,
    private themeService: ThemeService
  ) {}

  increaseTextSize(): void {
    this.textSizeService.increaseTextSize();
  }

  decreaseTextSize(): void {
    this.textSizeService.decreaseTextSize();
  }

  setLanguage(language: string): void {
    this.languageService.setLanguage(language);
  }

  toggleDarkMode() {
    this.themeService.toggleDarkMode();
  }

  ngOnInit() {
    this.themeService.isDarkMode$.subscribe((darkMode: boolean) => {
      this.isDarkMode = darkMode;
      // Update component styles or perform other actions based on darkMode
    });
  }

  getTextSize(): number {
    return this.textSizeService.getTextSize();
  }

  getCurrentLanguage() {
    return this.languageService.currentLanguage;
  }
}

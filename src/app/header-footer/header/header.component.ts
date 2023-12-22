// header.component.ts
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
  languageOptions: string[] = ['English', 'ਪੰਜਾਬੀ', 'हिंदी'];
  darkModeOptions: { label: string, icon: string }[] = [
    { label: 'Light', icon: 'fa-sun' },
    { label: 'Dark', icon: 'fa-moon' },
    { label: 'Default', icon: 'fa-adjust' }
  ];
  selectedDarkModeOption: { label: string, icon: string } = this.darkModeOptions[2]; // Default option

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

  setDarkMode(option: { label: string, icon: string }): void {
    this.selectedDarkModeOption = option;
    this.themeService.setDarkMode(option.label.toLowerCase());
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

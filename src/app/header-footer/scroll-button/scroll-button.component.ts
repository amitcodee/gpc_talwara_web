import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollService } from '../../services/scroll/scroll.service';
import { LanguageService } from '../../services/language/language.service';
import { TextSizeService } from '../../services/text-size/text-size.service';
import { ThemeService } from '../../services/theme/theme.service';

@Component({
  selector: 'app-scroll-button',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./scroll-button.component.scss'],
  templateUrl: './scroll-button.component.html',
})
export class ScrollButtonComponent {
  showButton = false;
  isDarkMode = false;
  languageOptions: string[] = ['English', 'ਪੰਜਾਬੀ', 'हिंदी'];

  constructor(
    private scrollService: ScrollService,
    private textSizeService: TextSizeService,
    private languageService: LanguageService,
    private themeService: ThemeService
  ) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = this.scrollService.getScrollPosition();
    this.showButton = scrollPosition !== undefined && scrollPosition >= 100;
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  ngOnInit() {
    // Subscribe to dark mode changes
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

  // You can add methods for toggling dark mode and changing language here
  toggleDarkMode() {
    this.themeService.toggleDarkMode();
  }

  changeLanguage(language: string) {
    this.languageService.changeLanguage(language);
  }
}
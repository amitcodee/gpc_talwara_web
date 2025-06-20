import { Component } from '@angular/core';
import { LanguageService } from '../../services/language/language.service';
import { ThemeService } from '../../services/theme/theme.service';
import { TextSizeService } from '../../services/text-size/text-size.service';
import { CommonModule } from '@angular/common';
import { NewsComponent } from '../news-section/news/news.component';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-main-area',
    templateUrl: './main-area.component.html',
    styleUrl: './main-area.component.scss',
    imports: [CommonModule, NewsComponent, RouterLink]
})
export class MainAreaComponent {
  scrollToTopAndCloseNavbar() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  isDarkMode = false;
  showFixedBottomDiv = false;
  languageOptions: string[] = ['English', 'ਪੰਜਾਬੀ', 'हिंदी'];
  selectedNews: string = 'first_news';

  constructor(
    private textSizeService: TextSizeService,
    private languageService: LanguageService,
    private themeService: ThemeService
  ) {
    // Use signal-based system for dark mode
    this.isDarkMode = this.themeService.getDarkMode();
  }

  selectNews(newsId: string): void {
    this.selectedNews = newsId;
  }
  setLanguage(language: string): void {
    this.languageService.setLanguage(language);
  }
  ngOnInit() {
    // Dark mode is now handled via signals in constructor
  }

  getTextSize(): number {
    return this.textSizeService.getTextSize();
  }

  getCurrentLanguage() {
    return this.languageService.currentLanguage;
  }
}

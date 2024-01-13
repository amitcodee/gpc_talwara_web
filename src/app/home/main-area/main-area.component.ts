import { Component } from '@angular/core';
import { LanguageService } from '../../services/language/language.service';
import { ThemeService } from '../../services/theme/theme.service';
import { TextSizeService } from '../../services/text-size/text-size.service';
import { CommonModule } from '@angular/common';
import { NewsComponent } from "../news-section/news/news.component";

@Component({
    selector: 'app-main-area',
    standalone: true,
    templateUrl: './main-area.component.html',
    styleUrl: './main-area.component.scss',
    imports: [CommonModule, NewsComponent]
})
export class MainAreaComponent {
  isDarkMode = false;
  showFixedBottomDiv = false;
  languageOptions: string[] = ['English', 'ਪੰਜਾਬੀ','हिंदी'];
  selectedNews: string = 'first_news';


 

  constructor(
    private textSizeService: TextSizeService,
    private languageService: LanguageService,
    private themeService: ThemeService
  ) {}

  selectNews(newsId: string): void {
    this.selectedNews = newsId;
  }
  setLanguage(language: string): void {
    this.languageService.setLanguage(language);
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

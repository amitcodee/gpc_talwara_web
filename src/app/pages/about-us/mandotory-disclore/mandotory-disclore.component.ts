import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../../services/language/language.service';
import { TextSizeService } from '../../../services/text-size/text-size.service';
import { ThemeService } from '../../../services/theme/theme.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-mandotory-disclore',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './mandotory-disclore.component.html',
  styleUrl: './mandotory-disclore.component.scss'
})
export class MandotoryDiscloreComponent {
  isDarkMode = false;
   showFixedBottomDiv = false;
  languageOptions: string[] = ['English', 'ਪੰਜਾਬੀ','हिंदी'];

  constructor(
    private textSizeService: TextSizeService,
    private languageService: LanguageService,
    private themeService: ThemeService
  ) {}

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
  scrollToTopAndCloseNavbar() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

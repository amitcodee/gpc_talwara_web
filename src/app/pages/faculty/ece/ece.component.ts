import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../../services/language/language.service';
import { TextSizeService } from '../../../services/text-size/text-size.service';
import { ThemeService } from '../../../services/theme/theme.service';

@Component({
    selector: 'app-ece-faculty',
    imports: [CommonModule],
    templateUrl: './ece.component.html',
    styleUrl: './ece.component.scss'
})
export class EceFacultyComponent {
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
}

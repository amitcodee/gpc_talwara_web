import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextSizeService } from '../../../services/text-size/text-size.service';
import { LanguageService } from '../../../services/language/language.service';
import { ThemeService } from '../../../services/theme/theme.service';

@Component({
    selector: 'app-admission-intake',
    imports: [CommonModule],
    templateUrl: './admission-intake.component.html',
    styleUrl: './admission-intake.component.scss'
})
export class AdmissionIntakeComponent {
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

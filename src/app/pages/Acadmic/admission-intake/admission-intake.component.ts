import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextSizeService } from '../../../services/text-size/text-size.service';
import { LanguageService } from '../../../services/language/language.service';
import { ThemeService } from '../../../services/theme/theme.service';

@Component({
  selector: 'app-admission-intake',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admission-intake.component.html',
  styleUrl: './admission-intake.component.scss'
})
export class AdmissionIntakeComponent {
  isDarkMode = false;
  showFixedBottomDiv = false;

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
}

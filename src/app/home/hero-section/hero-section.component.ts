import { Component, HostListener, OnInit } from '@angular/core';
import { LanguageService } from '../../services/language/language.service';
import { ThemeService } from '../../services/theme/theme.service';
import { TextSizeService } from '../../services/text-size/text-size.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss']
})
export class HeroSectionComponent implements OnInit {
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

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.showFixedBottomDiv = window.scrollY > 100;
  }

  getTextSize(): number {
    return this.textSizeService.getTextSize();
  }

  getCurrentLanguage() {
    return this.languageService.currentLanguage;
  }
}

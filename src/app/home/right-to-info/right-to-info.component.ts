import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextSizeService } from '../../services/text-size/text-size.service';
import { LanguageService } from '../../services/language/language.service';
import { ThemeService } from '../../services/theme/theme.service';

@Component({
  selector: 'app-right-to-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './right-to-info.component.html',
  styleUrl: './right-to-info.component.scss'
})
export class RightToInfoComponent {
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
}

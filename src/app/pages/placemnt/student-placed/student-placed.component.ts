import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../../services/language/language.service';
import { TextSizeService } from '../../../services/text-size/text-size.service';
import { ThemeService } from '../../../services/theme/theme.service';


@Component({
  selector: 'app-student-placed',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-placed.component.html',
  styleUrl: './student-placed.component.scss'
})
export class StudentPlacedComponent {
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

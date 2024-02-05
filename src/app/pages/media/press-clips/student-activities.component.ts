import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextSizeService } from '../../../services/text-size/text-size.service';
import { LanguageService } from '../../../services/language/language.service';
import { ThemeService } from '../../../services/theme/theme.service';

@Component({
  selector: 'app-student-activities',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-activities.component.html',
  styleUrl: './student-activities.component.scss'
})
export class StudentActivitiesComponent {
  isDarkMode = false;
  showFixedBottomDiv = false;
 languageOptions: string[] = ['English', 'ਪੰਜਾਬੀ','हिंदी'];
 clips = [
  { src: '1', title: 'Title ', description: 'Description ' },
  { src: '2', title: '4 ', description: 'Description ' },
  // Add more clips as needed
];

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

import { Component } from '@angular/core';
import { LanguageService } from '../../services/language/language.service';
import { ThemeService } from '../../services/theme/theme.service';
import { TextSizeService } from '../../services/text-size/text-size.service';

@Component({
  selector: 'app-admission-helpdesk',
  templateUrl: './admission-helpdesk.component.html',
  styleUrl: './admission-helpdesk.component.scss'
})
export class AdmissionHelpdeskComponent {
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

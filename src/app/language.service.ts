// language.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  currentLanguage: string = 'en'; // Default language is English

  toggleLanguage() {
    this.currentLanguage = this.currentLanguage === 'en' ? 'pa' : 'en';
  }
}

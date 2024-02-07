// language.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  changeLanguage(language: string) {
    throw new Error('Method not implemented.');
  }
  currentLanguage: string = 'English'; // Default language is English

  // This method can be used to set the language programmatically
  setLanguage(language: string) {
    this.currentLanguage = language;
  }
}

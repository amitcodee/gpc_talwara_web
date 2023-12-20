// language.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  currentLanguage: string = 'English'; // Default language is English

  // This method can be used to set the language programmatically
  setLanguage(language: string) {
    this.currentLanguage = language;
  }
}

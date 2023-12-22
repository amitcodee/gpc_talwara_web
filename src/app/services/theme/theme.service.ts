// theme.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private isDarkMode = new BehaviorSubject<boolean>(false);
  public isDarkMode$ = this.isDarkMode.asObservable();

  setDarkMode(mode: string): void {
    let darkMode = false;

    if (mode === 'light') {
      darkMode = false;
    } else if (mode === 'dark') {
      darkMode = true;
    } else {
      // Handle the default case as needed
    }

    // Save the dark mode preference to local storage or any other method
    localStorage.setItem('darkMode', JSON.stringify(darkMode));

    // Notify subscribers about the change
    this.isDarkMode.next(darkMode);
  }
}

// theme.service.ts
import { Injectable } from '@angular/core';
import { signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private isDarkMode = signal<boolean>(false);

  toggleDarkMode(): void {
    const currentMode = this.isDarkMode();
    const newMode = !currentMode;
    this.isDarkMode.set(newMode);
    localStorage.setItem('darkMode', JSON.stringify(newMode));
  }

  setDarkMode(mode: string): void {
    let darkMode = false;

    if (mode === 'light') {
      darkMode = false;
    } else if (mode === 'dark') {
      darkMode = true;
    } else {
      // Handle the default case as needed
    }

    // Save the dark mode preference to local storage
    localStorage.setItem('darkMode', JSON.stringify(darkMode));

    // Update the signal
    this.isDarkMode.set(darkMode);
  }

  getDarkMode(): boolean {
    return this.isDarkMode();
  }
}

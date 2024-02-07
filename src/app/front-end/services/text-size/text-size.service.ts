// text-size.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TextSizeService {
  private textSize = 16; // default text size

  getTextSize(): number {
    return this.textSize;
  }

  increaseTextSize(): void {
    this.textSize += 2; // Increase text size by 2 units
  }

  decreaseTextSize(): void {
    this.textSize -= 2; // Decrease text size by 2 units
  }
}

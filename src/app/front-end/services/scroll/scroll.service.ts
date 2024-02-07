// scroll.service.ts

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  private scrollSubject = new Subject<number>();
  public scroll$ = this.scrollSubject.asObservable();

  constructor() {
    window.addEventListener('scroll', () => {
      this.scrollSubject.next(window.scrollY);
    });
  }

  getScrollPosition(): number {
    return window.scrollY;
  }
}

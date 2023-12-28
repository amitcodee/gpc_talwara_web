import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollService } from '../../services/scroll/scroll.service';

@Component({
  selector: 'app-scroll-button',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./scroll-button.component.scss'],
  templateUrl: './scroll-button.component.html',
})
export class ScrollButtonComponent {
  showButton = false;

  constructor(private scrollService: ScrollService) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = this.scrollService.getScrollPosition();
    this.showButton = scrollPosition !== undefined && scrollPosition >= 100;
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  navbarScrolled = false;

  @HostListener('window:scroll') 
  onWindowScroll() {
    if (window.pageYOffset > 50) {
      this.navbarScrolled = true;
    } else {
      this.navbarScrolled = false;
    }
  }

}

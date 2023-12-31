import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import { TitleService } from './services/title/title.service';
import { RouterOutlet,RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './header-footer/footer/footer.component';
import { HeaderComponent } from './header-footer/header/header.component';
import { ScrollButtonComponent } from './header-footer/scroll-button/scroll-button.component';
import { HeroSectionComponent } from './home/hero-section/hero-section.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [CommonModule, RouterOutlet, RouterLink, HeaderComponent, HeroSectionComponent, FooterComponent, ScrollButtonComponent]
})
export class AppComponent implements OnInit {
  constructor(private router: Router, private titleService: TitleService) {}

  ngOnInit() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        const title = this.getTitle(this.router.routerState.root);
        this.titleService.setTitle(title);
      });
  }

  private getTitle(route: ActivatedRoute): string {
    const data: any = route.snapshot.data;
    if (data && data.title) {
      return data.title;
    }

    if (route.firstChild) {
      return this.getTitle(route.firstChild);
    }

    return 'SASS GPC Talwara';
  }
}

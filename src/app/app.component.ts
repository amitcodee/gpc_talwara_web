import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import { TitleService } from './services/title/title.service';
import { ThemeService } from './services/theme/theme.service';
import { RouterOutlet, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './header-footer/footer/footer.component';
import { HeaderComponent } from './header-footer/header/header.component';
import { ScrollButtonComponent } from './header-footer/scroll-button/scroll-button.component';
import { HeroSectionComponent } from './home/hero-section/hero-section.component';
import { NewsComponent } from "./home/news-section/news/news.component";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, RouterLink, HeaderComponent, HeroSectionComponent, FooterComponent, ScrollButtonComponent, NewsComponent]
})
export class AppComponent implements OnInit, OnDestroy {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  isDarkMode: boolean = false;

  constructor(private router: Router, private titleService: TitleService, private themeService: ThemeService) {}

  ngOnInit() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        const title = this.getTitle(this.router.routerState.root);
        this.titleService.setTitle(title);
      });

    // Update theme based on signal
    this.updateTheme();
    // Check for saved theme preference
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode) {
      this.themeService.setDarkMode(JSON.parse(savedMode) ? 'dark' : 'light');
    }
  }

  updateTheme() {
    this.isDarkMode = this.themeService.getDarkMode();
    if (this.isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }

  ngOnDestroy() {
    // No subscription to unsubscribe when using signals
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

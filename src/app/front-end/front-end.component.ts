import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import { TitleService } from './services/title/title.service';


@Component({
  selector: 'app-root',
  templateUrl: './front-end.component.html',
  styleUrl: './front-end.component.scss'
})
export class AppComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
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

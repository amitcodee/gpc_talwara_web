import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  template: `
  <app-dash-nabvbar></app-dash-nabvbar>
  <app-dash-sidebar></app-dash-sidebar>
  <router-outlet></router-outlet>
  `,
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}

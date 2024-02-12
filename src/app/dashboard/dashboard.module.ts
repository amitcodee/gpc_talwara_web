import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';

import { DashboardRoutingModule } from './dashboard.routes';



import { DashboardComponent } from './dashboar.component';
import { MainDashComponent } from './main-dash/main-dash.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { RouteService } from './Services/route.service';




@NgModule({
  declarations: [
    DashboardComponent,
    MainDashComponent,
    StudentDetailComponent
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    DashboardRoutingModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatMenuModule
  ],
  exports: [
    DashboardComponent,
  ],
  providers: [
    RouteService
  ]
})
export class DashboardModule { }

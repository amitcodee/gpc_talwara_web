import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {MatTabsModule} from '@angular/material/tabs';

import { DashboardRoutingModule } from './dashboard.routes';



import { DashboardComponent } from './dashboar.component';
import { MainDashComponent } from './main-dash/main-dash.component';
import { RouteService } from './Services/dashRoute.service';
import { StudentDetailsModule } from '../student-details/student-details.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { StudentService } from './Services/studentFire.service';
import { RandomStudentDataService } from './RandomData/randomData';
import { NoticeBoardComponent } from './notice-board/notice-board.component';




@NgModule({
  declarations: [
    DashboardComponent,
    MainDashComponent,
    NoticeBoardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    StudentDetailsModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatMenuModule,
    MatFormFieldModule,
    MatTabsModule
  ],
  exports: [
    DashboardComponent,
  ],
  providers: [
    RouteService,
    StudentService,
    RandomStudentDataService
  ]
})
export class DashboardModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard.routes';


import { DashboardComponent } from './dashboar.component';
import { MainDashComponent } from './main-dash/main-dash.component';
import { RouteService } from './Services/dashRoute.service';
import { StudentDetailsModule } from '../student-details/student-details.module';
import { StudentService } from './Services/studentFire.service';
import { NoticeBoardComponent } from './notice-board/notice-board.component';

import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material.module';
import { NoticeService } from './Services/fireNotice.service';




@NgModule({
  declarations: [
    DashboardComponent,
    MainDashComponent,
    NoticeBoardComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    StudentDetailsModule,
    SharedModule,
    MaterialModule
  ],
  exports: [
  ],
  providers: [
    RouteService,
    StudentService,
    NoticeService
  ]
})
export class DashboardModule { }

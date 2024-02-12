import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { DashboardComponent } from './dashboar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NabvbarComponent } from './nabvbar/nabvbar.component';
import { DashboardRoutingModule } from './dashboard.routing';




@NgModule({
  declarations: [
    DashboardComponent,
    SidebarComponent,
    NabvbarComponent
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }

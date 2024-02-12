import { Component, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./dashboar.component";
import { MainDashComponent } from "./main-dash/main-dash.component";
import { StudentDetailComponent } from "./student-detail/student-detail.component";

const routes: Routes = [
  {
    path: "dashboard",
    component: DashboardComponent,
    children: [
      {
        path: "main",
        component: MainDashComponent
      },
      {
        path: 'student',
        component: StudentDetailComponent
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DashboardRoutingModule { }

import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./dashboar.component";
import { MainDashComponent } from "./main-dash/main-dash.component";
import { NoticeBoardComponent } from "./notice-board/notice-board.component";

const routes: Routes = [
  {
    path: "",
    component: DashboardComponent,
    children: [
      {
        path: "stdetail",
        loadChildren: () => import("../student-details/student-details.module").then(m => m.StudentDetailsModule),
      },
      {
        path: "main",
        component: MainDashComponent,
      },
      {
        path: "noticeboard",
        component: NoticeBoardComponent,
      },
      {
        path: "",
        redirectTo: "main",
        pathMatch: "full",
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DashboardRoutingModule { }

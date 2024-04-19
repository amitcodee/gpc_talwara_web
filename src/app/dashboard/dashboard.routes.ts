import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { DashboardComponent } from "./dashboar.component";
import { MainDashComponent } from "./main-dash/main-dash.component";
import { NoticeBoardComponent } from "./notice-board/notice-board.component";
import { DetailsGuardService } from "./DetailsGuard.service";

const routesstaff: Routes = [
  {
    path: "",
    component: DashboardComponent,
    children: [
      {
        path: "stdetail",
        loadChildren: () => import("../student-details/student-details.module").then(m => m.StudentDetailsModule),
        canActivate: [DetailsGuardService],
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

const routesStudents: Routes = [
  {
    path: "",
    component: DashboardComponent,
    children: [
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
  imports: [RouterModule.forChild(routesstaff)],
  exports: [RouterModule]
})

export class DashboardRoutingModule {

}

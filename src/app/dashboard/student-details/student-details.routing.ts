import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { StudentDetailsComponent } from "./student-details.component";
import { AddStudentComponent } from "./add-student/add-student.component";

const routes: Routes = [
  {
    path: "",
    component: StudentDetailsComponent,
    children: [
      { path: "add", component: AddStudentComponent},
      { path: "", redirectTo: "add", pathMatch: "full"}
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class StudentRoutingModule { }

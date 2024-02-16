import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { StudentDetailsComponent } from "./student-details.component";
import { AddStudentComponent } from "./add-student/add-student.component";
import { EditStudentsComponent } from "./edit-students/edit-students.component";
import { ViewStudentsComponent } from "./view-students/view-students.component";

const routes: Routes = [
  {
    path: "",
    component: StudentDetailsComponent,
    children: [
      { path: "add", component: AddStudentComponent},
      { path: "edit", component: EditStudentsComponent},
      { path: "view", component: ViewStudentsComponent},
      { path: "", redirectTo: "add", pathMatch: "full"}
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class StudentRoutingModule { }

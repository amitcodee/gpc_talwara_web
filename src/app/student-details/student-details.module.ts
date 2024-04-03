import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterModule } from "@angular/router";

import { AddStudentComponent } from './add-student/add-student.component';
import { StudentDetailsComponent } from './student-details.component';
import { StudentRoutingModule } from './student-details.routing';
import { EditStudentsComponent } from './edit-students/edit-students.component';

import { ViewStudentsComponent } from './view-students/view-students.component';
import { FeeDetailsComponent } from './fee-details/fee-details.component';
import { MaterialModule } from '../material.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    StudentDetailsComponent,
    AddStudentComponent,
    EditStudentsComponent,
    FeeDetailsComponent,
    ViewStudentsComponent,
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    RouterModule,
    MaterialModule,
    SharedModule
  ],
  exports: [
  ],
  providers: [
    DatePipe,
  ],
})
export class StudentDetailsModule { }

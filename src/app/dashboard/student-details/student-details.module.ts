import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MatSidenavModule} from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';

import { AddStudentComponent } from './add-student/add-student.component';
import { StudentDetailsComponent } from './student-details.component';
import { StudentRoutingModule } from './student-details.routing';



@NgModule({
  declarations: [
    StudentDetailsComponent,
    AddStudentComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    RouterModule,
    MatSidenavModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatSelectModule,
    MatInputModule,
  ],
  exports: [
    StudentDetailsComponent,
    StudentRoutingModule

  ]
})
export class StudentDetailsModule { }

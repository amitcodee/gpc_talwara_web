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
import { EditStudentsComponent } from './edit-students/edit-students.component';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { DisableControlDirective } from '../directives/disable-control.directive';


@NgModule({
  declarations: [
    StudentDetailsComponent,
    AddStudentComponent,
    EditStudentsComponent,
    DisableControlDirective
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
    MatButtonModule,
    MatRadioModule,
    MatCardModule,
    MatListModule,
    MatCheckboxModule
  ],
  exports: [
    StudentDetailsComponent,
    StudentRoutingModule

  ]
})
export class StudentDetailsModule { }

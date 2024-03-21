import { Component, OnInit} from '@angular/core';
import {  FormBuilder, FormGroup } from '@angular/forms';
import { FormLayout } from '../../models/formModel';
import { StudentFormConfig} from '../../models/studentFormConfig';
import { StudentClass, StudentModel } from '../../models/studentModel';
import { StudentService } from '../../Services/studentFire.service';
import { studentTestData} from '../../models/test-data';
import { formService } from '../../Services/form.service';

// Example usage within a component

@Component({
  selector: 'app-edit-students',
  templateUrl: './edit-students.component.html',
  styleUrl: './edit-students.component.scss',
})


export class EditStudentsComponent implements OnInit {
  formGroup!: FormGroup;
  formLayoutInstance!: FormLayout;
  studentData = studentTestData as StudentModel;



  constructor(private fb: FormBuilder,
              private studentFormConfig: StudentFormConfig,
              private studentService: StudentService,
              private formService: formService ) {
  }



  ngOnInit() {
    // Initialize formLayoutInstance with studentFormLayout and generate the form group
    // Below formLayoutInstance is to display data on html
    this.formLayoutInstance = new FormLayout(this.studentFormConfig.studentFormLayoutConfig); // Assuming studentFormLayout is defined and imported

    // using the service to create a formgroup
    this.formGroup = this.formService.generateFormGroup(this.studentFormConfig.studentFormLayoutConfig, this.fb);
    this.formGroup
        .setValue(
          this.formService.populateFormGroup(
        this.studentData,
       this.studentFormConfig.studentFormLayoutConfig
          )
          ) // Assuming studentFormInitialData is defined and imported
  }

  onSubmit() {
    if (this.formGroup.valid) {
      this.studentService.updateStudentData(this.formService.mapFormToStudent(this.formGroup.value));
      // Handle your form submission logic here
    } else {
      console.log('Form is not valid');
      // Create a popup with the error message
      alert('Form is not valid');
    }
  }
}

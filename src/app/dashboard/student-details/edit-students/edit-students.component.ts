import { Component, OnInit} from '@angular/core';
import {  FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormLayout, FormRow } from '../../models/forms';
import  {StudentFormConfig, Student} from '../../models/student';
import {studentData} from '../../models/test-data';

// Example usage within a component

@Component({
  selector: 'app-edit-students',
  templateUrl: './edit-students.component.html',
  styleUrl: './edit-students.component.scss',
})


export class EditStudentsComponent implements OnInit {
  formGroup!: FormGroup;
  formLayoutInstance!: FormLayout;
  student = studentData[0]; // Assuming studentData is defined and imported


  constructor(private fb: FormBuilder, private studentFormConfig: StudentFormConfig) {
  }



ngOnInit() {
  // Initialize formLayoutInstance with studentFormLayout and generate the form group
  this.formLayoutInstance = new FormLayout(this.studentFormConfig.studentFormLayoutConfig); // Assuming studentFormLayout is defined and imported
  this.formGroup = this.formLayoutInstance.generateFormGroup(this.fb);
  this.formGroup.setValue(this.student);
  console.log(this.formGroup) // Assuming studentFormInitialData is defined and imported
}

  onSubmit() {
    if (this.formGroup.valid) {
      const student: Student = this.formGroup.value as Student;
      console.log(student);
      // Handle your form submission logic here
    } else {

      console.log('Form is not valid');
      // Create a popup with the error message
      alert('Form is not valid');
    }
  }

  getFieldError(field: string, error: string): string | null {
    const control = this.formGroup.get(field);
    if (control && control.errors && control.errors[error]) {
      // Access specific error property based on your validator implementation
      if (error === 'exactCharacterCountAndNumeric') {
        return `Field must be exactly ${control.errors['exactCharacterCountAndNumeric'].requiredLength} characters long and contain only numbers.`;
      } else {
        return `Field has error: ${error}`; // Handle other potential errors
      }
    }
    return null;
  }

  addPhoneNumber() {
    const studentDetails = this.formGroup.get('phoneNumbers') as FormArray;
    studentDetails.push(this.fb.control(''));
  }
}

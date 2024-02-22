import { Component, OnInit} from '@angular/core';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormLayout, FormRow } from '../../models/forms';
import  {StudentFormConfig} from '../../models/student';

// Example usage within a component

@Component({
  selector: 'app-edit-students',
  templateUrl: './edit-students.component.html',
  styleUrl: './edit-students.component.scss',
})


export class EditStudentsComponent implements OnInit {
  formGroup!: FormGroup;
  formLayoutInstance!: FormLayout;

  constructor(private fb: FormBuilder, private studentFormConfig: StudentFormConfig) {


  }



ngOnInit() {
  // Initialize formLayoutInstance with studentFormLayout and generate the form group
  this.formLayoutInstance = new FormLayout(this.studentFormConfig.studentFormLayoutConfig); // Assuming studentFormLayout is defined and imported
  this.formGroup = this.formLayoutInstance.generateFormGroup(this.fb);
}


  onSubmit() {
    if (this.formGroup.valid) {
      console.log(this.formGroup.value.data);
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

}

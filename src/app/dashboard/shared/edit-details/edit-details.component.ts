import { Component, EventEmitter, Input,OnInit, Output} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { FormLayout, FormRow } from '../../models/formModel';
import { StudentModel } from '../../models/studentModel';

import { formService } from '../../Services/form.service';

@Component({
  selector: 'app-edit-details',
  templateUrl: './edit-details.component.html',
  styleUrl: './edit-details.component.scss'
})

export class EditDetailsComponent {
  @Input() formConfig! : FormRow[]; //getting the formConfig Input from Outside
  @Input() formData!: any; //getting the formData Input from Outside
  @Output() formValue = new EventEmitter<any>(); //sending the formValue Output to Outside
  @Output() formType = new EventEmitter<any>(); //sending the formValue Output to Outside



  formLayoutInstance!: FormLayout;
  formGroup!: FormGroup;

  constructor(private fb: FormBuilder,
              private formService: formService ) {
  }



  ngOnInit() {
    // Initialize formLayoutInstance with studentFormLayout and generate the form group
    // Below formLayoutInstance is to display data on html
    this.formLayoutInstance = new FormLayout(this.formConfig); // Assuming studentFormLayout is defined and imported

    // using the service to create a formgroup
    this.formGroup = this.formService.generateFormGroup(this.formConfig, this.fb);
    this.formGroup
        .setValue(
          this.formService.populateFormGroup(
               this.formData,
              this.formConfig
          )
          ) // Assuming studentFormInitialData is defined and imported
  }

  onSubmit() {
    if (this.formGroup.valid) {
      this.formType.emit('student');
      this.formValue.emit(this.formService.mapFormToStudent(this.formGroup.value))
      // Handle your form submission logic here
    } else {
      console.log('Form is not valid');
      // Create a popup with the error message
      alert('Form is not valid');
    }
  }
}

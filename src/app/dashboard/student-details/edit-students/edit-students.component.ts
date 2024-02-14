import { Component, OnInit, inject } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormField, FormLayout, FormRow } from '../../models/forms';


// Example usage within a component

@Component({
  selector: 'app-edit-students',
  templateUrl: './edit-students.component.html',
  styleUrl: './edit-students.component.scss'
})


export class EditStudentsComponent implements OnInit {
  formGroup!: FormGroup;
  formLayoutInstance!: FormLayout;

  constructor(private fb: FormBuilder) {

  }

  formConfig: FormRow[] =
  [
    {
      row: [
        {
          name: 'firstName',
          type: 'input',
          validators: [Validators.required],
          placeholder: 'First Name',
          floatLabel: 'always',
        },
        {
          name: 'lastName',
          type: 'input',
          validators: [Validators.required],
          placeholder: 'Last Name',
          floatLabel: 'always',
        }
      ]
    },
    {
      row: [
        {
          name: 'gender',
          type: 'radio',
          validators: [Validators.required],
          options: [
            { value: 'male', label: 'Male' },
            { value: 'female', label: 'Female' }
          ],
          placeholder: 'Gender',
          floatLabel: 'auto',
        }
      ]
    },
    {
              row: [
                {
                  name: 'hobbies',
                  type: 'checkbox',
                  validators: [], // Custom validators can be added as needed
                  options: [
                    { value: 'reading', label: 'Reading', checked: false },
                    { value: 'traveling', label: 'Traveling', checked: false },
                    { value: 'cooking', label: 'Cooking', checked: false }
                  ],
                  placeholder: 'Hobbies',
                  floatLabel: 'auto',
                }
              ]
    }
];

  ngOnInit() {
    this.formLayoutInstance = new FormLayout(this.formConfig);
    this.formGroup = this.formLayoutInstance.generateFormGroup(this.fb);
  }

  onSubmit() {
    if (this.formGroup.valid) {
      console.log(this.formGroup.value);
      // Handle your form submission logic here
    } else {
      console.log('Form is not valid');
    }
  }
}

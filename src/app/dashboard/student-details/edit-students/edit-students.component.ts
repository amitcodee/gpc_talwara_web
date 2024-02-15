import { Component, OnInit, inject } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormField, FormLayout, FormRow } from '../../models/forms';


// Example usage within a component

@Component({
  selector: 'app-edit-students',
  templateUrl: './edit-students.component.html',
  styleUrl: './edit-students.component.scss',
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

studentFormLayout: FormRow[] = [
  {
    row: [
      { name: 'regNumber',
        type: 'input',
        validators: [Validators.required, Validators.pattern('^\d{12}$')],
        placeholder: 'Registration Number',
        floatLabel: 'always',
        hintLabel: 'Enter 12-digit registration number',
        readonly: false,
        disabled: true,},
      { name: 'branch', type: 'select', validators: [Validators.required], placeholder: 'Branch', options: [
        { value: 'cse', label: 'Computer Science' },
        { value: 'ece', label: 'Electronics and Communication' },
        { value: 'ee', label: 'Electrical' },
        { value: 'mech', label: 'Mechanical' },
        { value: 'civil', label: 'Civil' },
      ], floatLabel: 'always' },
      { name: 'semester', type: 'select', validators: [Validators.required, Validators.pattern('^\d{1,2}$')], options: [
        { value: 1, label: '1st' },
        { value: 2, label: '2nd' },
        { value: 3, label: '3rd' },
        { value: 4, label: '4th' },
        { value: 5, label: '5th' },
        { value: 6, label: '6th' },
      ], placeholder: 'Semester', floatLabel: 'always' },
      { name: 'admissionYear', type: 'input', validators: [Validators.required, Validators.pattern('^\d{4}$')], placeholder: 'Admission Year', floatLabel: 'always' },
      { name: 'enrollmentStatus', type: 'select', validators: [Validators.required], placeholder: 'Enrollment Status', options: [
        { value: 'active', label: 'Active' },
        { value: 'DropOut', label: 'DropOut' },
        { value: 'suspended', label: 'Suspended' },
        { value: 'expelled', label: 'Expelled' },
      ], floatLabel: 'always' },
      // Add other student fields similarly
    ]
  },
  {
    row: [
    ]
  },
  {
    row: [
      { name: 'firstName', type: 'input', validators: [Validators.required], placeholder: 'First Name', floatLabel: 'always' },
      { name: 'lastName', type: 'input', validators: [Validators.required], placeholder: 'Last Name', floatLabel: 'always' },
       // Add other student fields similarly
      { name: 'gender', type: 'radio', validators: [Validators.required], placeholder: 'Gender', options:  [
        { value: 'male', label: 'Male' },
        { value: 'female', label: 'Female' },
      ], floatLabel: 'always' },
    ]
  },
  {
    row: [
      { name: 'contactNumber', type: 'input', validators: [Validators.required, Validators.pattern('^\d{10}$')], placeholder: 'Contact Number', floatLabel: 'always' },
      { name: 'email', type: 'input', validators: [Validators.required, Validators.email], placeholder: 'Email', floatLabel: 'always' },
      { name: 'hobbies', type: 'checkbox', validators: [],
      options: [
        { value: 'reading', label: 'Reading', checked: false },
        { value: 'traveling', label: 'Traveling', checked: false },
        { value: 'cooking', label: 'Cooking', checked: false }
      ], placeholder: 'Hobbies', floatLabel: 'auto' },

    ]
  },
  // Address - Consider creating a separate sub-form or handling as individual fields
  {
    row: [
      { name: 'street1', type: 'input', validators: [Validators.required], placeholder: 'Street 1', floatLabel: 'always' },
      { name: 'city', type: 'input', validators: [Validators.required], placeholder: 'City', floatLabel: 'always' },
      // Add other address fields similarly
    ]
  },
  // Handling AcademicRecords as an array (FormArray) is more complex and might be dynamically managed
];

ngOnInit() {
  // Initialize formLayoutInstance with studentFormLayout and generate the form group
  this.formLayoutInstance = new FormLayout(this.studentFormLayout); // Assuming studentFormLayout is defined and imported
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

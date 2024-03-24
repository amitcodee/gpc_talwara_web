import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

interface StudentField {
  name: string;
  type: 'text' | 'number' | 'email' | 'date'; // Add other allowed types if needed
  required?: boolean;
  validation?: (value: any) => boolean | string; // Custom validation
}

@Component({
  selector: 'app-student-add',
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.scss'
})

export class AddStudentComponent  implements OnInit {
  studentForm: FormGroup = new FormGroup({});

  // Replace with your actual student profile fields
  studentFields: StudentField[] = [
    { name: 'firstName', type: 'text', required: true },
    { name: 'lastName', type: 'text', required: true },
    { name: 'email', type: 'email', required: true },
    { name: 'enrollmentDate', type: 'date', required: true },
    { name: 'program', type: 'text', required: true },
    { name: 'gpa', type: 'number', required: true, validation: (value: number) => value >= 0 && value <= 4.0 ? true : 'GPA must be between 0 and 4.0' },
    // Add more fields as needed
  ];

  constructor(private fb: FormBuilder) {
    this.studentForm = this.fb.group({});
  }

  ngOnInit() {
    const formControls: any = {}; // Object to hold dynamic form controls

    this.studentFields.forEach(field => {
      formControls[field.name] = [
        '',
        field.required ? Validators.required : null,
        field.validation ? field.validation : null
      ];
    });

    this.studentForm = this.fb.group(formControls);
  }

  onSubmit() {
    if (this.studentForm.valid) {
      console.log('Form submitted:', this.studentForm.value); // Submit form data here
      this.studentForm.reset(); // Optional: Reset form after submission
    } else {
      console.error('Form is invalid.');
      // Highlight or display errors to the user
    }
  }
}

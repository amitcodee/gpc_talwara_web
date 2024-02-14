import { ValidatorFn, FormArray, FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

export interface FormRow {
  row: FormField[];
}

export interface FormField {
  name: string;
  type: 'input' | 'textarea' | 'select' | 'radio' | 'checkbox';
  validators: ValidatorFn[];
  class?: string;
  styles?: { [key: string]: string | number };
  placeholder?: string;
  options?: SelectOption[]; // Used for 'select', 'radio', and 'checkbox'
  hideRequiredMarker?: boolean;
  floatLabel: 'always' | 'auto';
  hintLabel?: string; // New: Optional hint text for form fields
}

export interface SelectOption {
  value: string | number;
  label: string;
  checked?: boolean; // For checkboxes, to indicate if the option is initially checked
}

export class FormLayout {
  layout: FormRow[];

  constructor(layout: FormRow[]) {
    this.layout = layout;
  }

  // Method to generate a FormGroup or FormArray based on the layout, including checkboxes
  generateFormGroup(fb: FormBuilder): FormGroup {
    const group: { [key: string]: any } = {};
    this.layout.forEach(row => {
      row.row.forEach(field => {
        if (field.type === 'checkbox') {
          // Initialize FormArray for checkboxes with FormControl per option
          const formControls = field.options?.map(option => new FormControl(option.checked || false)) || [];
          group[field.name] = new FormArray(formControls);
        } else {
          // Initialize FormControl for other field types
          group[field.name] = ['', field.validators];
        }
      });
    });
    return fb.group(group);
  }
}

//
// Config files for Student form
//
const genderOptions: SelectOption[] = [
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' },
];

const branchOptions: SelectOption[] = [
  { value: 'cse', label: 'Computer Science' },
  { value: 'ece', label: 'Electronics and Communication' },
  { value: 'ee', label: 'Electrical' },
  { value: 'mech', label: 'Mechanical' },
  { value: 'civil', label: 'Civil' },
];

const SemesterOptions: SelectOption[] = [
  { value: 1, label: '1st' },
  { value: 2, label: '2nd' },
  { value: 3, label: '3rd' },
  { value: 4, label: '4th' },
  { value: 5, label: '5th' },
  { value: 6, label: '6th' },
];
const enrollmentStatusOptions: SelectOption[] = [
  { value: 'active', label: 'Active' },
  { value: 'DropOut', label: 'DropOut' },
  { value: 'suspended', label: 'Suspended' },
  { value: 'expelled', label: 'Expelled' },
];

const studentFormLayout: FormRow[] = [
  {
    row: [
      { name: 'regNumber', type: 'input', validators: [Validators.required, Validators.pattern('^\d{12}$')], placeholder: 'Registration Number', floatLabel: 'always' },
      { name: 'branch', type: 'select', validators: [Validators.required], placeholder: 'Branch', options: branchOptions, floatLabel: 'always' },
      { name: 'semester', type: 'select', validators: [Validators.required, Validators.pattern('^\d{1,2}$')], options: SemesterOptions, placeholder: 'Semester', floatLabel: 'always' },
      { name: 'admissionYear', type: 'input', validators: [Validators.required, Validators.pattern('^\d{4}$')], placeholder: 'Admission Year', floatLabel: 'always' },
      { name: 'enrollmentStatus', type: 'select', validators: [Validators.required], placeholder: 'Enrollment Status', options: enrollmentStatusOptions, floatLabel: 'always' },
      // Add other student fields similarly
    ]
  },
  {
    row: [
      { name: 'firstName', type: 'input', validators: [Validators.required], placeholder: 'First Name', floatLabel: 'always' },
      { name: 'lastName', type: 'input', validators: [Validators.required], placeholder: 'Last Name', floatLabel: 'always' },
    ]
  },
  {
    row: [
      { name: 'firstName', type: 'input', validators: [Validators.required], placeholder: 'First Name', floatLabel: 'always' },
      { name: 'lastName', type: 'input', validators: [Validators.required], placeholder: 'Last Name', floatLabel: 'always' },
       // Add other student fields similarly
      { name: 'gender', type: 'radio', validators: [Validators.required], placeholder: 'Gender', options: genderOptions, floatLabel: 'always' },
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
      { name: 'address.street1', type: 'input', validators: [Validators.required], placeholder: 'Street 1', floatLabel: 'always' },
      { name: 'address.city', type: 'input', validators: [Validators.required], placeholder: 'City', floatLabel: 'always' },
      // Add other address fields similarly
    ]
  },
  // Handling AcademicRecords as an array (FormArray) is more complex and might be dynamically managed
];

const studentForm : FormLayout = new FormLayout(studentFormLayout);

function generateformInstance ( value: any) : FormLayout {
  if (value === "student") {
    return studentForm;
  }
  return studentForm;
}



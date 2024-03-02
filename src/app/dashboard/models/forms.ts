import { ValidatorFn, FormArray, FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

export interface FormRow {
  title: string;
  row: FormField[];
}

export interface FormField {
  name: string;
  type: 'input' | 'textarea' | 'select' | 'radio' | 'checkbox' | 'date';
  validators: ValidatorFn[];
  class?: string;
  styles?: { [key: string]: string | number };
  placeholder?: string;
  options?: SelectOption[]; // Used for 'select', 'radio', and 'checkbox'
  hideRequiredMarker?: boolean;
  floatLabel: 'always' | 'auto';
  hintLabel?: string; // New: Optional hint text for form fields
  hintLabelNumber?: number; // New: Optional hint text for form fields
  readonly? : boolean;
  disabled? : boolean;
  valueDisplay? : string | number;
  label? : string;
  DOB? : Date;
  extra? : true
}

export interface SelectOption {
  value: string | number;
  label: string;
  checked?: boolean; // For checkboxes, to indicate if the option is initially checked
}

//
// Config files for Student form
//



export class FormLayout {
  layout: FormRow[];

  constructor(layout: FormRow[]) {
    this.layout = layout;
  }

  // Method to generate a FormGroup or FormArray based on the layout, including checkboxes
  generateFormGroup(fb: FormBuilder): FormGroup {
    const group: { [key: string]: any } = {};
    console.log(this.layout);
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

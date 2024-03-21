import { ValidatorFn, FormArray, FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

export interface FormRow {
  title: string;
  modelValue?: string;
  modelValueBoolean?: boolean;
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

export class FormLayout {
  layout: FormRow[];

  constructor(layout: FormRow[]) {
    this.layout = layout;
  }
}

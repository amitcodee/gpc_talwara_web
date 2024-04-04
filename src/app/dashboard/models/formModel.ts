import { ValidatorFn, FormArray, FormControl, FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

export interface FormRowArray {
  title: string;
  formArrayBoolean? : boolean;
  formArrayName?: string,
  rowInArray: FormField[];
}

export interface FormRow {
  title: string;
  formGroupBoolean: boolean;
  formArrayBoolean? : boolean;
  formGroupName?: string,
  groupRow: FormField[];
  arrayRow?: FormRowArray;
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
  // generateFormGroup(fb: FormBuilder): FormGroup {
  //   const group = fb.group({});

  //   this.layout.forEach(row => {
  //     if (row.formGroup) {
  //       // Nested group
  //       const nestedGroup = fb.group(
  //         row.row.reduce((acc, field) => {
  //           acc[field.name as string] =  new FormControl(null, field.validators);
  //           return acc;
  //         }, {} as { [key: string]: AbstractControl })
  //       );
  //       group.addControl(row.formGroupName!, nestedGroup);
  //     } else {
  //       // Add fields directly to main group
  //       row.row.forEach(field => {
  //         group.addControl(field.name,  new FormControl(null, field.validators));
  //       });
  //     }
  //   });
  //   return group;
  // }

  generateFormGroup(fb: FormBuilder): FormGroup {
    const group = fb.group({});

    this.layout.forEach(row => {
      if (row.formGroupBoolean && row.formArrayBoolean) {
        // Nested group with FormArray
        const nestedGroup = fb.group({});
        row.groupRow.forEach(field => {
          nestedGroup.addControl(field.name, new FormControl(null, field.validators));
        });
        // Create a single FormArray for all arrayRows
        const formArray = fb.array([], [Validators.required]); // Apply any custom validators here
        row.arrayRow!.rowInArray.forEach((field) => {
            formArray.push(new FormControl('', field.validators));
          });
        nestedGroup.addControl( row.arrayRow!.formArrayName!, formArray); // Assign a consistent name for clarity
        group.addControl(row.formGroupName!, nestedGroup);
      } else if (row.formGroupBoolean) {
        // Nested group
        const nestedGroup = fb.group(
          row.groupRow.reduce((acc, field) => {
            acc[field.name as string] = new FormControl(null, field.validators);
            return acc;
          }, {} as { [key: string]: AbstractControl })
        );
        group.addControl(row.formGroupName!, nestedGroup);
      } else {
        // Add fields directly to main group
        row.groupRow.forEach(field => {
          group.addControl(field.name, new FormControl(null, field.validators));
        });
      }
    });

    return group;
  }
}

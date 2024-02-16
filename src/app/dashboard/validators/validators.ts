import { AbstractControl, ValidationErrors } from '@angular/forms';

export function exactCharacterCountAndNumeric(control: AbstractControl): ValidationErrors | null {
  const value = control.value as string; // Ensure control value is a string

  // Regular expression to match exactly 12 digits:
  const regex = /^\d{12}$/;

  if (!value || !regex.test(value)) {
    return {
      exactCharacterCountAndNumeric: {
        value, // Include the invalid value for clarity
        requiredLength: 12,
      },
    };
  }

  return null; // Control is valid
}

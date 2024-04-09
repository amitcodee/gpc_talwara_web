import { Validators } from '@angular/forms';
import { FormRow } from '../models/formModel';
// exported to shared module
export class FeesFormConfig{

  feeFormLayout : FormRow[] = [
    {
      title: 'Fees',
      modelValue: 'feesAcademicSection',
      modelValueBoolean: false,
      row: [
        {
          name: 'feesID',
          type: 'input',
          validators: [Validators.required],
          placeholder: 'Fees ID',
          floatLabel: 'always',
          readonly: true,
        },
        {
          name: 'regNumber',
          type: 'input',
          validators: [Validators.required],
          placeholder: 'Registration Number',
          floatLabel: 'always',
        },
        {
          name: 'batch',
          type: 'input',
          validators: [Validators.required],
          placeholder: 'Batch',
          floatLabel: 'always',
        },
        {
          name: 'branch',
          type: 'input',
          validators: [Validators.required],
          placeholder: 'Branch',
          floatLabel: 'always',
        },
        {
          name: 'session',
          type: 'input',
          validators: [Validators.required],
          placeholder: 'Session',
          floatLabel: 'always',
        },
        {
          name: 'sem',
          type: 'input',
          validators: [Validators.required],
          placeholder: 'Semester',
          floatLabel: 'always',
        },
        {
          name: 'amount',
          type: 'input',
          validators: [Validators.required],
          placeholder: 'Amount',
          floatLabel: 'always',
        },
        {
          name: 'paymentStatus',
          type: 'input',
          validators: [Validators.required],
          placeholder: 'Payment Status',
          floatLabel: 'always',
        },
        {
          name: 'paymentDate',
          type: 'date',
          validators: [Validators.required],
          placeholder: 'Payment Date',
          floatLabel: 'always',
        },
        {
          name: 'paymentMode',
          type: 'input',
          validators: [Validators.required],
          placeholder: 'Payment Mode',
          floatLabel: 'always',
        },
        {
          name: 'paymentReference',
          type: 'input',
          validators: [Validators.required],
          placeholder: 'Payment Reference',
          floatLabel: 'always',
        },
      ],

    }
  ]
}

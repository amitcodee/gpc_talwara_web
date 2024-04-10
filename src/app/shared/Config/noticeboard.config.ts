import { Validators } from '@angular/forms';
import { FormRow } from '../models/formModel';

export class NoticeBoardFormConfig{

  noticeFormLayout : FormRow[] = [
    {
      title: 'Notice Information',
      modelValue: 'noticeInformation',
      modelValueBoolean: false,
      row: [
        {
          name: 'title',
          type: 'input',
          validators: [Validators.required],
          placeholder: 'Title',
          floatLabel: 'always',
        },
        {
          name: 'createdby',
          type: 'input',
          validators: [Validators.required],
          placeholder: 'Created by',
          floatLabel: 'always',
        },
        {
          name: 'modifiedby',
          type: 'input',
          validators: [Validators.required],
          placeholder: 'Modified by',
          floatLabel: 'always',
        },
        {
          name: 'content',
          type: 'textarea',
          validators: [Validators.required],
          placeholder: 'Content',
          floatLabel: 'always',
        },
      ]
    }
  ]
}

import { Validators } from '@angular/forms';
import { FormRow } from './formModel';


export class StudentFormConfig{
  studentFormLayout: FormRow[] = [
    {
      title: 'ID and Enrollment Status',
      modelValue: '',
      modelValueBoolean: false,
      row: [
        {
          name: 'id',
          type: 'input',
          validators: [Validators.required],
          placeholder: 'ID',
          floatLabel: 'always',
        },
        {
          name: 'enrollmentStatus',
          type: 'select',
          validators: [Validators.required],
          options: [
            { value: 'active', label: 'Active' },
            { value: 'inactive', label: 'Inactive' },
            { value: 'suspended', label: 'Suspended' },
            { value: 'expelled', label: 'Expelled' },
          ],
          placeholder: 'Enrollment Status',
          floatLabel: 'always',
        },
      ],
    },
    {
      title: 'Personal Information',
      modelValue: 'personalInformation',
      modelValueBoolean: true,
      row: [
        {
          name: 'firstName',
          type: 'input',
          validators: [Validators.required],
          placeholder: 'First Name',
          floatLabel: 'auto',
        },
        {
          name: 'lastName',
          type: 'input',
          validators: [Validators.required],
          placeholder: 'Last Name',
          floatLabel: 'always',
        },
        {
          name: 'fatherName',
          type: 'input',
          validators: [Validators.required],
          placeholder: 'Father Name',
          floatLabel: 'always',
        },
        {
          name: 'motherName',
          type: 'input',
          validators: [Validators.required],
          placeholder: 'Mother Name',
          floatLabel: 'always',
        },
        {
          name: 'dateOfBirth',
          type: 'date',
          validators: [Validators.required],
          placeholder: 'Date of Birth',
          floatLabel: 'always',
        },
        {
          name: 'bloodGroup',
          type: 'select',
          validators: [Validators.required],
          options: [
            { value: 'A+', label: 'A+' },
            { value: 'A-', label: 'A-' },
            { value: 'B+', label: 'B+' },
            { value: 'B-', label: 'B-' },
            { value: 'AB+', label: 'AB+' },
            { value: 'AB-', label: 'AB-' },
            { value: 'O+', label: 'O+' },
            { value: 'O-', label: 'O-' },
          ],
          placeholder: 'Blood Group',
          floatLabel: 'always',
        },
        {
          name: 'familyIncome',
          type: 'input',
          validators: [Validators.required],
          placeholder: 'Family Income',
          floatLabel: 'always',
        },
        {
          name: 'guardianOccupation',
          type: 'input',
          validators: [Validators.required],
          placeholder: 'Guardian Occupation',
          floatLabel: 'always',
        }
      ],
    },
    {
      title: 'Enrollment Information',
      modelValue: 'enrollmentInformation',
      modelValueBoolean: true,
      row: [
        {
          name: 'category',
          type: 'select',
          validators: [Validators.required],
          options: [
            { value: 'SC', label: 'SC' },
            { value: 'ST', label: 'ST' },
            { value: 'OBC', label: 'OBC' },
            { value: 'General', label: 'General' },
          ],
          placeholder: 'Category',
          floatLabel: 'always',
        },
        {
          name: 'feeWaiver',
            type: 'input',
            validators: [],
            placeholder: 'Fee Waiver',
            floatLabel: 'auto',
        },
        {
          name: 'feeScheme',
          type: 'select',
          validators: [Validators.required],
          options: [
            { value: 'Below 60', label: 'Below 60' },
            { value: 'Between 60-70', label: 'Between 60-70' },
            { value: 'Between 70-80', label: 'Between 70-80' },
            { value: 'Between 80-90', label: 'Between 80-90' },
            { value: 'Above 90', label: 'Above 90' },
          ],
          placeholder: 'Fee Scheme',
          floatLabel: 'always',
        },


      ],
      },
    {
      title: 'Contact Information',
      row: [

      ]
    },
    {
      title: 'Address Information',
      modelValue: 'address',
      modelValueBoolean: true,
      row: [
        {
          name: 'streetAddress',
          type: 'input',
          validators: [Validators.required],
          placeholder: 'Street Address',
          floatLabel: 'always',
        },
        {
          name: 'city',
          type: 'input',
          validators: [Validators.required],
          placeholder: 'City',
          floatLabel: 'always',
        },
        {
          name: 'state',
          type: 'input',
          validators: [Validators.required],
          placeholder: 'State',
          floatLabel: 'always',
        },
        {
          name: 'postalCode',
          type: 'input',
          validators: [Validators.required],
          placeholder: 'Postal Code',
          floatLabel: 'always',
        },
        {
          name: 'country',
          type: 'input',
          validators: [Validators.required],
          placeholder: 'Country',
          floatLabel: 'always',
        },
      ]
    },
    {
      title: 'Contact Information',
      modelValue: 'contactInformation',
      modelValueBoolean: true,
      row: [
        {
          name: 'phoneNumbers',
          type: 'input',
          validators: [Validators.required],
          placeholder: 'Phone Numbers',
          floatLabel: 'always',
        },
        {
          name: 'emailAddresses',
          type: 'input',
          validators: [Validators.required],
          placeholder: 'Email Addresses',
          floatLabel: 'always',
        },
      ]
    },
    {
      title: 'Fees Information',
      modelValue: 'fees',
      modelValueBoolean: true,
      row: [
        {
          name: 'totalAmount',
          type: 'input',
          validators: [Validators.required],
          placeholder: 'Total Amount',
          floatLabel: 'always',
        },
        {
          name: 'dueDate',
          type: 'date',
          validators: [Validators.required],
          placeholder: 'Due Date',
          floatLabel: 'always',
        },
        {
          name: 'paid',
          type: 'input',
          validators: [],
          placeholder: 'Paid',
          floatLabel: 'auto',
        },
      ]
    },
    {
      title: 'Academic Information',
      modelValue: 'academicInformation',
      modelValueBoolean: true,
      row: [
        {
          name: 'tenth',
          type: 'input',
          validators: [Validators.required],
          placeholder: '10th',
          floatLabel: 'always',
        },
        {
          name: 'twelfth',
          type: 'input',
          validators: [Validators.required],
          placeholder: '12th',
          floatLabel: 'always',
        },
        {
          name: 'LEET',
          type: 'input',
          validators: [],
          placeholder: 'LEET',
          floatLabel: 'auto',
        },
        {
          name: 'percentage',
          type: 'input',
          validators: [Validators.required],
          placeholder: 'Percentage',
          floatLabel: 'always',
        },
        {
          name: 'branch',
          type: 'select',
          validators: [Validators.required],
          options: [
            { value: 'CSE', label: 'CSE' },
            { value: 'CE', label: 'CE' },
            { value: 'ME', label: 'ME' },
            { value: 'ECE', label: 'ECE' },
            { value: 'EE', label: 'EE' },
          ],
          placeholder: 'Branch',
          floatLabel: 'always',
        },
        {
          name: 'batch',
          type: 'input',
          validators: [Validators.required],
          placeholder: 'Batch',
          floatLabel: 'always',
        },
      ]
    }
    // Handling AcademicRecords as an array (FormArray) is more complex and might be dynamically managed
  ];

  get studentFormLayoutConfig(): FormRow[] {
    return this.studentFormLayout;
  }
}

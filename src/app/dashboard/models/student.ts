import { Validators } from '@angular/forms';
import { FormRow } from './forms';

export interface StudentModel {
  id: number; // Unique identifier for the student
  enrollmentStatus: 'active' | 'DropOut' | 'suspended' | 'expelled'; // Current enrollment status
  personalInformation: {
    firstName: string;
    lastName: string;
    fullName?: string; // Optional calculated property for convenience
    fatherName: string;
    motherName: string;
    guardianOccupation: string;
    familyIncome: number;
    dateOfBirth: Date;
    gender: 'Male' | 'Female' | 'Other' | 'Prefer not to say';
    bloodGroup: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
    // ...Other relevant personal details
  };
  displayImage: string; // URL to the student's profile picture
  regNumber: string;
  nationality: string;
  admissionDate: Date;
  category: 'SC' | 'ST' | 'OBC' | 'General'; // Caste category for fee calculation
  feeWaiver: 'Yes' | 'No';
  feeScheme: 'Below 60' | 'Between 60-70' | 'Between 70-80' | 'Between 80-90' | 'Above 90'; // Type of fee waiver
  branch: 'CSE'| 'CE' | 'ME' | 'ECE' | 'EE';
  batch: string;
  address: {
    streetAddress?: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  };
  contactInformation: {
    phoneNumbers: string[]; // Array to accommodate multiple phone numbers
    emailAddresses: string[]; // Array to accommodate multiple email addresses
  };
  fees: {
    totalAmount: number;
    dueDate: Date;
    paid: 'Paid' | 'Not Paid';
    paymentHistory?: [{ sem: string; date: Date; amount: number }]; // Track payment history
  };
  academicInformation: {
    tenth : number; // 10th grade percentage
    twelfth : number; // 12th grade percentage
    LEET: 'Yes'|'No'; // Whether the student joined through lateral entry
    percentage: number; // Academic performance percentage
    grades?: { [courseCode: string]: string }; // Map course codes to grades
    // ...Other relevant academic details
  };
  additionalInformation?: { [key: string]: any }; // Flexible field for custom data
}

export class Student implements StudentModel {
  public id: number = 0;
  public enrollmentStatus: 'active' | 'DropOut' | 'suspended' | 'expelled' = 'active';
  public personalInformation: {
    firstName: string;
    lastName: string;
    fatherName: string;
    motherName: string;
    guardianOccupation: string;
    familyIncome: number;
    dateOfBirth: Date;
    bloodGroup: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
    gender: 'Male' | 'Female' | 'Other' | 'Prefer not to say';

  } = {} as any;
  public displayImage: string = '';
  public regNumber: string = '';
  public nationality: string = '';
  public admissionDate: Date = new Date();
  public category: 'SC' | 'ST' | 'OBC' | 'General';
  public feeWaiver: 'Yes' | 'No';
  public feeScheme: 'Below 60' | 'Between 60-70' | 'Between 70-80' | 'Between 80-90' | 'Above 90' = 'Below 60';
  public branch: 'CSE'| 'CE' | 'ME' | 'ECE' | 'EE';
  public batch: string;
  public address: {
    streetAddress?: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  } = {} as any;
  public contactInformation: {
    phoneNumbers: string[];
    emailAddresses: string[];
  } = {} as any;
  public fees: {
    totalAmount: number;
    dueDate: Date;
    paid: 'Paid' | 'Not Paid';
    paymentHistory?: [{ sem: string; date: Date; amount: number }];
  } = {} as any;
  public academicInformation: {
    tenth : number;
    twelfth : number;
    LEET: 'Yes'|'No';
    percentage: number;
    grades?: { [courseCode: string]: string };
  } = {} as any;
  public additionalInformation?: { [key: string]: any } = {};

  constructor(student: StudentModel) {
    this.id = student.id;
    this.enrollmentStatus = student.enrollmentStatus;
    this.personalInformation = student.personalInformation;
    this.displayImage = student.displayImage;
    this.regNumber = student.regNumber;
    this.nationality = student.nationality;
    this.admissionDate = student.admissionDate;
    this.category = student.category;
    this.feeWaiver = student.feeWaiver;
    this.feeScheme = student.feeScheme;
    this.branch = student.branch;
    this.batch = student.batch;
    this.address = student.address;
    this.contactInformation = student.contactInformation;
    this.fees = student.fees;
    this.academicInformation = student.academicInformation;
    this.additionalInformation = student.additionalInformation;
  }
}

export class StudentFormConfig{
  studentFormLayout: FormRow[] = [
    {
      title: 'Personal Information',
      formGroupBoolean : true,
      formGroupName: 'personalInformation',
      groupRow: [
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
          name: 'guardianOccupation',
          type: 'input',
          validators: [Validators.required],
          placeholder: 'Guardian Occupation',
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
          name : 'gender',
          type: 'select',
          validators: [Validators.required],
          options: [
            { value : 'Male', label :'Male'},
            { value : 'Female', label :'Female'},
            { value : 'Other', label :'Other'},
            { value : 'Prefer not to say', label :'Prefer not to say'}
          ],
          placeholder: 'Gender',
          floatLabel: 'always',
        }
      ],
    },
    {
      title: 'Enrollment Information',
      formGroupBoolean : false,
      groupRow: [
        {
          name: 'id',
          type: 'input',
          validators: [Validators.required],
          placeholder: 'ID',
          floatLabel: 'always',
        },
        {
          name: 'regNumber',
          type: 'input',
          validators: [Validators.required],
          placeholder: 'Registration Number',
          floatLabel: 'always',
        },
        {
          name: 'enrollmentStatus',
          type: 'select',
          validators: [Validators.required],
          options: [
            { value: 'active', label: 'Active' },
            { value: 'DropOut', label: 'Drop Out' },
            { value: 'suspended', label: 'Suspended' },
            { value: 'expelled', label: 'Expelled' },
          ],
          placeholder: 'Enrollment Status',
          floatLabel: 'always',
        },
        {
          name: 'admissionDate',
          type: 'date',
          validators: [Validators.required],
          placeholder: 'Admission Date',
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
          name: 'displayImage',
          type: 'input',
          validators: [Validators.required],
          placeholder: 'Display Image',
          floatLabel: 'always',
        },
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
          type: 'select',
          validators: [Validators.required],
          options: [
            { value: 'Yes', label: 'Yes' },
            { value: 'No', label: 'No' },
          ],
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
        {
          name: 'nationality',
          type: 'input',
          validators: [Validators.required],
          placeholder: 'Nationality',
          floatLabel: 'always',
        }
      ]
      },
    {
      title: 'Contact Information',
      formGroupBoolean : true,
      formGroupName: 'contactInformation',
      groupRow: [
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
      title: 'Address Information',
      formGroupBoolean : true,
      formGroupName: 'address',
      groupRow: [
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
      title: 'Fees Information',
      formGroupBoolean : true,
      formGroupName: 'fees',
      formArrayBoolean: true,
      groupRow: [
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
          type: 'select',
          validators: [Validators.required],
          options: [
            { value: 'Paid', label: 'Paid' },
            { value: 'Not Paid', label: 'Not Paid' },
          ],
          placeholder: 'Paid',
          floatLabel: 'auto',
        },
      ],
      arrayRow:
        {
          title: 'Payment History',
          formArrayBoolean : true,
          formArrayName: 'paymentHistory',
          rowInArray: [
            {
              name: 'sem',
              type: 'input',
              validators: [Validators.required],
              placeholder: 'Semester',
              floatLabel: 'always',
            },
            {
              name: 'date',
              type: 'date',
              validators: [Validators.required],
              placeholder: 'Date',
              floatLabel: 'always',
            },
            {
              name: 'amount',
              type: 'input',
              validators: [Validators.required],
              placeholder: 'Amount',
              floatLabel: 'always',
            },
          ]
        }
    },
    {
      title: 'Academic Information',
      formGroupBoolean : true,
      formGroupName: 'academicInformation',
      groupRow: [
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
          type: 'select',
          validators: [],
          options: [
            { value: 'Yes', label: 'Yes'},
            { value: 'No', label: 'No'},
          ],
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
      ]
    }
    // Handling AcademicRecords as an array (FormArray) is more complex and might be dynamically managed
  ];

  get studentFormLayoutConfig(): FormRow[] {
    return this.studentFormLayout;
  }
}

import { Validators } from '@angular/forms';
import { FormRow } from './forms';

export class StudentUpdate {
  student : StudentUpdated;

  constructor(student: StudentUpdated) {
    this.student = student;
  }
}

export interface StudentUpdated {
  id: string;
  enrollmentStatus: EnrollmentStatus;
  personalInformation: PersonalInformation;
  enrollmentInformation: EnrollmentInformation;
  address: Address;
  contactInformation: ContactInformation;
  fees: Fees;
  academicInformation: AcademicInformation;
  additionalInformation: { [key: string]: any };
   // ... constructor logic
}

export interface PersonalInformation {
  firstName: string;
  lastName: string;
  fullName?: string; // Optional calculated property
  fatherName: string;
  motherName: string;
  guardianOccupation: string;
  familyIncome: number;
  dateOfBirth: Date;
  bloodGroup: BloodGroup;
  gender: string;
  nationality: string;
  displayImage: string; // URL to the student's profile picture
  // ...Other relevant personal details
}

export interface EnrollmentInformation {
  regNumber: string;
  admissionDate: Date;
  category: EnrollmentCategory;
  feeWaiver: boolean;
  feeScheme: FeeScheme; // Type of fee waiver
}

export interface Address {
  streetAddress?: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}

export interface ContactInformation {
  phoneNumbers: string[]; // Array to accommodate multiple phone numbers
  emailAddresses: string[]; // Array to accommodate multiple email addresses
}

export interface Fees {
  totalAmount: number;
  dueDate: Date;
  paid: boolean;
  paymentHistory: { sem: number; date: Date; amount: number }[]; // Track payment history
}

export interface AcademicInformation {
  tenth: number; // 10th grade percentage
  twelfth: number; // 12th grade percentage
  LEET: boolean; // Whether the student joined through lateral entry
  percentage: number; // Academic performance percentage
  branch: Branch;
  batch: number;
  grades: { [courseCode: string]: string }; // Map course codes to grades
  // ...Other relevant academic details
}

type EnrollmentStatus = 'active' | 'DropOut' | 'suspended' | 'expelled';
type BloodGroup = 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
type EnrollmentCategory = 'SC' | 'ST' | 'OBC' | 'General';
type FeeScheme = 'Below 60' | 'Between 60-70' | 'Between 70-80' | 'Between 80-90' | 'Above 90';
type Branch = 'CSE' | 'CE' | 'ME' | 'ECE' | 'EE';

// Optional constructor parameter for partial data


interface StudentModel {
  id: string; // Unique identifier for the student
  enrollmentStatus: 'active' | 'DropOut' | 'suspended' | 'expelled'; // Current enrollment status
  personalInformation: {
    firstName: string;
    lastName: string;
    fullName: string; // Optional calculated property for convenience
    fatherName: string;
    motherName: string;
    guardianOccupation: string;
    familyIncome: number;
    dateOfBirth: Date;
    bloodGroup: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
    gender: string;
    nationality: string;
    displayImage: string; // URL to the student's profile picture
    // ...Other relevant personal details
  };
  enrollmentInformation: {
    regNumber: string;
    admissionDate: Date;
    category: 'SC' | 'ST' | 'OBC' | 'General'; // Caste category for fee calculation
    feeWaiver: boolean;
    feeScheme: 'Below 60' | 'Between 60-70' | 'Between 70-80' | 'Between 80-90' | 'Above 90'; // Type of fee waiver
  }
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
    paid: boolean;
    paymentHistory: [{ sem: number; date: Date; amount: number }]; // Track payment history
  };
  academicInformation: {
    tenth : number; // 10th grade percentage
    twelfth : number; // 12th grade percentage
    LEET: boolean; // Whether the student joined through lateral entry
    percentage: number; // Academic performance percentage
    branch: 'CSE'| 'CE' | 'ME' | 'ECE' | 'EE';
    batch: number;
    grades: { [courseCode: string]: string }; // Map course codes to grades
    // ...Other relevant academic details
  };
  additionalInformation: { [key: string]: any }; // Flexible field for custom data
}

export class Student implements StudentModel {

  constructor(
    public id: string,
    public enrollmentStatus: 'active' | 'DropOut' | 'suspended' | 'expelled',
    public personalInformation: {
      firstName: string;
      lastName: string;
      fullName: string;
      fatherName: string;
      motherName: string;
      guardianOccupation: string;
      familyIncome: number;
      dateOfBirth: Date;
      bloodGroup: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
      displayImage: string,
      gender: string,
      nationality: string,
    },
    public enrollmentInformation: {
      regNumber: string,
      admissionDate: Date,
      category: 'SC' | 'ST' | 'OBC' | 'General',
      feeWaiver: boolean,
      feeScheme: 'Below 60' | 'Between 60-70' | 'Between 70-80' | 'Between 80-90' | 'Above 90',
    },
    public address: {
      streetAddress?: string;
      city: string;
      state: string;
      postalCode: string;
      country: string;
    },
    public contactInformation: {
      phoneNumbers: string[];
      emailAddresses: string[];
    },
    public fees: {
      totalAmount: number;
      dueDate: Date;
      paid: boolean;
      paymentHistory: [{ sem: number; date: Date; amount: number }];
    },
    public academicInformation: {
      tenth: number;
      twelfth: number;
      LEET: boolean;
      percentage: number;
      branch: 'CSE'| 'CE' | 'ME' | 'ECE' | 'EE';
      batch: number;
      grades: { [courseCode: string]: string };
    },
    public additionalInformation: { [key: string]: any } = {}
  ) {}

  // Custom methods as needed, e.g., for calculating fees breakdown, checking academic standing, etc.
}

export class StudentFormConfig{
  studentFormLayout: FormRow[] = [
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

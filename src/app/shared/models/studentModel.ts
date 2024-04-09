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

export interface AcademicInformation {
  tenth: number; // 10th grade percentage
  twelfth: number; // 12th grade percentage
  LEET: boolean; // Whether the student joined through lateral entry
  percentage: number; // Academic performance percentage
  branch: Branch;
  batch: string;
  grades: { [courseCode: string]: string }; // Map course codes to grades
  // ...Other relevant academic details
}

export interface Fees {
  totalAmount: number;
  paymentHistory: FeesDetailed[]; // Track payment history
}

export interface FeesDetailed {
  feesID: string;
  sem : number;
  amount: number;
  session: string;
  paid?: boolean;
  // ...Other relevant fee details
}

export interface FeesAcademicSection extends FeesDetailed{
  regNumber: string;
  branch: Branch;
  batch: string;
  paymentStatus: string;
  paymentMode?: string;
  paymentDate: Date;
  paymentReference?: string;

  // ...Other relevant fee details
}

type EnrollmentStatus = 'active' | 'DropOut' | 'suspended' | 'expelled';
type BloodGroup = 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
type EnrollmentCategory = 'SC' | 'ST' | 'OBC' | 'General';
type FeeScheme = 'Below 60' | 'Between 60-70' | 'Between 70-80' | 'Between 80-90' | 'Above 90';
type Branch = 'CSE' | 'CE' | 'ME' | 'ECE' | 'EE';


export interface StudentModel {
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

// Optional constructor parameter for partial data

export class StudentClass {
  student: StudentModel;

  constructor() {
    this.student = {
      id: "123456",
      enrollmentStatus: "active",
      personalInformation: {
        firstName: "John",
        lastName: "Doe",
        fatherName: "Richard Doe",
        motherName: "Jane Doe",
        guardianOccupation: "Engineer",
        familyIncome: 50000,
        dateOfBirth: new Date('2000-01-01'),
        bloodGroup: "A+",
        gender: "Male",
        nationality: "American",
        displayImage: "https://example.com/path/to/image.jpg",
      },
      enrollmentInformation: {
        regNumber: "REG123456",
        admissionDate: new Date('2022-08-01'),
        category: "General",
        feeWaiver: false,
        feeScheme: "Above 90",
      },
      address: {
        city: "New York",
        state: "NY",
        postalCode: '10001',
        country: "USA",
      },
      contactInformation: {
        phoneNumbers: ["123-456-7890"],
        emailAddresses: ["johndoe@example.com"],
      },
      fees: {
        totalAmount: 20000,
        paymentHistory: [
          {
            feesID: "FEE123456",
            sem: 1,
            amount: 5000 ,
            session: "2023-24",
            paid: true,
          }
        ],
      },
      academicInformation: {
        tenth: 95,
        twelfth: 90,
        LEET: false,
        percentage: 92,
        branch: "CSE",
        batch: '2022',
        grades: { "COMP101": "A", "MATH101": "A-" },
      },
      additionalInformation: {}
    };
  }
}


export interface SimpleStudentModal {
  id: string;
  regNumber: string;
  batch: string;
  name: string;
  fatherName: string;
  dateOfBirth?: Date;
  displayImage: string;
  branch: Branch;
  contact: string;
}

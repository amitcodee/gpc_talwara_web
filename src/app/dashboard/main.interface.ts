// student.model.ts
export interface Student {
  id?: number; // Optional ID for existing students
  firstName: string;
  lastName: string;
  middleName?: string;
  dateOfBirth: Date;
  gender: string;
  contactNumber: string;
  email: string;
  address: Address;
  branch: Branch;
  semester: number;
  admissionYear: number;
  enrollmentStatus: string; // Active, Inactive, etc.
  academicRecords?: AcademicRecord[]; // Array of past semester records
  notes?: string;
}

export interface Address extends Student{
  street1: string;
  street2?: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}

export interface Branch extends Student{
  name: string;
  abbreviation: string; // Optional for display
}

export interface AcademicRecord extends Student{
  semester: number;
  year: number;
  averageGPA: number;
  courses?: CourseRecord[]; // Array of courses taken in that semester
}

export interface CourseRecord extends Student {
  name: string;
  code: string;
  credits: number;
  grade: string;
}

// Getter to combine full name for display
export function getFullName(student: Student): string {
  return `${student.firstName} ${student.middleName ? student.middleName + ' ' : ''}${student.lastName}`;
}

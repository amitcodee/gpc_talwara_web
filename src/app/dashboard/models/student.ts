interface StudentModel {
  id: number; // Unique identifier for the student
  firstName: string;
  lastName: string;
  fullName: string; // Optional calculated property for convenience
  displayImage: string; // URL to the student's profile picture
  dateOfBirth: Date;
  regNumber: string;
  demographics: {
    gender: string;
    ethnicity: string;
    nationality: string;
    // ...Other relevant demographics
  };
  address: {
    streetAddress: string;
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
    paymentHistory: [{ date: Date; amount: number }]; // Track payment history
  };
  academicInformation: {
    program: string;
    yearOfStudy: number;
    coursesEnrolled: string[]; // Array of course codes
    grades: { [courseCode: string]: string }; // Map course codes to grades
    // ...Other relevant academic details
  };
  additionalInformation: { [key: string]: any }; // Flexible field for custom data
}

export class Student implements StudentModel {
  fullName: StudentModel['fullName']; // Optional calculated property for convenience
  constructor(
    public id: number,
    public firstName: string,
    public lastName: string,
    public displayImage: string,
    public dateOfBirth: Date,
    public regNumber: string,
    public demographics: {
      gender: string;
      ethnicity: string;
      nationality: string;
      // ...Other relevant demographics
    },
    public address: {
      streetAddress: string;
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
      paymentHistory: [{ date: Date; amount: number }];
    },
    public academicInformation: {
      program: string;
      yearOfStudy: number;
      coursesEnrolled: string[];
      grades: { [courseCode: string]: string };
      // ...Other relevant academic details
    },
    public additionalInformation: { [key: string]: any } = {}
  ) {
    this.fullName = `${this.firstName} ${this.lastName}`;
  }

  // Custom methods as needed, e.g., for calculating fees breakdown, checking academic standing, etc.
}

import {Student} from './student';

export const studentData: Student[] =[
  {
    id: 1,
    enrollmentStatus: 'active',
    personalInformation: {
      firstName: 'John',
      lastName: 'Doe',
      fatherName: 'Richard Doe',
      motherName: 'Jane Doe',
      guardianOccupation: 'Software Engineer',
      familyIncome: 55000,
      dateOfBirth: new Date(1999, 10, 25), // 25th November 1999
      bloodGroup: 'A+',
      fullName: ''
    },
    displayImage: 'https://example.com/profile-images/john-doe.jpg',
    regNumber: '2023CSE001',
    gender: 'Male',
    nationality: 'Indian',
    admissionDate: new Date(2023, 6, 1), // 1st July 2023
    category: 'General',
    feeWaiver: false,
    feeScheme: 'Between 70-80',
    address: {
      city: 'New Delhi',
      state: 'Delhi',
      postalCode: '110011',
      country: 'India'
    },
    contactInformation: {
      phoneNumbers: ['+919876543210'],
      emailAddresses: ['john.doe@example.com']
    },
    fees: {
      totalAmount: 50000,
      dueDate: new Date(2024, 0, 15), // 15th January 2024
      paid: false,
      paymentHistory: [{ sem: 0, date: new Date(), amount: 0 }]
    },
    academicInformation: {
      tenth: 85,
      twelfth: 89,
      LEET: false,
      percentage: 87.5,
      branch: 'CSE',
      batch: 2023,
      grades: {} // Replace with actual grades for courses
    },
    additionalInformation: {}
  },
]
  // ... Add more student objects with similarly structured data

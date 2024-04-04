import {Student} from './student';

export const studentData: Student[] =[
  {
    personalInformation: {
      firstName: 'John',
      lastName: 'Doe',
      fatherName: 'Richard Doe',
      motherName: 'Jane Doe',
      guardianOccupation: 'Software Engineer',
      familyIncome: 55000,
      dateOfBirth: new Date(1999, 10, 25), // 25th November 1999
      bloodGroup: 'A+',
      gender: 'Male',
    },
    id: 1,
    regNumber: '2023CSE001',
    enrollmentStatus: 'active',
    admissionDate: new Date(2023, 6, 1), // 1st July 2023
    batch: '2023',
    branch: 'CSE',
    displayImage: 'https://example.com/profile-images/john-doe.jpg',
    category: 'General',
    feeWaiver: 'Yes',
    feeScheme: 'Between 70-80',
    nationality: 'Indian',
    address: {
      streetAddress: '123, ABC Street',
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
      paid: 'Paid',
      paymentHistory: [
        {
          sem: '1st',
          date: new Date(2023, 6, 1), // 1st July 2023
          amount: 50000,
        }
      ]
    },
    academicInformation: {
      tenth: 85,
      twelfth: 89,
      LEET: 'Yes',
      percentage: 87.5,// Replace with actual grades for courses
    },
  },
]
  // ... Add more student objects with similarly structured data

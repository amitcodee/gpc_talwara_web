import { Injectable } from '@angular/core';
import {StudentModel} from './studentModel';
@Injectable({
  providedIn: 'root'
})
export class RandomStudentDataService {

  constructor() { }

  generateRandomStudent(): StudentModel {
    return {
      id: this.getRandomInt(1000, 9999).toString(), // Replace with desired ID range
      enrollmentStatus: this.getRandomEnumValue(['active', 'DropOut', 'suspended', 'expelled']),
      personalInformation: {
        firstName: this.getRandomName('firstName'),
        lastName: this.getRandomName('lastName'),
        fatherName: this.getRandomName('firstName') + ' ' + this.getRandomName('lastName'),
        motherName: this.getRandomName('firstName') + ' ' + this.getRandomName('lastName'),
        guardianOccupation: this.getRandomOccupation(),
        familyIncome: this.getRandomInt(20000, 100000), // Adjust income range
        dateOfBirth: this.getRandomDate(18, 22), // Adjust age range
        bloodGroup: this.getRandomEnumValue(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']),
        fullName: '',
        gender: this.getRandomEnumValue(['Male', 'Female']),
        nationality: this.getRandomCountry(),
        displayImage: ''
      },
      enrollmentInformation:{
        regNumber: '',
        admissionDate:  this.getRandomDate(0, 1),
        category: this.getRandomEnumValue(['SC', 'ST', 'OBC', 'General']),,
        feeWaiver: Math.random() < 0.1,
        feeScheme: this.getRandomEnumValue(['Below 60', 'Between 60-70', 'Between 70-80', 'Between 80-90', 'Above 90']),
      },
      address: {
        city: this.getRandomCity(),
        state: this.getRandomState(),
        postalCode: this.getRandomInt(100000, 999999).toString(),
        country: this.getRandomCountry()
      },
      contactInformation: {
        phoneNumbers: [this.generatePhoneNumber()],
        emailAddresses: [this.generateEmail()]
      },
      fees: {
        totalAmount: this.getRandomInt(20000, 50000), // Adjust fee range
        dueDate: this.getNextMonthDate(),
        paid: Math.random() < 0.5, // 50% chance of being paid
        paymentHistory: [{sem: 0, date: new Date(), amount: 0}]
      },
      academicInformation: {
        tenth: this.getRandomInt(60, 100),
        twelfth: this.getRandomInt(60, 100),
        LEET: Math.random() < 0.2, // 20% chance of joining through LEET
        percentage: (100/2) / 2,
        branch: this.getRandomEnumValue(['CSE', 'CE', 'ME', 'ECE', 'EE']),
        batch: this.getCurrentYear(),
        grades: {}, // Replace with actual grades generation logic
      },
      additionalInformation: {}
    };
  }

  // Helper functions for generating random values
  private getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  private getRandomEnumValue<T>(values: T[]): T {
    const index = Math.floor(Math.random() * values.length);
    return values[index];
  }

  private getRandomName(type: 'firstName' | 'lastName'): string {
    const names = {
      firstName: [
        'John', 'Jane', 'David', 'Mary', 'Michael', 'Elizabeth', 'Robert', 'Sarah', 'William', 'Jennifer',
        'Daniel', 'Jessica', 'Andrew', 'Ashley', 'James', 'Emily', 'Matthew', 'Amanda', 'Joseph', 'Stephanie'
      ],
      lastName: [
        'Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Miller', 'Davis', 'Garcia', 'Rodriguez', 'Wilson',
        'Anderson', 'Taylor', 'Thomas', 'Moore', 'Hernandez', 'Martin', 'Lewis', 'Walker', 'Clark', 'Robinson'
      ]
    };
    const randomIndex = Math.floor(Math.random() * names[type].length);
    return names[type][randomIndex];
  }

  // Get a random occupation
  private getRandomOccupation(): string {
    const occupations = [
      'Software Engineer', 'Doctor', 'Teacher', 'Accountant', 'Marketing Manager', 'Sales Manager',
      'Graphic Designer', 'Web Developer', 'Nurse', 'Lawyer', 'Engineer', 'Police Officer', 'Firefighter',
      'Customer Service Representative', 'Truck Driver', 'Retail Salesperson', 'Chef', 'Hairdresser', 'Mechanic'
    ];
    const randomIndex = Math.floor(Math.random() * occupations.length);
    return occupations[randomIndex];
  }

  // Generate a random registration number (example format)
  private generateRegNumber(): string {
    const year = new Date().getFullYear().toString().slice(2); // Get last two digits of current year
    const randomSuffix = Math.floor(Math.random() * 10000).toString().padStart(4, '0'); // Random 4-digit number
    return `20${year}${randomSuffix}`;
  }

  // Generate a random phone number (example US format)
  private generatePhoneNumber(): string {
    const areaCode = Math.floor(Math.random() * 900) + 100; // Random area code (excluding 911)
    const firstThree = Math.floor(Math.random() * 900) + 100; // Random first three digits
    const lastFour = Math.floor(Math.random() * 10000) + 1000; // Random last four digits
    return `(${areaCode}) <span class="math-inline">\{firstThree\}\-</span>{lastFour}`;
  }

  // Generate a random email address (example format)
  private generateEmail(): string {
    const firstName = this.getRandomName('firstName').toLowerCase();
    const lastName = this.getRandomName('lastName').toLowerCase();
    const domain = ['gmail.com', 'yahoo.com', 'hotmail.com'][Math.floor(Math.random() * 3)];
    return `<span class="math-inline">\{firstName\}\.</span>{lastName}@${domain}`;
  }

  // Get a random city name from a list
  private getRandomCity(): string {
    const cities = [
      'New York City', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia', 'San Antonio',
      'San Diego', 'Dallas', 'San Jose', 'Jacksonville', 'Columbus', 'Indianapolis', 'Charlotte', 'Fort Worth',
      'Austin', 'Memphis', 'Baltimore', 'Denver'
    ];
    const randomIndex = Math.floor(Math.random() * cities.length);
    return cities[randomIndex];
  }

  // Get a random state abbreviation from a list
  private getRandomState(): string {
    const states = ['CA', 'TX', 'FL', 'NY', 'PA', 'IL', 'OH', 'GA', 'NC', 'NJ'];
    const randomIndex = Math.floor(Math.random() * states.length);
    return states[randomIndex];
  }

  // Get a random country from a list
  private getRandomCountry(): string {
    const countries = [
      'United States', 'India', 'China', 'Japan', 'Brazil', 'Germany', 'United Kingdom', 'France',
      'Russia', 'Mexico', 'Italy', 'South Korea', 'Canada', 'Spain', 'Indonesia', 'Argentina', 'Australia',
      'Nigeria', 'Poland'
    ];
    const randomIndex = Math.floor(Math.random() * countries.length);
    return countries[randomIndex];
  }

  private getNextMonthDate(): Date {
    const now = new Date();
    const nextMonth = now.getMonth() + 1; // Add 1 for next month
    const year = (nextMonth === 12) ? now.getFullYear() + 1 : now.getFullYear(); // Adjust year if next month is December
    return new Date(year, nextMonth, 1); // Set the date to the 1st of the next month
  }

  // Get a random date within a specified range (years)
  private getRandomDate(yearsAgo: number, yearsAhead: number): Date {
    const minDate = new Date();
    minDate.setFullYear(minDate.getFullYear() - yearsAgo);
    const maxDate = new Date();
    maxDate.setFullYear(maxDate.getFullYear() + yearsAhead);
    const randomTime = Math.floor(Math.random() * (maxDate.getTime() - minDate.getTime() + 1)) + minDate.getTime();
    return new Date(randomTime);
  }

  private getCurrentYear(): number {
    return new Date().getFullYear();
  }
}

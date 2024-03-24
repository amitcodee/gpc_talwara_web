import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { StudentModel, SimpleStudentModal, Fees, FeesAcademicSection, FeesDetailed } from '../models/studentModel';
import { map, Timestamp } from 'rxjs';


@Injectable({ providedIn: 'root' })

export class StudentService {

  constructor( private af: AngularFireAuth, private afs: AngularFirestore) {

  }


  deleteStudent(studentId: string) {
    // Delete student data from Firestore
  }

  addStudent(student: StudentModel) {
    student.fees = this.calculateStudentFees(student);
    let regNumber= student.enrollmentInformation.regNumber;
    let simpleStudent = this.createSimpleStudent(student);
    let feesAcademicSection = this.mapFeesDetailsToAcademicSection(student.fees.paymentHistory, student);
    // Add student data to Firestore
    try {
      this.afs.collection('students').doc(regNumber).set(student);
      this.afs.collection('simpleStudents').doc(regNumber).set(simpleStudent);
      for (let i = 0; i < feesAcademicSection.length; i++) {
        console.log(feesAcademicSection[i]);
        this.afs.collection('feesAcademicSection').doc(feesAcademicSection[i].feesID).set(feesAcademicSection[i]);
      }
      //this.afs.collection('feesAcademicSection').doc(feesAcademicSection.forEach());
      console.log('Student data updated successfully');
    } catch (error) {
      console.error(error);
    }
  }

  getStudents() {

    return this.afs.collection('simpleStudents').valueChanges();    // Fetch all student data from Firestore
  }

  getStudentByID(studentId: string) {
    return this.afs.collection('students').doc(studentId).valueChanges();    // Fetch all student data from Firestore
  }

  createSimpleStudent(student: StudentModel) {
    const test: SimpleStudentModal = {
      id: student.id,
      name: student.personalInformation.firstName + ' ' + student.personalInformation.lastName,
      fatherName: student.personalInformation.fatherName,
      regNumber: student.enrollmentInformation.regNumber,
      batch: student.academicInformation.batch,
      displayImage: student.personalInformation.displayImage,
      branch: student.academicInformation.branch,
      contact: student.contactInformation.phoneNumbers[0],
    };
    return test;
  }

  calculateStudentFees(student: StudentModel): Fees {
    let fees: Fees = {
      totalAmount: 0,
      paymentHistory: [],
    };


    // Check for fee waiver first
    if (student.enrollmentInformation.feeWaiver) {
      return fees = {
        totalAmount: 7150,
        paymentHistory: [
          { feesID: '', sem: 1, amount: 7150, session: '2023-24', paid: false},
          { feesID: '', sem: 2, amount: 0, session: '2023-24', paid: false},
          { feesID: '', sem: 3, amount: 7150, session: '2023-24', paid: false},
          { feesID: '', sem: 4, amount: 0, session: '2023-24', paid: false},
          { feesID: '', sem: 5, amount: 7150, session: '2023-24', paid: false},
          { feesID: '', sem: 6, amount: 0, session: '2023-24', paid: false},
        ],
      };
    }
    // Check for SC category with low family income
    if (student.personalInformation.familyIncome < 250000 && student.enrollmentInformation.category === 'SC') {
      return fees = {
        totalAmount: 1133,
        paymentHistory: [
          { feesID: '', sem: 1, amount: 1133, session: '2023-24', paid: false},
          { feesID: '', sem: 2, amount: 0, session: '2023-24', paid: false},
          { feesID: '', sem: 3, amount: 0, session: '2023-24', paid: false},
          { feesID: '', sem: 4, amount: 0, session: '2023-24', paid: false},
          { feesID: '', sem: 5, amount: 0, session: '2023-24', paid: false},
          { feesID: '', sem: 6, amount: 0, session: '2023-24', paid: false},
        ],
      };
    }
    // LEET and 12th marks based conditions
    const tenthMarks = student.academicInformation?.tenth;
    const twelfthMarks = student.academicInformation?.twelfth;
    const isLEET = student.academicInformation?.LEET;

      // Check for fee waiver first
      if (student.enrollmentInformation.feeWaiver && isLEET === true) {
        return fees = {
          totalAmount: 7150,
          paymentHistory: [
            { feesID: '', sem: 3, amount: 7150, session: '2023-24', paid: false},
            { feesID: '', sem: 4, amount: 0, session: '2023-24', paid: false},
            { feesID: '', sem: 5, amount: 7150, session: '2023-24', paid: false},
            { feesID: '', sem: 6, amount: 0, session: '2023-24', paid: false},
          ],
        };
      }

  // Check for SC category with low family income
  if (student.personalInformation.familyIncome < 250000 && student.enrollmentInformation.category === 'SC' && isLEET === true) {
    return fees = {
      totalAmount: 1133,
      paymentHistory: [
        { feesID: '', sem: 3, amount: 1133, session: '2023-24', paid: false},
        { feesID: '', sem: 4, amount: 0, session: '2023-24', paid: false},
        { feesID: '', sem: 5, amount: 0, session: '2023-24', paid: false},
        { feesID: '', sem: 6, amount: 0, session: '2023-24', paid: false},
      ],
    };
  }


    if (isLEET && twelfthMarks) {
      if (twelfthMarks < 60) {
        fees = {
          totalAmount: 30000,
          paymentHistory: [
            { feesID: '', sem: 3, amount: 18000, session: '2023-24', paid: false},
            { feesID: '', sem: 4, amount: 11000, session: '2023-24', paid: false},
            { feesID: '', sem: 5, amount: 18000, session: '2023-24', paid: false},
            { feesID: '', sem: 6, amount: 11000, session: '2023-24', paid: false},
          ],
        };
      } else if (twelfthMarks >= 60 && twelfthMarks < 70) {
        fees = {
          totalAmount: 14000,
          paymentHistory: [
            { feesID: '', sem: 3, amount: 9350, session: '2023-24', paid: false},
            { feesID: '', sem: 4, amount: 3300, session: '2023-24', paid: false},
            { feesID: '', sem: 5, amount: 9350, session: '2023-24', paid: false},
            { feesID: '', sem: 6, amount: 3300, session: '2023-24', paid: false},
          ],
        };
      } else if (twelfthMarks >= 70 && twelfthMarks < 80) {
        fees = {
          totalAmount: 11000,
          paymentHistory: [
            { feesID: '', sem: 3, amount: 8250, session: '2023-24', paid: false},
            { feesID: '', sem: 4, amount: 2200, session: '2023-24', paid: false},
            { feesID: '', sem: 5, amount: 8250, session: '2023-24', paid: false},
            { feesID: '', sem: 6, amount: 2200, session: '2023-24', paid: false},
          ],
        };
      } else if (twelfthMarks >= 80 && twelfthMarks < 90) {
        fees = {
          totalAmount: 9350,
          paymentHistory: [
            { feesID: '', sem: 3, amount: 7150, session: '2023-24', paid: false},
            { feesID: '', sem: 4, amount: 1100, session: '2023-24', paid: false},
            { feesID: '', sem: 5, amount: 7150, session: '2023-24', paid: false},
            { feesID: '', sem: 6, amount: 1100, session: '2023-24', paid: false},
          ],
        };
      } else if (twelfthMarks >= 90) {
        fees = {
          totalAmount: 7150,
          paymentHistory: [
            { feesID: '', sem: 3, amount: 7150, session: '2023-24', paid: false},
            { feesID: '', sem: 4, amount: 0, session: '2023-24', paid: false},
            { feesID: '', sem: 5, amount: 7150, session: '2023-24', paid: false},
            { feesID: '', sem: 6, amount: 0, session: '2023-24', paid: false},
          ],
        };
      }
    } else if (!isLEET && tenthMarks) {
      if (tenthMarks < 60) {
        fees = {
          totalAmount: 1133,
          paymentHistory: [
            { feesID: '', sem: 1, amount: 1133, session: '2023-24', paid: false},
            { feesID: '', sem: 2, amount: 0, session: '2023-24', paid: false},
            { feesID: '', sem: 3, amount: 0, session: '2023-24', paid: false},
            { feesID: '', sem: 4, amount: 0, session: '2023-24', paid: false},
            { feesID: '', sem: 5, amount: 0, session: '2023-24', paid: false},
            { feesID: '', sem: 6, amount: 0, session: '2023-24', paid: false},
          ],
        }
      } else if (tenthMarks >= 60 && tenthMarks < 70) {
        fees = {
          totalAmount: 1133,
          paymentHistory: [
            { feesID: '', sem: 1, amount: 1133, session: '2023-24', paid: false},
            { feesID: '', sem: 2, amount: 0, session: '2023-24', paid: false},
            { feesID: '', sem: 3, amount: 0, session: '2023-24', paid: false},
            { feesID: '', sem: 4, amount: 0, session: '2023-24', paid: false},
            { feesID: '', sem: 5, amount: 0, session: '2023-24', paid: false},
            { feesID: '', sem: 6,amount: 0, session: '2023-24', paid: false},
          ],
        }
      } else if (tenthMarks >= 70 && tenthMarks < 80) {
        fees = {
          totalAmount: 1133,
          paymentHistory: [
            { feesID: '', sem: 1, amount: 1133, session: '2023-24', paid: false},
            { feesID: '', sem: 2, amount: 0, session: '2023-24', paid: false},
            { feesID: '', sem: 3, amount: 0, session: '2023-24', paid: false},
            { feesID: '', sem: 4, amount: 0, session: '2023-24', paid: false},
            { feesID: '', sem: 5, amount: 0, session: '2023-24', paid: false},
            { feesID: '', sem: 6, amount: 0, session: '2023-24', paid: false},
          ],
        }
      } else if (tenthMarks >= 80 && tenthMarks < 90) {
        fees = {
          totalAmount: 1133,
          paymentHistory: [
            { feesID: '', sem: 1, amount: 1133, session: '2023-24', paid: false},
            { feesID: '', sem: 2, amount: 0, session: '2023-24', paid: false},
            { feesID: '', sem: 3, amount: 0, session: '2023-24', paid: false},
            { feesID: '', sem: 4, amount: 0, session: '2023-24', paid: false},
            { feesID: '', sem: 5, amount: 0, session: '2023-24', paid: false},
            { feesID: '', sem: 6, amount: 0, session: '2023-24', paid: false},
          ],
        }
      }else if (tenthMarks >= 90) {
        fees = {
          totalAmount: 7150,
          paymentHistory: [
            { feesID: '', sem: 1, amount: 7150, session: '2023-24', paid: false},
            { feesID: '', sem: 2, amount: 0, session: '2023-24', paid: false},
            { feesID: '', sem: 3, amount: 7150, session: '2023-24', paid: false},
            { feesID: '', sem: 4, amount: 0, session: '2023-24', paid: false},
            { feesID: '', sem: 5, amount: 7150, session: '2023-24', paid: false},
            { feesID: '', sem: 6, amount: 0, session: '2023-24', paid: false},
          ],
        }
      }
    }

    fees.paymentHistory.forEach(fee =>
      fee.feesID = student.personalInformation.firstName.substring(0, 3)
                  + student.enrollmentInformation.regNumber.slice(-5) + fee.sem);
    console.log(fees);
    return fees;
  }

   mapFeesDetailsToAcademicSection(paymentHistory: FeesDetailed[], student: StudentModel): FeesAcademicSection[] {
    return paymentHistory.map(fee => ({
      ...fee, // Copy properties from the original FeeDetailed object
      regNumber: student.enrollmentInformation.regNumber, // Assuming student object is accessible
      branch: student.academicInformation.branch, // Assuming student object has a branch property
      batch: student.academicInformation.batch, // Assuming student object has a batch property
      paymentStatus: 'Pending', // Set payment status based on paid flag
      paymentDate: new Date(), // Set payment date if paid
      // ...Other relevant details to be mapped
    }));
  }

  getStudentFees(){
    let test = this.afs.collection('feesAcademicSection').snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as FeesAcademicSection;
          return { ...data };
        });
      })
    );
    return test
  }
}

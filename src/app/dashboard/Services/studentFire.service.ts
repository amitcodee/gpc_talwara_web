import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { StudentModel, SimpleStudentModal } from '../models/studentModel';


@Injectable({ providedIn: 'root' })

export class StudentService {

  constructor( private af: AngularFireAuth, private afs: AngularFirestore) {

  }

  async updateStudentData(student: StudentModel) {
    try {
      this.afs.collection('students').doc(student.id).set(student);
      console.log('Student data updated successfully');
    } catch (error) {
      console.error(error);
    }
  }

  getStudentData(studentId: string) {
    // Fetch student data from Firestore
  }

  deleteStudent(studentId: string) {
    // Delete student data from Firestore
  }

  addStudent(student: StudentModel) {
    const test: SimpleStudentModal = {
      id: student.id,
      name: student.personalInformation.firstName + ' ' + student.personalInformation.lastName,
      fatherName: student.personalInformation.fatherName,
      regNumber: student.enrollmentInformation.regNumber,
      batch: student.academicInformation.batch,
      displayImage: student.personalInformation.displayImage,
      branch: student.academicInformation.branch,
      contact: student.contactInformation.phoneNumbers[0],
    }
    console.log(test);
    // Add student data to Firestore
    try {
      this.afs.collection('students').doc(student.id).set(student);
      console.log('Student data updated successfully');
    } catch (error) {
      console.error(error);
    }

    try
    {
      this.afs.collection('simpleStudents').doc(student.id).set(test);
      console.log('Simple student data updated successfully');
    } catch (error) {
      console.error(error);
    }
  }

  getStudents() {

    return this.afs.collection('simpleStudents').valueChanges();    // Fetch all student data from Firestore
  }

}

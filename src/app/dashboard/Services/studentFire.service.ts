import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { StudentModel } from '../models/studentModel';


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

  addStudent(student: any) {
    // Add student data to Firestore
  }

  getStudents() {
    // Fetch all student data from Firestore
  }

}

import { Injectable } from '@angular/core';
// import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
// import { auth } from 'firebase/app';
// import { map } from 'rxjs/operators';
// import { User } from '../models/user.model'; // Assuming a User model
import { Student } from '../models/student'; // Assuming a Student model

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  // private studentsCollection: AngularFirestoreCollection<Student>;
  // private currentUser: User = null;

  // constructor(private db: AngularFirestore) {
  //   auth().onAuthStateChanged(user => {
  //     this.currentUser = user;
  //     if (user) {
  //       this.studentsCollection = this.db.collection<Student>('students', ref => ref.where('createdBy', '==', user.uid));
  //     } else {
  //       this.studentsCollection = null;
  //     }
  //   });
  // }

  // // Get all students (for authorized users)
  // getStudents() {
  //   if (!this.currentUser) {
  //     return null; // Handle unauthorized access
  //   }
  //   return this.studentsCollection.snapshotChanges().pipe(
  //     map(actions => actions.map(a => {
  //       const data = a.payload.doc.data() as Student;
  //       const id = a.payload.doc.id;
  //       return { id, ...data };
  //     }))
  //   );
  // }

  // // Get a specific student by ID (for authorized users)
  // getStudent(id: string) {
  //   if (!this.currentUser) {
  //     return null; // Handle unauthorized access
  //   }
  //   return this.studentsCollection.doc<Student>(id).valueChanges();
  // }

  // // Create a new student (for authorized users)
  // createStudent(student: Student) {
  //   if (!this.currentUser) {
  //     return null; // Handle unauthorized access
  //   }
  //   student.createdBy = this.currentUser.uid; // Add creator information
  //   return this.studentsCollection.add(student);
  // }

  // // Update a student (for authorized users)
  // updateStudent(id: string, student: Student) {
  //   if (!this.currentUser) {
  //     return null; // Handle unauthorized access
  //   }
  //   return this.studentsCollection.doc<Student>(id).update(student);
  // }

  // // Delete a student (for authorized users)
  // deleteStudent(id: string) {
  //   if (!this.currentUser) {
  //     return null; // Handle unauthorized access
  //   }
  //   return this.studentsCollection.doc<Student>(id).delete();
  // }

  // // Check if current user is authorized to access students
  // isAuthorized() {
  //   return this.currentUser !== null;
  // }
}

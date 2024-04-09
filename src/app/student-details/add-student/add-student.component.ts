import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { StudentModel } from '../../shared/models/studentModel';
import { MatDialog } from '@angular/material/dialog';

interface StudentField {
  name: string;
  type: 'text' | 'number' | 'email' | 'date'; // Add other allowed types if needed
  required?: boolean;
  validation?: (value: any) => boolean | string; // Custom validation
}

@Component({
  selector: 'app-student-add',
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.scss'
})

export class AddStudentComponent{
uploadedStudents: StudentModel[] = [];

constructor(private dialog: MatDialog) {}

openAddStudentDialog() {
  // this.dialog.open(AddStudentDialogComponent);
}

handleFileUpload(files: any) {
  if (files && files.length > 0) {
    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target) {
        const csvData = e.target.result as string;
        this.uploadedStudents = this.parseCSV(csvData);
      }
    };
    reader.readAsText(files[0]);
  }
}

parseCSV(csvData: string): StudentModel[] {
  const students: StudentModel[] = [];
  const lines = csvData.split('\n');
  for (let i = 1; i < lines.length; i++) { // Skip header row
    const studentData = lines[i].split(',');
    // const student: StudentModel = {
    //   // name: studentData[0], // Assuming first column is name, adjust based on your CSV format
    //   // Add logic to parse other student properties from CSV columns
    // };
    // students.push(student);
  }
  return students;
}
}


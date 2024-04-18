import { Component,OnInit} from '@angular/core';
import { StudentModel } from '../../shared/models/studentModel';
import { StudentFormConfig } from '../../shared/Config/student.formConfig';
import { studentTestData } from '../../shared/RandomData/test-data';
import { HttpClient } from '@angular/common/http';


// Example usage within a component
@Component({
  selector: 'app-edit-students',
  templateUrl: './edit-students.component.html',
  styleUrl: './edit-students.component.scss',
})


export class EditStudentsComponent {
  studentData = studentTestData as StudentModel;
  selectedFiles: FileList | null = null;
  uploading = false;


  constructor(
    public studentFormConfig: StudentFormConfig,
    ) {}

  getFormData(data: any) {
    if (typeof data === 'object') {
      console.log(data);
    }
    else {
      console.log('Error: data is not an object');
    }
  }

  getFormType(type: any) {
    if (typeof type === 'string') {
      console.log(type);
    }
    else {
      console.log('Error: type is not a string');
    }
  }

  onFileSelected(event: any) {
    this.selectedFiles = event.target.files;
    console.log(this.selectedFiles); // Optional for debugging
  }

  onUploadClick() {
    this.uploading = true;

  }
}

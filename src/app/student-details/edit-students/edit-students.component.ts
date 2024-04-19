import { Component} from '@angular/core';
import { StudentModel } from '../../shared/models/studentModel';
import { StudentFormConfig } from '../../shared/Config/student.formConfig';
import { studentTestData } from '../../shared/RandomData/test-data';



// Example usage within a component
@Component({
  selector: 'app-edit-students',
  templateUrl: './edit-students.component.html',
  styleUrl: './edit-students.component.scss',
})


export class EditStudentsComponent {
  studentData = studentTestData as StudentModel;
  selectedFile: File | null = null;
  previewUrl: string | null = null;

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0] || null;

    if (this.selectedFile) {
      const reader = new FileReader();
      reader.onload = () => {
        this.previewUrl = reader.result as string;
      };
      reader.readAsDataURL(this.selectedFile);
    } else {
      this.previewUrl = null;
    }
  }

  onDeleteImage() {
    this.selectedFile = null;
    this.previewUrl = null;
    // Clear the input value as well
  }

  get fileName(): string | null {
    return this.selectedFile ? this.selectedFile.name : null;
  }


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

}

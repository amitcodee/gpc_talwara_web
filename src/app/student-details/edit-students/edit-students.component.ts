import { Component,OnInit} from '@angular/core';
import { StudentFormConfig} from '../../dashboard/Config/student.formConfig';
import { StudentModel } from '../../dashboard/models/studentModel';
import { StudentService } from '../../dashboard/Services/studentFire.service';
import { studentTestData} from '../../dashboard/RandomData/test-data';
import { formService } from '../../dashboard/Services/form.service';

// Example usage within a component
@Component({
  selector: 'app-edit-students',
  templateUrl: './edit-students.component.html',
  styleUrl: './edit-students.component.scss',
})


export class EditStudentsComponent {
  studentData = studentTestData as StudentModel;

  constructor(
    public studentFormConfig: StudentFormConfig,
    private studentService: StudentService
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

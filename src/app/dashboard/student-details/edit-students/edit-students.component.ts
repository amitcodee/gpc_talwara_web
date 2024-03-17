import { Component, OnInit} from '@angular/core';
import {  FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormLayout, FormRow } from '../../models/forms';
import  {StudentFormConfig, Student} from '../../models/student';
import {studentData} from '../../models/test-data';
import { StudentService } from '../../Services/students.service';

// Example usage within a component

@Component({
  selector: 'app-edit-students',
  templateUrl: './edit-students.component.html',
  styleUrl: './edit-students.component.scss',
})


export class EditStudentsComponent implements OnInit {
  formGroup!: FormGroup;
  formLayoutInstance!: FormLayout;
  student = studentData[0]; // Assuming studentData is defined and imported


  constructor(private fb: FormBuilder, private studentFormConfig: StudentFormConfig, private studentService: StudentService) {
  }



ngOnInit() {
  // Initialize formLayoutInstance with studentFormLayout and generate the form group
  this.formLayoutInstance = new FormLayout(this.studentFormConfig.studentFormLayoutConfig); // Assuming studentFormLayout is defined and imported
  this.formGroup = this.formLayoutInstance.generateFormGroup(this.fb);
  this.formGroup.setValue(this.populateFormGroup(this.student, this.studentFormConfig.studentFormLayoutConfig)) // Assuming studentFormInitialData is defined and imported
}

  onSubmit() {
    if (this.formGroup.valid) {
      console.log(this.mapFormToStudent(this.formGroup.value));
      this.studentService.updateStudentData(this.mapFormToStudent(this.formGroup.value));
      // Handle your form submission logic here
    } else {

      console.log('Form is not valid');
      // Create a popup with the error message
      alert('Form is not valid');
    }
  }

  getFieldError(field: string, error: string): string | null {
    const control = this.formGroup.get(field);
    if (control && control.errors && control.errors[error]) {
      // Access specific error property based on your validator implementation
      if (error === 'exactCharacterCountAndNumeric') {
        return `Field must be exactly ${control.errors['exactCharacterCountAndNumeric'].requiredLength} characters long and contain only numbers.`;
      } else {
        return `Field has error: ${error}`; // Handle other potential errors
      }
    }
    return null;
  }

  populateFormGroup(studentData: any, formConfig: FormRow[])  {
    const formDataTest: any = {};
    // Access the appropriate model value based on formConfig
    for (let i = 0; i < formConfig.length; i++) {
      const formRow = formConfig[i];
      if(formRow.modelValueBoolean){
      const modelValue = formRow.modelValue;
      const studentDataSegment = studentData?.[modelValue ?? ''] || studentData;

      formRow.row.forEach(field => {
        const fieldName = field.name;
        const fieldValue: any = extractFieldValue(studentDataSegment, fieldName);
        formDataTest[fieldName] = fieldValue;
      });
      }
    }

    function extractFieldValue(data: any, fieldName: string): any {
      const parts = fieldName.split('.');
      let current = data;
      for (let i = 0; i < parts.length; i++) {
        current = current[parts[i]];
        if (current === undefined) {
          return undefined; // Handle missing fields gracefully
        }
      }
      return current;
    }
    return formDataTest;

  }

  mapFormToStudent(formData: any ): Student {
    // Loop through properties of the student class (excluding functions)
    const student1: Student = {
      id: '0',
      enrollmentStatus: 'active',
      personalInformation: {
        firstName: '',
        lastName: '',
        fullName: '',
        fatherName: '',
        motherName: '',
        guardianOccupation: '',
        familyIncome: 0,
        dateOfBirth: new Date(), // Assign a valid date value here
        bloodGroup: 'A+',
        displayImage: '',
        gender: '',
        nationality: ''
      },
      enrollmentInformation: {
        regNumber: '',
        admissionDate: new Date(), // Assign a valid date value here
        category: 'SC',
        feeWaiver: false,
        feeScheme: 'Below 60'
      },
      address: {
        streetAddress: undefined,
        city: '',
        state: '',
        postalCode: '',
        country: ''
      },
      contactInformation: {
        phoneNumbers: [],
        emailAddresses: []
      },
      fees: {
        totalAmount: 0,
        dueDate: new Date(),
        paid: false,
        paymentHistory: [{ sem: 0, date: new Date(), amount: 0 }]
      },
      academicInformation: {
        tenth: 0,
        twelfth: 0,
        LEET: false,
        percentage: 0,
        branch: 'CSE',
        batch: 0,
        grades: {}
      },
      additionalInformation: {}
    }; // Initialize student1 with an empty object
    // Special handling for contactInformation (array of strings)
    student1.id = '123';
    student1.enrollmentStatus = 'active';
    student1.contactInformation = {
      phoneNumbers: formData.phoneNumbers,
      emailAddresses: formData.emailAddresses,
    };
    student1.personalInformation = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      fatherName: formData.fatherName,
      motherName: formData.motherName,
      guardianOccupation: formData.guardianOccupation,
      familyIncome: formData.familyIncome,
      dateOfBirth: new Date(formData.dateOfBirth),
      bloodGroup: formData.bloodGroup,
      fullName: '',
      gender: 'formData.gender',
      displayImage: 'formData.displayImage',
      nationality: 'formData.nationality',

    };
    student1.enrollmentInformation = {
      regNumber: '12345',
      admissionDate:  new Date(),
      category: formData.category,
      feeWaiver: formData.feeWaiver,
      feeScheme: formData.feeScheme,
    };
    student1.address = {
      streetAddress: formData.streetAddress,
      city: formData.city,
      state: formData.state,
      postalCode: formData.postalCode,
      country: formData.country,
    };
    student1.fees = {
      totalAmount: formData.totalAmount,
      dueDate: new Date(formData.dueDate),
      paid: formData.paid,
      paymentHistory: [{ sem: 0, date: new Date(), amount: 0 }]
    };
    student1.academicInformation = {
      tenth: formData.tenth,
      twelfth: formData.twelfth,
      LEET: formData.LEET,
      percentage: formData.percentage,
      branch: formData.branch,
      batch: formData.batch,
      grades: {},
    };

    // Handle specific data types (can be extended for other types)

    return student1;
  }

}

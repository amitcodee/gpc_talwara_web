import { Injectable } from "@angular/core";
import { FormLayout, FormRow } from "../models/formModel";

import { StudentClass, StudentModel } from "../models/studentModel";
import { FormArray, FormBuilder, FormControl, FormGroup } from "@angular/forms";

@Injectable({
  providedIn: 'root'
})

export class formService {
  student = new StudentClass ();

  generateFormGroup(formLayoutInstance : FormRow[], fb: FormBuilder): FormGroup {
    const group: { [key: string]: any } = {};
    console.log();
    const layout = new FormLayout (formLayoutInstance);
    layout.layout.forEach(row => {
      row.row.forEach(field => {
        if (field.type === 'checkbox') {
          // Initialize FormArray for checkboxes with FormControl per option
          const formControls = field.options?.map(option => new FormControl(option.checked || false)) || [];
          group[field.name] = new FormArray(formControls);
        } else {
          // Initialize FormControl for other field types
          group[field.name] = ['', field.validators];
        }
      });
    });
    return fb.group(group);
  }

  populateFormGroup(formData: any, formConfig: FormRow[])  {
    const formDataTest: any = {};
    // Access the appropriate model value based on formConfig
    for (let i = 0; i < formConfig.length; i++) {
      const formRow = formConfig[i];
      if(formRow.modelValueBoolean){
      const modelValue = formRow.modelValue;
      const studentDataSegment = formData?.[modelValue ?? ''] || formData;

      formRow.row.forEach(field => {
        const fieldName = field.name;
        const fieldValue: any = extractFieldValue(studentDataSegment, fieldName);
        formDataTest[fieldName] = fieldValue;
      });
      } else {
        formRow.row.forEach(field => {
        const fieldName = field.name;
        const fieldValue: any = extractFieldValue(formData, fieldName);
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

  // function to map  from form data to student nodel
  // Only valid for students
  mapFormToStudent(formData: any ): StudentModel {
    this.student.student.id = formData.id || '12345';
    this.student.student.enrollmentStatus = formData.enrollmentStatus;
    this.student.student.contactInformation = {
      phoneNumbers: formData.phoneNumbers,
      emailAddresses: formData.emailAddresses,
    };
    this.student.student.personalInformation = {
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
    this.student.student.enrollmentInformation = {
      regNumber: formData.regNumber,
      admissionDate:  formData.admissionDate,
      category: formData.category,
      feeWaiver: formData.feeWaiver,
      feeScheme: formData.feeScheme,
    };
    this.student.student.address = {
      streetAddress: formData.streetAddress,
      city: formData.city,
      state: formData.state,
      postalCode: formData.postalCode,
      country: formData.country,
    };
    this.student.student.fees = {
      totalAmount: formData.totalAmount,
      dueDate: new Date(formData.dueDate),
      paid: formData.paid,
      paymentHistory: [
        {
          sem: 0,
          date: new Date(),
          amount: 0 ,
          session: '',
          paid: false,
        }
        ]
    };
    this.student.student.academicInformation = {
      tenth: formData.tenth,
      twelfth: formData.twelfth,
      LEET: formData.LEET,
      percentage: formData.percentage,
      branch: formData.branch,
      batch: formData.batch,
      grades: {},
    };

    return this.student.student;
  }
}

import { Component, EventEmitter, Input,OnInit, Output, SimpleChanges} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormLayout, FormRow } from '../../models/formModel';
import { formService } from '../../services/form.service';

export type formType = 'Student' | 'Notice' | 'Staff' | 'Fees' | 'Empty';


@Component({
  selector: 'app-form-creation',
  templateUrl: './form-creation.component.html',
  styleUrl: './form-creation.component.scss'
})

export class FormCreationComponent {
  @Input() formConfig! : FormRow[]; //getting the formConfig Input from Outside
  @Input() formData?: any; //getting the formData Input from Outside
  @Input() setValueBoolean?: boolean = false; //to set the Svalue of the form
  @Input() formTypeOf : formType = 'Empty'; //getting the formType Input from Outside
  @Input()  getValues?: boolean = false; //getting the getValues Input from Outside
  @Output() formValue = new EventEmitter<any>(); //sending the formValue Output to Outside
  @Output() formType = new EventEmitter<any>(); //sending the formValue Output to Outside



  formLayoutInstance!: FormLayout;
  formGroup!: FormGroup;

  constructor(private fb: FormBuilder,
              private formService: formService ) {
  }



  ngOnInit() {
    // Initialize formLayoutInstance with studentFormLayout and generate the form group
    // Below formLayoutInstance is to display data on html
    this.formLayoutInstance = new FormLayout(this.formConfig); // Assuming studentFormLayout is defined and imported

    // using the service to create a formgroup
    this.formGroup = this.formService.generateFormGroup(this.formConfig, this.fb);
    // Populate the form with the initial data
    if (this.setValueBoolean) {
      this.formGroup
        .setValue(
          this.formService.populateFormGroup(
               this.formData,
              this.formConfig
          )
          )
    }
     // Assuming studentFormInitialData is defined and imported
  }

  onSubmit() {
    if (this.formGroup.valid) {
      this.formType.emit(this.formTypeOf);
      this.formValue.emit(this.formService.mapData(this.formTypeOf, this.formGroup.value));
      this.formGroup.reset();
      this.formGroup.setErrors(null);
      // Handle your form submission logic here
    } else {
      console.log('Form is not valid');
      // Create a popup with the error message
      alert('Form is not valid');
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    if (!this.formData)
      {
        changes['getValues'].currentValue;
        if ( changes['getValues'].currentValue === true) {
          this.formValue.emit(this.formService.mapData(this.formTypeOf, this.formGroup.value));
        }
      }
      }

}

export interface dialogData {
  formConfig: FormRow[];
  formConfigData: Notice;
  typeOfForm: formType;
}
import { Component, Inject} from "@angular/core";

import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { FormRow } from "../../models/formModel";
import { Notice } from "../../models/noticeModel";
import { formType } from "../formCreation/form-creation.component";
@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: './dialog-content.html',
})

export class DialogComponent {
  value!: Notice;
  getFormValues: boolean = false;
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: dialogData) { }

  getData(value_form: Notice) {
    this.value = value_form;
    console.log(this.value);
    this.dialogRef.close(value_form);
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  submit() {
    this.getFormValues = true;
  }




}

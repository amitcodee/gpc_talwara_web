export interface dialogData {
  formConfig: FormRow[];
  formConfigData: Notice;
  typeOfForm: formType;
}
import { Component, Inject} from "@angular/core";

import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { FormRow } from "../../models/formModel";
import { Notice } from "../../models/noticeModel";
import { formType } from "../edit-details/edit-details.component";
@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: './dialog-content.html',
})

export class DialogComponent {
  value!: Notice;
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: dialogData) { }

  getData(value_form: Notice) {
    this.value = value_form;
    console.log(this.value);
    return this.value
  }
  onNoClick(): void {
    this.dialogRef.close();
  }


}

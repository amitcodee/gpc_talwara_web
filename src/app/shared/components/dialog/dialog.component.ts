export interface dialogData {
  formConfig: FormRow[];
  formConfigData: Notice;
}
import { Component, Inject} from "@angular/core";

import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { FormRow } from "../../models/formModel";
import { Notice } from "../../models/noticeMode";
@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: './dialog-content.html',
})

export class DialogComponent {
  value!: Notice;
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: dialogData) { }

  getData(value: Notice) {
    this.value = value;
    console.log(this.value);
  }

}

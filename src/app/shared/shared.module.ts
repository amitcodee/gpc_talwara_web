import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";


import { MaterialModule } from "../material.module";
import { NoticeBoardFormConfig } from "./Config/noticeboard.config";
import { StudentFormConfig } from "./Config/student.formConfig";
import { formService } from "./services/form.service";
import { RandomStudentDataService } from "./RandomData/randomData";
import { DialogComponent } from "./components/dialog/dialog.component";
import { FormCreationComponent } from "./components/formCreation/form-creation.component";
import { FirebaseTimestampPipe } from "./pipes/firbaseTimeStamp";
import { FeesFormConfig } from "./Config/fees.config";



@NgModule({
  declarations: [
    FormCreationComponent,
    DialogComponent,
    FirebaseTimestampPipe
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    FormCreationComponent,
    DialogComponent,
    FirebaseTimestampPipe
  ],
  providers: [
    formService,
    RandomStudentDataService,
    NoticeBoardFormConfig,
    StudentFormConfig,
    FeesFormConfig,
    FirebaseTimestampPipe
  ],
})
export class SharedModule {}

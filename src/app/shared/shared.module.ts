import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { EditDetailsComponent } from "./edit-details/edit-details.component";
import { MaterialModule } from "../material.module";
import { NoticeBoardFormConfig } from "./Config/noticeboard.config";
import { StudentFormConfig } from "./Config/student.formConfig";
import { formService } from "./services/form.service";
import { RandomStudentDataService } from "./RandomData/randomData";



@NgModule({
  declarations: [
    EditDetailsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    EditDetailsComponent
  ],
  providers: [
    formService,
    RandomStudentDataService,
    NoticeBoardFormConfig,
    StudentFormConfig,
  ],
})
export class SharedModule {}

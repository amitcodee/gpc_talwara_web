import { MainAreaComponent } from './home/main-area/main-area.component';
import { RegistrationComponent } from './home/registration/registration.component';
import { RightToInfoComponent } from './home/right-to-info/right-to-info.component';
import { CommtieesComponent } from './pages/about-us/commtiees/commtiees.component';
import { MandotoryDiscloreComponent } from './pages/about-us/mandotory-disclore/mandotory-disclore.component';
import { PrincipalMessageComponent } from './pages/about-us/principal-message/principal-message.component';
import { VisionComponent } from './pages/about-us/vision/vision.component';
import { AdmissionIntakeComponent } from './pages/Acadmic/admission-intake/admission-intake.component';
import { CourseComponent } from './pages/Acadmic/course/course.component';
import { FeesStructureComponent } from './pages/Acadmic/fees-structure/fees-structure.component';
import { RulesDisciplainComponent } from './pages/Acadmic/rules-disciplain/rules-disciplain.component';
import { ScholershipSchemaComponent } from './pages/Acadmic/scholership-schema/scholership-schema.component';


@NgModule({
  declarations: [
    ContactUsComponent,
    FooterComponent,
    HeaderComponent,
    ScrollButtonComponent,
    AdmissionHelpdeskComponent,
    BuddyProgramComponent,
    ExamComponent,
    HeroSectionComponent,
    MainAreaComponent,
    RegistrationComponent,
    RightToInfoComponent,
    CommtieesComponent,
    MandotoryDiscloreComponent,
    PrincipalMessageComponent,
    VisionComponent,
    AdmissionIntakeComponent,
    CourseComponent,
    FeesStructureComponent,
    RulesDisciplainComponent,
    ScholershipSchemaComponent,


  ],
  imports: [
    CommonModule,RouterOutlet,RouterLink
  ]
})
export class FrontEndModule { }

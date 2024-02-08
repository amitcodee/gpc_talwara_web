import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet,RouterLink } from '@angular/router';
import { FooterComponent } from './header-footer/footer/footer.component';
import { HeaderComponent } from './header-footer/header/header.component';
import { ScrollButtonComponent } from './header-footer/scroll-button/scroll-button.component';
import { HeroSectionComponent } from './home/hero-section/hero-section.component';
//import { NewsComponent } from "./home/news-section/news/news.component";
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AdmissionHelpdeskComponent } from './home/admission-helpdesk/admission-helpdesk.component';
import { BuddyProgramComponent } from './home/buddy-program/buddy-program.component';
import { ExamComponent } from './home/exam/exam.component';
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
import { AsComponent } from './pages/department/as/as.component';
import { CeComponent } from './pages/department/ce/ce.component';
import { CseComponent } from './pages/department/cse/cse.component';
import { EceComponent } from './pages/department/ece/ece.component';
import { EeComponent } from './pages/department/ee/ee.component';
import { MeComponent } from './pages/department/me/me.component';
import { WsComponent } from './pages/department/ws/ws.component';
import { AsFacultyComponent } from './pages/faculty/as/as.component';
import { CeFacultyComponent } from './pages/faculty/ce/ce.component';
import { CseFacultyComponent } from './pages/faculty/cse/cse.component';
import { EceFacultyComponent } from './pages/faculty/ece/ece.component';
import { EeFacultyComponent } from './pages/faculty/ee/ee.component';
import { MeFacultyComponent } from './pages/faculty/me/me.component';
import { SupportingStaffComponent } from './pages/faculty/supporting-staff/supporting-staff.component';
import { WsFacultyComponent } from './pages/faculty/ws/ws.component';
import { EventPictureComponent } from './pages/media/college-life-memories/event-picture.component';
import { StudentActivitiesComponent } from './pages/media/press-clips/student-activities.component';
import { StudentPlacedComponent } from './pages/placemnt/student-placed/student-placed.component';
import { TraningPlacementCellComponent } from './pages/placemnt/traning-placement-cell/traning-placement-cell.component';
import { FrontEndComponent } from './front-end.component';
import { FrontRoutingModule } from './front.routes';


@NgModule({
  declarations: [
    FrontEndComponent,
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
    AsComponent,
    CeComponent,
    CseComponent,
    EceComponent,
    EeComponent,
    MeComponent,
    WsComponent,
    AsFacultyComponent,
    CeFacultyComponent,
    CseFacultyComponent,
    EceFacultyComponent,
    EeFacultyComponent,
    MeFacultyComponent,
    WsFacultyComponent,
//    NewsComponent,
    SupportingStaffComponent,
    EventPictureComponent,
    StudentActivitiesComponent,
    StudentPlacedComponent,
    TraningPlacementCellComponent,
  ],
  imports: [
    CommonModule,RouterOutlet,RouterLink,FrontRoutingModule
  ],
  providers: [

  ],
  bootstrap: [FrontEndComponent]
})
export class FrontEndModule { }

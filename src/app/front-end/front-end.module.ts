import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet,RouterLink } from '@angular/router';
import { FooterComponent } from './header-footer/footer/footer.component';
import { HeaderComponent } from './header-footer/header/header.component';
import { ScrollButtonComponent } from './header-footer/scroll-button/scroll-button.component';
import { HeroSectionComponent } from './home/hero-section/hero-section.component';
import { NewsComponent } from "./home/news-section/news/news.component";
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

import { Routes } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HeroSectionComponent } from './home/hero-section/hero-section.component';
import { PrincipalMessageComponent } from './pages/about-us/principal-message/principal-message.component';
import { VisionComponent } from './pages/about-us/vision/vision.component';
import { MandotoryDiscloreComponent } from './pages/about-us/mandotory-disclore/mandotory-disclore.component';
import { GrievanceresComponent } from './home/grievanceres/grievanceres.component';
import { CourseComponent } from './pages/Acadmic/course/course.component';
import { AdmissionIntakeComponent } from './pages/Acadmic/admission-intake/admission-intake.component';
import { FeesStructureComponent } from './pages/Acadmic/fees-structure/fees-structure.component';
import { RulesDisciplainComponent } from './pages/Acadmic/rules-disciplain/rules-disciplain.component';
import { ScholershipSchemaComponent } from './pages/Acadmic/scholership-schema/scholership-schema.component';
import { CseComponent } from './pages/department/cse/cse.component';
import { CeComponent } from './pages/department/ce/ce.component';
import { MeComponent } from './pages/department/me/me.component';
import { EeComponent } from './pages/department/ee/ee.component';
import { EceComponent } from './pages/department/ece/ece.component';
import { AsComponent } from './pages/department/as/as.component';
import { WsComponent } from './pages/department/ws/ws.component';
import { CseFacultyComponent } from './pages/faculty/cse/cse.component';
import { EeFacultyComponent } from './pages/faculty/ee/ee.component';
import { EceFacultyComponent } from './pages/faculty/ece/ece.component';
import { MeFacultyComponent } from './pages/faculty/me/me.component';
import { WsFacultyComponent } from './pages/faculty/ws/ws.component';
import { AsFacultyComponent } from './pages/faculty/as/as.component';
import { SupportingStaffComponent } from './pages/faculty/supporting-staff/supporting-staff.component';
import { TraningPlacementCellComponent } from './pages/placemnt/traning-placement-cell/traning-placement-cell.component';
import { StudentPlacedComponent } from './pages/placemnt/student-placed/student-placed.component';
import { EventPictureComponent } from './pages/media/event-picture/event-picture.component';
import { SocialMediaAccountComponent } from './pages/media/social-media-account/social-media-account.component';
import { StudentActivitiesComponent } from './pages/media/student-activities/student-activities.component';
import { CommtieesComponent } from './pages/about-us/commtiees/commtiees.component';

export const routes: Routes = [
  {
    path: '',
    component: HeroSectionComponent,
  },
  {
    path: 'contact-us',
    component: ContactUsComponent,
  },
  {
    path: 'principal-message',
    component: PrincipalMessageComponent,
  },
  {
    path: 'vision-mission',
    component: VisionComponent,
  },
  {
    path: 'mandatory-disclousure',
    component: MandotoryDiscloreComponent,
  },
  {
    path: 'grievance-redressal-committee',
    component: CommtieesComponent,
  },
  {
    path: 'courses',
    component: CourseComponent,
  },
  {
    path: 'admission-intake',
    component: AdmissionIntakeComponent,
  },
  {
    path: 'fees-structure',
    component: FeesStructureComponent,
  },
  {
    path: 'rules-discipline',
    component: RulesDisciplainComponent,
  },
  {
    path: 'scholarship-schemes',
    component: ScholershipSchemaComponent,
  },
  {
    path: 'cse',
    component: CseComponent,
  },
  {
    path: 'ce',
    component: CeComponent,
  },
  {
    path: 'me',
    component: MeComponent,
  },
  {
    path: 'ee',
    component: EeComponent,
  },
  {
    path: 'ece',
    component: EceComponent,
  },
  {
    path: 'as',
    component: AsComponent,
  },
  {
    path: 'ws',
    component: WsComponent,
  },
  {
    path: 'cse-faculty',
    component: CseFacultyComponent,
  },
  {
    path: 'ee-faculty',
    component: EeFacultyComponent,
  },
  {
    path: 'ece-faculty',
    component: EceFacultyComponent,
  },
  {
    path: 'ee-faculty',
    component: EeFacultyComponent,
  },
  {
    path: 'me-faculty',
    component: MeFacultyComponent,
  },
  {
    path: 'ws-faculty',
    component: WsFacultyComponent,
  },
  {
    path: 'as-faculty',
    component: AsFacultyComponent,
  },
  {
    path: 'supporting-staff',
    component: SupportingStaffComponent,
  },
  {
    path:'training-placement',
    component:TraningPlacementCellComponent
  },
  {
    path:'student-placed',
    component:StudentPlacedComponent
  },
  {
    path:'events-picture',
    component:EventPictureComponent
  },
  {
    path:'social-media-account',
    component:SocialMediaAccountComponent
  },
  {
    path:'student-activites',
    component:StudentActivitiesComponent
  }
];

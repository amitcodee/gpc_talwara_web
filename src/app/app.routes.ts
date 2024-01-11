import { Routes } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HeroSectionComponent } from './home/hero-section/hero-section.component';
import { PrincipalMessageComponent } from './pages/about-us/principal-message/principal-message.component';
import { VisionComponent } from './pages/about-us/vision/vision.component';
import { MandotoryDiscloreComponent } from './pages/about-us/mandotory-disclore/mandotory-disclore.component';
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
import { EventPictureComponent } from './pages/media/college-life-memories/event-picture.component';
import { SocialMediaAccountComponent } from './pages/media/social-media-account/social-media-account.component';
import { StudentActivitiesComponent } from './pages/media/press-clips/student-activities.component';
import { CommtieesComponent } from './pages/about-us/commtiees/commtiees.component';
import { CeFacultyComponent } from './pages/faculty/ce/ce.component';
import { BuddyProgramComponent } from './home/buddy-program/buddy-program.component';
import { RegistrationComponent } from './home/registration/registration.component';
import { RightToInfoComponent } from './home/right-to-info/right-to-info.component';
import { ExamComponent } from './home/exam/exam.component';
import { AdmissionHelpdeskComponent } from './home/admission-helpdesk/admission-helpdesk.component';
import { SecondNewsComponent } from './home/news-section/second-news/second-news.component';
import { ThirdComponent } from './home/news-section/third/third.component';
import { FourthNewsComponent } from './home/news-section/fourth-news/fourth-news.component';

export const routes: Routes = [
  {
    path: '',
    component: HeroSectionComponent,
  },
  {
    path: 'contact-us',
    component: ContactUsComponent,
    data: { title: 'Contact Us - GPC Talwara' },
  },
  {
    path: 'principal-message',
    component: PrincipalMessageComponent,
    data: { title: 'Principal Message - GPC Talwara' },
  },
  {
    path: 'vision-mission',
    component: VisionComponent,
    data: { title: 'Vision & Mission - GPC Talwara' },
  },
  {
    path: 'mandatory-disclousure',
    component: MandotoryDiscloreComponent,
    data: { title: 'Mandatory Disclousure - GPC Talwara' },

  },
  {
    path: 'grievance-redressal-committee',
    component: CommtieesComponent,
    data: { title: 'Grievance Redressal Committee - GPC Talwara' },
  },
  {
    path: 'courses',
    component: CourseComponent,
    data: { title: 'Courses - GPC Talwara' },
  },
  {
    path: 'admission-intake',
    component: AdmissionIntakeComponent,
    data: { title: 'Admission Intake - GPC Talwara' },
  },
  {
    path: 'fees-structure',
    component: FeesStructureComponent,
    data: { title: 'Fees Structure - GPC Talwara' },
  },
  {
    path: 'rules-discipline',
    component: RulesDisciplainComponent,
    data: { title: 'Rules & Discipline - GPC Talwara' },
  },
  {
    path: 'scholarship-schemes',
    component: ScholershipSchemaComponent,
    data: { title: 'Scholarship Schemes - GPC Talwara' },
  },
  {
    path: 'cse',
    component: CseComponent,
    data: { title: 'Computer Science & Engineering - GPC Talwara' },
  },
  {
    path: 'ce',
    component: CeComponent,
    data: { title: 'Civil Engineering - GPC Talwara' },
  },
  {
    path: 'me',
    component: MeComponent,
    data: { title: 'Mechanical Engineering - GPC Talwara' },
  },
  {
    path: 'ee',
    component: EeComponent,
    data: { title: 'Electrical Engineering - GPC Talwara' },
  },
  {
    path: 'ece',
    component: EceComponent,
    data: { title: 'Electronics & Communication Engineering - GPC Talwara' },
  },
  {
    path: 'as',
    component: AsComponent,
    data: { title: 'Applied Science - GPC Talwara' },
  },
  {
    path: 'ws',
    component: WsComponent,
    data: { title: 'Workshop - GPC Talwara' },
  },
  {
    path: 'cse-faculty',
    component: CseFacultyComponent,
    data: { title: 'CSE Staff - GPC Talwara' },
  },
  {
    path: 'ee-faculty',
    component: EeFacultyComponent,
    data: { title: 'EE Staff - GPC Talwara' },
  },
  {
    path: 'ece-faculty',
    component: EceFacultyComponent,
    data: { title: 'ECE Staff - GPC Talwara' },
  },
  {
    path: 'ee-faculty',
    component: EeFacultyComponent,
    data: { title: 'EE Staff - GPC Talwara' },
  },
  {
    path: 'me-faculty',
    component: MeFacultyComponent,
    data: { title: 'ME Staff - GPC Talwara' },
  },
  {
    path: 'ws-faculty',
    component: WsFacultyComponent,
    data: { title: 'WS Staff - GPC Talwara' },
  },
  {
    path:'ce-faculty',
    component:CeFacultyComponent,
    data:{title:'CE Staff - GPC Talwara'}

  },
  {
    path: 'as-faculty',
    component: AsFacultyComponent,
    data: { title: 'AS Staff - GPC Talwara' },
  },
  {
    path: 'supporting-staff',
    component: SupportingStaffComponent,
    data: { title: 'Supporting Staff - GPC Talwara' },
  },
  {
    path:'training-placement',
    component:TraningPlacementCellComponent,
    data:{title:'Training & Placement Cell - GPC Talwara'}
  },
  {
    path:'student-placed',
    component:StudentPlacedComponent,
    data:{title:'Student Placed - GPC Talwara'}
  },
  {
    path:'events-picture',
    component:EventPictureComponent,
    data:{title:'Events Picture - GPC Talwara'}
  },
  {
    path:'social-media-account',
    component:SocialMediaAccountComponent,
    data:{title:'Social Media Account - GPC Talwara'}
  },
  {
    path:'student-activites',
    component:StudentActivitiesComponent,
    data:{title:'Press Clips - GPC Talwara'}
  },
  {
    path:'buddy-program',
    component:BuddyProgramComponent,
    data:{title:'Buddy Program - GPC Talwara'}
  },
  {
    path:'registration-portal',
    component:RegistrationComponent,
    data:{title:'Registration Portal - GPC Talwara'}
  },
  {
    path:'right-to-information',
    component:RightToInfoComponent,
    data:{title:'Right To Information - GPC Talwara'}
  },
  {
    path:'examination',
    component:ExamComponent,
    data:{title:'Examination - GPC Talwara'}
  },
  {
    path:'admission-help',
    component:AdmissionHelpdeskComponent,
    data:{title:'Admission Helpdesk - GPC Talwara'}
  },
  {
    path:'second-news',
    component:SecondNewsComponent,  
    data:{title:' News - GPC Talwara'}
  },
  {
    path:'third-news',
    component:ThirdComponent,
    data:{title:' News - GPC Talwara'}
  },
  {
    path:'fourth-news',
    component:FourthNewsComponent,
    data:{title:'News - GPC Talwara'}
  }
];

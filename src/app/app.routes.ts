import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';;


export const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    loadChildren: () => import('./front-end/front-end.module').then(m => m.FrontEndModule),
  },
  {
    path: 'dashboard',
    canActivate: [],
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),

  },
  {
    path: '**',
    redirectTo: '',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

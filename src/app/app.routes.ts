import { RouterModule, Routes } from '@angular/router';
import { FrontEndComponent } from './front-end/front-end.component';
import { NgModule } from '@angular/core';


export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./front-end/front-end.module').then(m => m.FrontEndModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

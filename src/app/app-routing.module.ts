import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './public/home/home.component';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: '/home'
  },
  {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full',
    // canActivate: [PublicGuard]
  },
  // {
  //   path: 'auth-home',
  //   component: AuthHomeComponent,
  //   data: {name: 'AuthHome'},
  //   canActivate: [AuthGuard]
  // },
  // {path: 'projects/:id', component: ProjectDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

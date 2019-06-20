import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './public/home/home.component';
import {AuthHomeComponent} from './auth/home/auth-home/auth-home.component';
import {AuthenticatedGuard} from './common/guards/authenticated.guard';
import {PublicGuard} from './common/guards/public.guard';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: '/home',
  },
  {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full',
    canActivate: [PublicGuard],
  },
  {
    path: 'auth-home',
    component: AuthHomeComponent,
    data: {name: 'AuthHome'},
    canActivate: [AuthenticatedGuard],
  },
  // {path: 'projects/:id', component: ProjectDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

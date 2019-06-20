import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FooterComponent} from './common/footer/footer.component';
import {HeaderComponent} from './common/header/header.component';
import {LoginFormComponent} from './public/login/login-form/login-form.component';
import {HomeComponent} from './public/home/home.component';
import {FullBannerComponent} from './public/home/full-banner/full-banner.component';
import {ProjectsComponent} from './public/projects/projects.component';
import {SingleProjectComponent} from './public/projects/single-project/single-project.component';
import {HttpClientModule} from '@angular/common/http';
import { NgxWebstorageModule } from 'ngx-webstorage';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    LoginFormComponent,
    HomeComponent,
    FullBannerComponent,
    ProjectsComponent,
    SingleProjectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxWebstorageModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

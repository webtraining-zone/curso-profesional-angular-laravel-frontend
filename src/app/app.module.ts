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
import {NgxWebstorageModule} from 'ngx-webstorage';
import {httpInterceptorProviders} from './common/interceptors';
import {FormsModule} from '@angular/forms';
import {AuthHomeComponent} from './auth/home/auth-home/auth-home.component';
import {ProjectDetailComponent} from './public/projects/detail/project-detail.component';
import {GenerateImageUrlPipe} from './common/pipes/generate-image-url.pipe';
import {GetFirstCharPipe} from './common/pipes/get-first-char.pipe';
import {FilterByPipe} from './common/pipes/filter-by.pipe';
import {GetFieldByLocalePipe} from './common/pipes/get-field-by-locale.pipe';
import {CommentsComponent} from './common/comments/comments.component';
import {CKEditorModule} from 'ng2-ckeditor';
import carbon from './config/carbonLDP/carbon-init';
import {CarbonLDP} from 'carbonldp';

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
    AuthHomeComponent,
    ProjectDetailComponent,
    GenerateImageUrlPipe,
    GetFirstCharPipe,
    FilterByPipe,
    GetFieldByLocalePipe,
    CommentsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CKEditorModule,
    NgxWebstorageModule.forRoot(),
  ],
  providers: [httpInterceptorProviders,
    {
      provide: CarbonLDP, useValue: carbon
    }
    // { provide: LOCALE_ID, useValue: 'fr' }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}

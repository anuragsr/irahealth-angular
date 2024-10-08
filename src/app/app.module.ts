import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';
import { translocoLoader } from './transloco.loader';
import {
  TranslocoModule,
  TRANSLOCO_CONFIG,
  TranslocoConfig
} from '@ngneat/transloco';
import { ToggleButtonComponent } from './utils/toggle-button/toggle-button.component';
import { LoginComponent } from './pages/login/login.component';
import { AboutComponent } from './pages/about/about.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { TermsComponent } from './pages/terms/terms.component';
import { ClinicsComponent } from './pages/clinics/clinics.component';
import { ClinicSingleComponent } from './pages/clinic-single/clinic-single.component';
import { DoctorSingleComponent } from './pages/doctor-single/doctor-single.component';
import { DoctorsComponent } from './pages/doctors/doctors.component';
import { ChatComponent } from './pages/chat/chat.component';
import { ContactComponent } from './pages/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ToggleButtonComponent,
    LoginComponent,
    AboutComponent,
    PrivacyComponent,
    TermsComponent,
    ClinicsComponent,
    ClinicSingleComponent,
    DoctorSingleComponent,
    DoctorsComponent,
    ChatComponent,
    ContactComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, TranslocoModule],
  providers: [
    {
      provide: TRANSLOCO_CONFIG,
      useValue: {
        listenToLangChange: true,
        defaultLang: 'en',
        availableLangs: ['en', 'hi'],
        prodMode: environment.production
      } as TranslocoConfig
    },
    translocoLoader
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

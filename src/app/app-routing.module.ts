import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
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

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'terms', component: TermsComponent },
  { path: 'clinics', component: ClinicsComponent },
  { path: 'clinic-single', component: ClinicSingleComponent },
  { path: 'doctors', component: DoctorsComponent },
  { path: 'doctor-single', component: DoctorSingleComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

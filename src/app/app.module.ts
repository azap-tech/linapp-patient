import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatInputModule,
  MatRadioModule,
  MatSelectModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
} from '@angular/material';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartmentComponent } from './pages/department/department.component';
import { CentersListComponent } from './pages/centers-list/centers-list.component';
import { TicketComponent } from './pages/ticket/ticket.component';
import { MedicalReasonComponent } from './pages/medical-reason/medical-reason.component';
import { SmsConfirmationComponent } from './pages/sms-confirmation/sms-confirmation.component';
import { TimeTrackerComponent } from './pages/time-tracker/time-tracker.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ValidationButtonComponent } from './components/validation-button/validation-button.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: 'home', component: DepartmentComponent },
  { path: 'centers-list', component: CentersListComponent },
  { path: 'sms-confirmation', component: SmsConfirmationComponent },
  { path: 'time-tracker', component: TimeTrackerComponent },
  { path: 'page-not-found', component: PageNotFoundComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/page-not-found' },
];

@NgModule({
  declarations: [
    AppComponent,
    DepartmentComponent,
    CentersListComponent,
    TicketComponent,
    MedicalReasonComponent,
    SmsConfirmationComponent,
    TimeTrackerComponent,
    NavbarComponent,
    ValidationButtonComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

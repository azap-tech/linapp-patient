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
  MatCardModule,
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
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { TicketHeaderComponent } from './pages/ticket/ticket-header/ticket-header.component';
import { TicketFormComponent } from './pages/ticket/ticket-form/ticket-form.component';
import { TicketReasonComponent } from './pages/ticket/ticket-reason/ticket-reason.component';

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
    TicketHeaderComponent,
    TicketFormComponent,
    TicketReasonComponent,
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
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

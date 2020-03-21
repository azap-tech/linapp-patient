import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartmentComponent } from './pages/department/department.component';
import { CentersListComponent } from './pages/centers-list/centers-list.component';
import { TicketComponent } from './pages/ticket/ticket.component';
import { MedicalReasonComponent } from './pages/medical-reason/medical-reason.component';

@NgModule({
  declarations: [
    AppComponent,
    DepartmentComponent,
    CentersListComponent,
    TicketComponent,
    MedicalReasonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentComponent } from './pages/department/department.component';
import { CentersListComponent } from './pages/centers-list/centers-list.component';
import { SmsConfirmationComponent } from './pages/sms-confirmation/sms-confirmation.component';
import { TicketComponent } from './pages/ticket/ticket.component';
import { TimeTrackerComponent } from './pages/time-tracker/time-tracker.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { TicketReasonComponent } from './pages/ticket/ticket-reason/ticket-reason.component';

const routes: Routes = [
  { path: 'home', component: DepartmentComponent },
  { path: 'centers-list', component: CentersListComponent },
  { path: 'sms-confirmation', component: SmsConfirmationComponent },
  { path: 'ticket', component: TicketComponent },
  { path: 'ticket/reason', component: TicketReasonComponent },
  { path: 'time-tracker', component: TimeTrackerComponent },
  { path: 'page-not-found', component: PageNotFoundComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/page-not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

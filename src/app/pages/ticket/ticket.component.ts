import { Component, OnInit } from '@angular/core';
import { Ticket } from './ticket';
import { ITicket, Sex } from './i-ticket';
import { UserData, StoreService } from 'src/app/services/store.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss'],
})
export class TicketComponent implements OnInit {
  ticket: Ticket;
  ticketForm: FormGroup;
  private formBuilder: FormBuilder;

  constructor(private storeService: StoreService, private router: Router) {
    this.formBuilder = new FormBuilder();
    this.ticketForm = this.formBuilder.group({
      sex: [Sex.Male, Validators.required],
      name: ['', Validators.required],
      reason: ['', Validators.required],
      tel: ['', Validators.required],
      age: ['', Validators.required],
    });
  }

  ngOnInit() {
    const userData: UserData = this.storeService.getState();
    this.ticket = new Ticket({ ...userData });
    this.ticketForm.patchValue({
      ...this.ticket.toObject(),
    });
  }

  onTicketCreated(): void {
    this.storeService.setState(
      Object.assign(this.storeService.getState(), this.ticket)
    );
  }

  onTicketLoaded(ticket: ITicket): void {
    this.ticket = new Ticket({ ...ticket });
  }

  onSubmit() {
    this.storeService.setState(
      Object.assign(this.storeService.getState(), this.ticketForm.value)
    );
    this.setTicket({ ...this.storeService.getState() });
  }

  private setTicket(ticket: ITicket): void {
    this.ticket = new Ticket({ ...ticket });
  }

  onReasonInputClick(): void {
    this.router.navigate(['/ticket', 'reason']);
  }
}

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StoreService, UserData } from 'src/app/services/store.service';
import { Ticket } from '../ticket';
import { Sex, ITicket } from '../i-ticket';

@Component({
  selector: 'app-ticket-form',
  templateUrl: './ticket-form.component.html',
  styleUrls: ['./ticket-form.component.scss'],
})
export class TicketFormComponent implements OnInit {
  private formBuilder: FormBuilder;
  private ticket: Ticket;
  ticketForm: FormGroup;
  @Output() ticketCreated: EventEmitter<Ticket>;

  constructor(private storeService: StoreService) {
    this.ticketCreated = new EventEmitter();
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
    this.setTicket({ ...userData });
    this.ticketForm.patchValue({
      ...this.ticket.toObject(),
    });
  }

  onSubmit() {
    this.storeService.setState(
      Object.assign(this.storeService.getState(), this.ticketForm.value)
    );
    this.setTicket({ ...this.storeService.getState() });
  }

  private setTicket({ sex, name, reason, tel, age }: ITicket): void {
    this.ticket = new Ticket(sex ? sex : Sex.Male, name, reason, tel, age);
    this.ticketCreated.emit(this.ticket);
  }
}

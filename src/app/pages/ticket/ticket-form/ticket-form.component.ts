import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StoreService, UserData } from 'src/app/services/store.service';
import { Ticket } from '../ticket';
import { Sex } from '../i-ticket';

@Component({
  selector: 'app-ticket-form',
  templateUrl: './ticket-form.component.html',
  styleUrls: ['./ticket-form.component.scss'],
})
export class TicketFormComponent implements OnInit {
  private formBuilder: FormBuilder;
  private ticket: Ticket;
  ticketForm: FormGroup;

  constructor(private storeService: StoreService) {
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
    console.log(userData);
    this.ticket = new Ticket(
      '021',
      userData.sex ? userData.sex : Sex.Male,
      userData.name,
      userData.reason,
      userData.tel,
      userData.age
    );
    this.ticketForm.patchValue({
      ...this.ticket.toObject(),
    });
  }

  onSubmit() {
    console.log(this.ticketForm.value);
    this.storeService.setState(
      Object.assign(this.storeService.getState(), this.ticketForm.value)
    );
  }
}

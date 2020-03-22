import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-ticket-form',
  templateUrl: './ticket-form.component.html',
  styleUrls: ['./ticket-form.component.scss'],
})
export class TicketFormComponent implements OnInit {
  private formBuilder: FormBuilder;
  ticketForm: FormGroup;

  constructor() {
    this.formBuilder = new FormBuilder();
    this.ticketForm = this.formBuilder.group({
      sex: ['male', Validators.required],
      name: ['', Validators.required],
      reason: ['', Validators.required],
      tel: ['', Validators.required],
      age: ['', Validators.required],
    });
  }

  ngOnInit() {}

  onSubmit() {
    console.log(this.ticketForm.valid);
  }
}

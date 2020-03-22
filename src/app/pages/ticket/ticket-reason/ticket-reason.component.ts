import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StoreService } from 'src/app/services/store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ticket-reason',
  templateUrl: './ticket-reason.component.html',
  styleUrls: ['./ticket-reason.component.scss'],
})
export class TicketReasonComponent implements OnInit {
  ticketReasonForm: FormGroup;
  private formBuilder: FormBuilder;
  constructor(private storeService: StoreService, private router: Router) {
    this.formBuilder = new FormBuilder();
    this.ticketReasonForm = this.formBuilder.group({
      reason: ['', Validators.required],
    });
  }

  ngOnInit() {}

  onSubmit() {
    this.storeService.setState(
      Object.assign(this.storeService.getState(), this.ticketReasonForm.value)
    );
    this.router.navigate(['/ticket']);
  }

  onButtonPress(reason: string): void {
    this.ticketReasonForm.patchValue({
      reason,
    });
  }
}

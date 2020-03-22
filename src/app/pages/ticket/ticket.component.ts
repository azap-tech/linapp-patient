import { Component, OnInit } from '@angular/core';
import { Ticket } from './ticket';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss'],
})
export class TicketComponent implements OnInit {
  ticket: Ticket;
  constructor() {
    this.ticket = new Ticket();
  }

  ngOnInit() {}

  onTicketCreated(data: Event): void {
    this.ticket.setTicketNumber('021');
  }
}

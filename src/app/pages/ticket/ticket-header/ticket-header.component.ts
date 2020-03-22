import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ticket-header',
  templateUrl: './ticket-header.component.html',
  styleUrls: ['./ticket-header.component.scss'],
})
export class TicketHeaderComponent implements OnInit {
  @Input() ticketNumber: string;

  constructor() {}

  ngOnInit() {}
}

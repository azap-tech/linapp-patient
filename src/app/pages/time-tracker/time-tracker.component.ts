import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';

interface Countdown {
  mins: number;
  hours: number;
}

@Component({
  selector: 'app-time-tracker',
  templateUrl: './time-tracker.component.html',
  styleUrls: ['./time-tracker.component.scss'],
})
export class TimeTrackerComponent implements OnInit {
  minsToWaitForVisit: number;
  state: any;
  mins: number;
  hours: number;

  constructor(private store: StoreService) {}

  ngOnInit() {
    // this.state = this.store.getState();
    this.state = {
      sex: 'Sex',
      name: 'Dupont',
      reason: 'string',
      tel: 'string',
      age: 'number',
      department: 'string',
      center: 'Centre 1',
      minsToWaitForVisit: 92,
      ticketNumber: '#21',
    };
    const remainingTimeForVisit = this.formatTimeToWait(
      this.state.minsToWaitForVisit
    );
    this.mins = remainingTimeForVisit.mins;
    this.hours = remainingTimeForVisit.hours;
  }

  formatTimeToWait(minsToWaitForVisit: number): Countdown {
    // get the hours + minutes to wait
    return { mins: 22, hours: 3 };
  }
}

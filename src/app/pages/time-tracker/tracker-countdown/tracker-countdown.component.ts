import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tracker-countdown',
  templateUrl: './tracker-countdown.component.html',
  styleUrls: ['./tracker-countdown.component.scss'],
})
export class TrackerCountdownComponent implements OnInit {
  @Input() mins;
  @Input() hours;
  constructor() {}

  ngOnInit() {}
}

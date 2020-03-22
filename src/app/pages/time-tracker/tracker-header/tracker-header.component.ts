import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tracker-header',
  templateUrl: './tracker-header.component.html',
  styleUrls: ['./tracker-header.component.scss'],
})
export class TrackerHeaderComponent implements OnInit {
  @Input() state: any;
  constructor() {}

  ngOnInit() {}
}

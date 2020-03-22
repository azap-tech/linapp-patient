import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-centers-list-item',
  templateUrl: './centers-list-item.component.html',
  styleUrls: ['./centers-list-item.component.scss'],
})
export class CentersListItemComponent implements OnInit {
  @Input() medicalCenter;
  constructor() {}

  ngOnInit() {}
}

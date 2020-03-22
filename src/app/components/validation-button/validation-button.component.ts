import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-validation-button',
  templateUrl: './validation-button.component.html',
  styleUrls: ['./validation-button.component.scss'],
})
export class ValidationButtonComponent implements OnInit {
  @Input() text: any;
  @Input() disabled: boolean;

  constructor() {}

  ngOnInit() {}
}

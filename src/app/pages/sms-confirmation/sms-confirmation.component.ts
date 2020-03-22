import { Component, OnInit } from '@angular/core';
import { Patient } from './patient';


@Component({
  selector: 'app-sms-confirmation',
  templateUrl: './sms-confirmation.component.html',
  styleUrls: ['./sms-confirmation.component.scss']
})
export class SmsConfirmationComponent implements OnInit {

  PATIENT = {
    id: '0',
    name: 'Dupont',
    title: 'Monsieur',
    number: '0661664522'
  };

  patient = this.PATIENT;

  constructor() { }

  ngOnInit() {
  }

}


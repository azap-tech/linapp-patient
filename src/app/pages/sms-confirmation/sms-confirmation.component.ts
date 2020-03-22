import { Component, OnInit } from '@angular/core';
import { Patient } from './patient';
import { StoreService, UserData } from 'src/app/services/store.service';


@Component({
  selector: 'app-sms-confirmation',
  templateUrl: './sms-confirmation.component.html',
  styleUrls: ['./sms-confirmation.component.scss']
})
export class SmsConfirmationComponent implements OnInit {

  state: UserData;

  PATIENT = {
    id: '0',
    name: 'Dupont',
    title: 'Monsieur',
    number: '0661664522'
  };

  patient = this.PATIENT;

  name = null;

  constructor( private store: StoreService ) { 
  	}

  ngOnInit() {
    this.state = this.store.getState();
  }

}


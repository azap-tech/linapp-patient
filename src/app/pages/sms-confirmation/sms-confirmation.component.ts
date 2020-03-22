import { Component, OnInit } from '@angular/core';
import { Patient } from './patient' 
import { StoreService } from 'src/app/services/store.service';


@Component({
  selector: 'app-sms-confirmation',
  templateUrl: './sms-confirmation.component.html',
  styleUrls: ['./sms-confirmation.component.scss']
})
export class SmsConfirmationComponent implements OnInit {

  state: any;
  patient: any;

  constructor( private store: StoreService ) { 
  	}

  ngOnInit() {
    this.state = this.store.getState();
    if(this.state.sex === 'Male'){
    	this.patient.title = "Monsieur";
    }else{
    	this.patient.title = "Madame";
    }
  }

}


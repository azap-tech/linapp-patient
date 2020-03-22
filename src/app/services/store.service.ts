import { Injectable } from '@angular/core';
import { ITicket, Sex } from '../pages/ticket/i-ticket';

export interface UserData extends ITicket {
  ticketNumber: string;
  sex: Sex;
  name: string;
  reason: string;
  tel: string;
  age: number;
  minsToWaitForVisit: number;
  department: Department;
  center: Center;
  medicalCenters: Center[];
}

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  state: UserData;

  getState(): UserData {
    return this.state
      ? this.state
      : {
          ticketNumber: null,
          sex: null,
          name: null,
          reason: null,
          tel: null,
          age: null,
          department: null,
          center: null,
          medicalCenters: null,
          minsToWaitForVisit: null,
        };
  }

  setState(state: UserData) {
    this.state = state;
  }

  clear() {
    this.state = null;
  }
}

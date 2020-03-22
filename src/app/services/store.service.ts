import { Injectable } from '@angular/core';

enum Sex {
  Male,
  Female,
}

interface UserData {
  sex: Sex;
  name: string;
  reason: string;
  tel: string;
  age: number;
  minsToWaitForVisit: number;
  center: Center;
  medicalCenters: Center[];
  ticketNumber: string;
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
          sex: null,
          name: null,
          reason: null,
          tel: null,
          age: null,
          center: null,
          medicalCenters: null,
          ticketNumber: null,
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
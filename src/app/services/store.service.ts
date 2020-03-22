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
  department: string;
  center: Center;
  minsToWaitForVisit: number;
  ticketNumber: string;
}

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  state: UserData;

  getState(): UserData {
    return this.state;
  }

  setState(state: UserData) {
    this.state = state;
  }

  clear() {
    this.state = null;
  }
}

import { Injectable } from '@angular/core';

enum Sex {
  Male,
  Female
}

interface UserData {
  sex: Sex;
  name: string;
  reason: string;
  tel: string;
  age: number;
  department: string;
}

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  state: UserData;

  getState() {
    return this.state;
  }

  setState() {
    return this.state;
  }

  clear() {
    this.state = null;
  }
}

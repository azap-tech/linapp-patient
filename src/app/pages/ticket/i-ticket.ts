export enum Sex {
  Male = 'male',
  Female = 'female',
}

export interface ITicket {
  ticketNumber: string;
  sex: Sex;
  name: string;
  reason: string;
  tel: string;
  age: number;
}

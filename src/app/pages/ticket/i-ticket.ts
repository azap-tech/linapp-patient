export enum Sex {
  Male,
  Female,
}

export interface ITicket {
  ticketNumber: string;
  sex: Sex;
  name: string;
  reason: string;
  tel: string;
  age: number;
}

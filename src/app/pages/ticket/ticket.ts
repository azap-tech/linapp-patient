import { ITicket, Sex } from './i-ticket';

export class Ticket implements ITicket {
  constructor(
    public ticketNumber: string,
    public sex: Sex,
    public name: string,
    public reason: string,
    public tel: string,
    public age: number
  ) {}

  public toObject(): ITicket {
    return {
      ticketNumber: this.ticketNumber,
      sex: this.sex,
      name: this.name,
      reason: this.reason,
      tel: this.tel,
      age: this.age,
    };
  }
}

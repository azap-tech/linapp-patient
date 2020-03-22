import { ITicket, Sex } from './i-ticket';

export class Ticket implements ITicket {
  constructor(
    public sex: Sex = Sex.Male,
    public name: string = '',
    public reason: string = '',
    public tel: string = '',
    public age: number = 0,
    public ticketNumber: string = null
  ) {}

  public setTicketNumber(ticketNumber: string): void {
    this.ticketNumber = ticketNumber;
  }

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

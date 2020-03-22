import { ITicket, Sex } from './i-ticket';

export class Ticket implements ITicket {
  public sex: Sex;
  public name: string;
  public reason: string;
  public tel: string;
  public age: number;
  public ticketNumber: string;

  constructor(
    { sex, name, reason, tel, age, ticketNumber }: ITicket = {} as ITicket
  ) {
    this.sex = sex ? sex : Sex.Male;
    this.name = name ? name : '';
    this.reason = reason ? reason : '';
    this.tel = tel ? tel : '';
    this.age = age ? age : 0;
    this.ticketNumber = ticketNumber ? ticketNumber : '';
  }

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

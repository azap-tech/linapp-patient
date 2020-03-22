import { ITicket, Sex } from './i-ticket';

export class Ticket implements ITicket {
  public ticketNumber: string;
  public sex: Sex;
  public name: string;
  public reason: string;
  public tel: string;
  public age: number;
}

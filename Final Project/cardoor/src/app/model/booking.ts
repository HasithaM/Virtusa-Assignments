import {Payment} from './payment';

export class Booking {

  public carId: number;
  public customerId: number;
  public pickupLocation: string;
  public fromDate: string;
  public toDate: string;
  public dateBooked: string;
  public status: string;
  public payment: Payment;
}

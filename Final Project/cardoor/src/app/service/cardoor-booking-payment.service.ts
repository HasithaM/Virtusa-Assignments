import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {APIResponse} from '../model/apiresponse';
import {UrlConfiguration} from '../appconfig/url-configuration';

@Injectable({
  providedIn: 'root'
})
export class CardoorBookingPaymentService {

  constructor(private httpClient: HttpClient) {
  }

  public createBooking(booking: any, username: string, paymentStatus: string, payedAmount: number, totalAmount: number) {
    return this.httpClient.post<APIResponse>(UrlConfiguration.URL_CREATE_BOOKING + username + '/' + paymentStatus +
      '/' + payedAmount + '/' + totalAmount, booking);
  }

  public getBookingHistory(username: string) {
    return this.httpClient.get<any[]>(UrlConfiguration.URL_BOOKING_HISTORY + username);
  }

  public createRefundRequest(bookingId: number) {
    return this.httpClient.get<APIResponse>(UrlConfiguration.URL_CREATE_REFUND_REQUEST + bookingId);
  }

  public getAllBookingDetails() {
    return this.httpClient.get<any[]>(UrlConfiguration.URL_GET_ALL_BOOKINGS);
  }

  public getAllPaymentDetails() {
    return this.httpClient.get<any[]>(UrlConfiguration.URL_GET_ALL_PAYMENTS);
  }

  public getRefundRequests() {
    return this.httpClient.get<any[]>(UrlConfiguration.URL_GET_REFUND_REQUESTS);
  }

  public completeBooking(id) {
    return this.httpClient.get<APIResponse>(UrlConfiguration.URL_COMPLETE_BOOKING + id + '/' + 'D');
  }

  public approveRefund(id) {
    return this.httpClient.get<APIResponse>(UrlConfiguration.URL_APPROVE_REFUND + id);
  }

  public cancelBooking(id) {
    return this.httpClient.get<APIResponse>(UrlConfiguration.URL_CANCEL_BOOKING + id);
  }

  public countRefundRequests() {
    return this.httpClient.get<any>(UrlConfiguration.URL_COUNT_ALL_REFUND_REQUESTS);
  }

  public countAllBookings() {
    return this.httpClient.get<any>(UrlConfiguration.URL_COUNT_ALL_BOOKINGS);
  }

  public getTotalRevenue() {
    return this.httpClient.get<any>(UrlConfiguration.URL_GET_TOTAL_REVENUE);
  }

  public isRefundPending(bookingId: number) {
    return this.httpClient.get<APIResponse>(UrlConfiguration.URL_IS_REFUND_PENDING + bookingId);
  }
}

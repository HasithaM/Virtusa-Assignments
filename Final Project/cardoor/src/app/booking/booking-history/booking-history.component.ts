import {Component, OnInit} from '@angular/core';
import {CardoorBookingPaymentService} from '../../service/cardoor-booking-payment.service';
import swal from 'sweetalert';
import {AppRouter} from '../../appconfig/app-router';

@Component({
  selector: 'app-booking-history',
  templateUrl: './booking-history.component.html',
  styleUrls: ['./booking-history.component.css']
})
export class BookingHistoryComponent implements OnInit {

  bookings: any[];

  constructor(private cardoorBookingPaymentService: CardoorBookingPaymentService) {
  }

  ngOnInit(): void {

    this.getBookingDetails();
  }

  private getBookingDetails() {
    this.bookings = [];

    this.cardoorBookingPaymentService.getBookingHistory(localStorage.getItem('username'))
      .subscribe(data => {
        console.log(JSON.stringify(data));

        this.bookings = data;
      }, error => {
        console.log(JSON.stringify(error));
      });
  }

  public cancelAndRefund(bookingId: number) {
    if (bookingId !== null) {
      this.cardoorBookingPaymentService.createRefundRequest(bookingId)
        .subscribe(data => {
          console.log(JSON.stringify(data));

          swal({
            title: 'Successful!',
            text: 'Successfully Send the Request!',
            icon: 'success'
          })
            .then(result => {
              if (result) {
                this.reloadTheCurrentPage();
              } else {
                this.reloadTheCurrentPage();
              }
            });
        }, error => {
          console.log(JSON.stringify(error));

          swal({
            title: 'Oops!',
            text: 'Error while Requesting! Please Try Again!',
            icon: 'error'
          });
        });
    } else {
      swal({
        title: 'Oops!',
        text: 'Something went Wrong! Reload the Page!',
        icon: 'error'
      })
        .then(result => {
          if (result) {
            this.reloadTheCurrentPage();
          } else {
            this.reloadTheCurrentPage();
          }
        });
    }
  }

  private reloadTheCurrentPage() {
    AppRouter.reloadBookingHistory();
  }

  public bookingRefunded() {
    swal('Canceled!', 'Canceled and Refunded!');
  }

  public bookingDone() {
    swal('Done!', 'Booking Completed!');
  }

  public refundRequested() {
    swal('Pending!', 'Your Refund Request is Pending!');
  }
}

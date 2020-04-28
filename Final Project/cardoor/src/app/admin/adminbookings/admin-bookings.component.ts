import {Component, OnInit} from '@angular/core';
import {CardoorBookingPaymentService} from '../../service/cardoor-booking-payment.service';
import swal from 'sweetalert';
import {AppRouter} from '../../appconfig/app-router';

@Component({
  selector: 'app-admin-bookings',
  templateUrl: './admin-bookings.component.html',
  styleUrls: ['./admin-bookings.component.css']
})
export class AdminBookingsComponent implements OnInit {

  bookings: any[];

  constructor(private cardoorBookingPaymentService: CardoorBookingPaymentService) {
  }

  ngOnInit(): void {
    this.getBookings();
  }

  private getBookings() {
    this.cardoorBookingPaymentService.getAllBookingDetails()
      .subscribe(data => {
        console.log(JSON.stringify(data));

        this.bookings = data;
      }, error => {
        console.log(JSON.stringify(error));
      });
  }

  public completeBooking(id: any) {
    swal({
      title: 'Ready?',
      text: 'Are you sure you want to do this?',
      icon: 'warning',
      buttons: ['Oh noez!', 'Aww yiss!'],
      dangerMode: true,
    }).then(willDo => {
      if (willDo) {
        this.cardoorBookingPaymentService.isRefundPending(id)
          .subscribe(response => {
            if (response.status === 400) {
              console.log(JSON.stringify(response));

              swal({
                title: 'Oops!',
                text: 'Refund Request is Pending!',
                icon: 'error'
              });
            } else {
              this.cardoorBookingPaymentService.completeBooking(id)
                .subscribe(data => {
                  console.log(JSON.stringify(data));

                  if (data.status === 200) {
                    swal({
                      title: 'Successful!',
                      text: 'Request Successful!',
                      icon: 'success'
                    }).then(okay => {
                      AppRouter.reloadAdminBooking();
                    });
                  } else {
                    swal({
                      title: 'Oops!',
                      text: 'Request Unsuccessful!',
                      icon: 'error'
                    });
                  }
                }, error => {
                  console.log(JSON.stringify(error));

                  swal({
                    title: 'Oops!',
                    text: 'Request Unsuccessful!',
                    icon: 'error'
                  });
                });
            }
          }, error => {
            console.log(JSON.stringify(error));

            swal({
              title: 'Oops!',
              text: 'Request Unsuccessful!',
              icon: 'error'
            });
          });
      } else {
        swal('Okay', 'You are Safe!');
      }
    });
  }

  public warningMessage() {
    swal('Done!', 'This Booking is already Completed or Canceled!');
  }
}

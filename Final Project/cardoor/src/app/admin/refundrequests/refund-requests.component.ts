import {Component, OnInit} from '@angular/core';
import {CardoorBookingPaymentService} from '../../service/cardoor-booking-payment.service';
import swal from 'sweetalert';
import {AppRouter} from '../../appconfig/app-router';
import {ok} from 'assert';

@Component({
  selector: 'app-refund-requests',
  templateUrl: './refund-requests.component.html',
  styleUrls: ['./refund-requests.component.css']
})
export class RefundRequestsComponent implements OnInit {

  requests: any[];

  constructor(private cardoorBookingPaymentService: CardoorBookingPaymentService) {
  }

  ngOnInit(): void {
    this.getRefundRequests();
  }

  private getRefundRequests() {
    this.cardoorBookingPaymentService.getRefundRequests()
      .subscribe(data => {
        console.log(JSON.stringify(data));

        this.requests = data;
      }, error => {
        console.log(JSON.stringify(error));
      });
  }

  public approveRefund(paymentId: any, bookingId: any) {
    swal({
      title: 'Ready?',
      text: 'Are you sure you want to do this?',
      icon: 'warning',
      buttons: ['Oh noez!', 'Aww yiss!'],
      dangerMode: true,
    }).then(willDo => {
      if (willDo) {
        this.cardoorBookingPaymentService.approveRefund(paymentId)
          .subscribe(data => {
            console.log(JSON.stringify(data));

            if (data.status === 200) {
              this.cardoorBookingPaymentService.cancelBooking(bookingId)
                .subscribe(res => {
                  console.log(JSON.stringify(res));

                  if (res.status === 200) {
                    swal({
                      title: 'Successful!',
                      text: 'Request Successful!',
                      icon: 'success'
                    }).then(okay => {
                      console.log(JSON.stringify(res));
                      if (okay) {
                        AppRouter.reloadAdminRefund();
                      } else {
                        AppRouter.reloadAdminRefund();
                      }
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
      } else {
        swal('You are Safe!');
      }
    });
  }
}

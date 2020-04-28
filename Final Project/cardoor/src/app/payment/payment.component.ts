import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AppRouter} from '../appconfig/app-router';
import swal from 'sweetalert';
import {CardoorBookingPaymentService} from '../service/cardoor-booking-payment.service';
import {Booking} from '../model/booking';
import {APIResponse} from '../model/apiresponse';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  payedAmount: number;
  totalAmount: number;
  paymentStatus: string;

  booking: Booking = new Booking();

  apiResponse: APIResponse;

  constructor(private activatedRoute: ActivatedRoute,
              private cardoorBookingPaymentService: CardoorBookingPaymentService) {
  }

  ngOnInit(): void {
    this.getParameters();
  }

  public createBooking() {
    console.log('Token: ' + localStorage.getItem('accessToken'));
    this.cardoorBookingPaymentService
      .createBooking(this.booking, localStorage.getItem('username'), this.paymentStatus, this.payedAmount, this.totalAmount)
      .subscribe(data => {
        console.log(JSON.stringify(data));

        this.apiResponse = data;

        if (this.apiResponse.message === 'Successful!') {
          swal({
            title: 'Successful!',
            text: 'Successfully Booked!',
            icon: 'success'
          })
            .then(result => {
              if (result) {
                this.goToBookingHistory();
              } else {
                this.goToBookingHistory();
              }
            });
        } else if (this.apiResponse.message === 'Unsuccessful!') {
          swal({
            title: 'Oops!',
            text: 'Error while Booking! Please Try Again!',
            icon: 'error'
          })
            .then(result => {
              if (result) {
                this.goToCars();
              } else {
                this.goToCars();
              }
            });
        } else {
          swal({
            title: 'Oops!',
            text: 'Error while Booking! Please Try Again!',
            icon: 'error'
          })
            .then(result => {
              if (result) {
                this.goToCars();
              } else {
                this.goToCars();
              }
            });
        }
      }, error => {
        console.log(JSON.stringify(error));

        swal({
          title: 'Oops!',
          text: 'Error while Booking! Please Try Again!',
          icon: 'error'
        })
          .then(result => {
            if (result) {
              this.goToCars();
            } else {
              this.goToCars();
            }
          });
      });
  }

  private getParameters() {
    this.activatedRoute.queryParams.subscribe(
      params => {
        this.booking.carId = params.car;
        this.booking.pickupLocation = params.loc;
        this.booking.fromDate = params.pdate;
        this.booking.toDate = params.rdate;
        this.payedAmount = params.amount;
        this.totalAmount = params.tot;

        if (this.totalAmount === this.payedAmount) {
          this.paymentStatus = 'P'; // Payed (Full Amount)
        } else {
          this.paymentStatus = 'H'; // Half Payment
        }

      }, error => {
        console.log('Error: ' + error);
        swal({
          title: 'Oops!',
          text: 'Error Occurred!',
          icon: 'error'
        });
        this.goToCars();
      });
  }

  private goToCars() {
    AppRouter.reloadCars('all');
  }

  private goToBookingHistory() {
    AppRouter.reloadBookingHistory();
  }
}

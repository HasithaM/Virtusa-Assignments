import {Component, OnInit} from '@angular/core';
import {CardoorBookingPaymentService} from '../../service/cardoor-booking-payment.service';

@Component({
  selector: 'app-user-payments',
  templateUrl: './user-payments.component.html',
  styleUrls: ['./user-payments.component.css']
})
export class UserPaymentsComponent implements OnInit {

  payments: any[];

  constructor(private cardoorBookingPaymentService: CardoorBookingPaymentService) {
  }

  ngOnInit(): void {
    this.getPayments();
  }

  private getPayments() {
    this.cardoorBookingPaymentService.getAllPaymentDetails()
      .subscribe(data => {
        console.log(JSON.stringify(data));

        this.payments = data;
      }, error => {
        console.log(JSON.stringify(error));
      });
  }
}

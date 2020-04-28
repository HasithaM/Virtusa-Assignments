import {Component, OnInit} from '@angular/core';
import {CardoorLoginService} from '../../service/cardoor-login.service';
import {AppRouter} from '../../appconfig/app-router';
import {CardoorManagecarsService} from '../../service/cardoor-managecars.service';
import {CardoorBookingPaymentService} from '../../service/cardoor-booking-payment.service';
import {CardoorRegisterService} from '../../service/cardoor-register.service';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  totalCars: number;
  totalBookings: number;
  totalRevenue: string;
  totalUsers: number;

  constructor(private cardoorLoginService: CardoorLoginService,
              private cardoorManagecarsService: CardoorManagecarsService,
              private cardoorBookingPaymentService: CardoorBookingPaymentService,
              private cardoorRegisterService: CardoorRegisterService) {

    if (!this.cardoorLoginService.isUserAnAdmin()) {
      AppRouter.reloadNotFound();
    }
  }

  ngOnInit(): void {
    this.countAllCars();
    this.countAllBookings();
    this.getTotalRevenue();
    this.countAllUsers();
  }

  private countAllCars() {
    this.totalCars = 0;

    this.cardoorManagecarsService.countAllCars()
      .subscribe(data => {
        console.log(data);

        if (typeof (data) === 'number') {
          this.totalCars = data;
        }
      }, error => {
        this.totalCars = 0;
      });
  }

  private countAllBookings() {
    this.totalBookings = 0;

    this.cardoorBookingPaymentService.countAllBookings()
      .subscribe(data => {
        console.log(data);

        if (typeof (data) === 'number') {
          this.totalBookings = data;
        }
      }, error => {
        this.totalBookings = 0;
      });
  }

  private getTotalRevenue() {
    this.totalRevenue = '0';

    this.cardoorBookingPaymentService.getTotalRevenue()
      .subscribe(data => {
        console.log(data);

        if (typeof (data) === 'number') {
          this.totalRevenue = this.numberFormatter(data);
        }
      }, error => {
        this.totalRevenue = '0';
      });
  }

  private countAllUsers() {
    this.totalUsers = 0;

    this.cardoorRegisterService.countAllUsers()
      .subscribe(data => {
        console.log(data);

        if (typeof (data) === 'number') {
          this.totalUsers = data;
        }
      }, error => {
        this.totalUsers = 0;
      });
  }

  private numberFormatter(bigNumber) {
    if (bigNumber >= 1000000000) {
      return (bigNumber / 1000000000).toFixed(1).replace(/\.0$/, '') + 'G';
    }

    if (bigNumber >= 1000000) {
      return (bigNumber / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
    }

    if (bigNumber >= 1000) {
      return (bigNumber / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
    }

    return bigNumber;
  }
}

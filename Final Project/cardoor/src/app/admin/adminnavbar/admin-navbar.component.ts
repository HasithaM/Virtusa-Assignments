import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AppRouter} from '../../appconfig/app-router';
import {CardoorBookingPaymentService} from '../../service/cardoor-booking-payment.service';

@Component({
  selector: 'app-adminnavbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.css']
})
export class AdminNavbarComponent implements OnInit {

  refundRequests: number;
  pageName: string;

  constructor(private router: Router,
              private cardoorBookingPaymentService: CardoorBookingPaymentService) {
  }

  ngOnInit(): void {
    this.checkPage();
    this.countRefundRequests();
  }

  public checkPage() {
    if (this.router.url === '/admin') {
      this.pageName = 'Dashboard';
    } else if (this.router.url === '/admin/cars') {
      this.pageName = 'All Cars';
    } else if (this.router.url === '/admin/cars/manage') {
      this.pageName = 'Manage Cars';
    } else if (this.router.url === '/admin/bookings') {
      this.pageName = 'All Bookings';
    } else if (this.router.url === '/admin/payments') {
      this.pageName = 'All Payments';
    }
  }

  public reloadAdmin() {
    AppRouter.reloadAdmin();
  }

  public reloadRefundRequests() {
    AppRouter.reloadAdminRefund();
  }

  public reloadAdminProfile() {
    AppRouter.reloadAdminProfile();
  }

  public reloadAdminSettings() {
    AppRouter.reloadAdminSettings();
  }

  public reloadLogout() {
    AppRouter.reloadLogout();
  }

  private countRefundRequests() {
    this.refundRequests = 0;

    this.cardoorBookingPaymentService.countRefundRequests()
      .subscribe(data => {
        console.log(data);

        if (typeof (data) === 'number') {
          this.refundRequests = data;
        }
      }, error => {
        console.log(error);

        this.refundRequests = 0;
      });
  }
}

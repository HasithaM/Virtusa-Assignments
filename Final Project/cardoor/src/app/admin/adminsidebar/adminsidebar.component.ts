import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Approuter} from '../../appconfig/approuter';

@Component({
  selector: 'app-adminsidebar',
  templateUrl: './adminsidebar.component.html',
  styleUrls: ['./adminsidebar.component.css']
})
export class AdminsidebarComponent implements OnInit {

  adminTxt = '';
  adminCarsTxt = '';
  adminCarsManageTxt = '';
  adminBookingsTxt = '';
  adminPaymentsTxt = '';
  adminSettingsTxt = '';

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.checkRoute();
  }

  public reloadAdmin() {
    Approuter.reloadAdmin();
  }

  public reloadCars() {
    Approuter.reloadAdminCars();
  }

  public reloadManageCars() {
    Approuter.reloadAdminManageCars();
  }

  public reloadBooking() {
    Approuter.reloadAdminBooking();
  }

  public reloadPayment() {
    Approuter.reloadAdminPayment();
  }

  public reloadSettings() {
    Approuter.reloadAdminSettings();
  }

  public checkRoute() {
    if (this.router.url === '/admin') {
      this.adminTxt = 'active';
    } else if (this.router.url === '/admin/cars') {
      this.adminCarsTxt = 'active';
    } else if (this.router.url === '/admin/cars/manage') {
      this.adminCarsManageTxt = 'active';
    } else if (this.router.url === '/admin/bookings') {
      this.adminBookingsTxt = 'active';
    } else if (this.router.url === '/admin/payments') {
      this.adminPaymentsTxt = 'active';
    } else if (this.router.url === '/admin/settings') {
      this.adminSettingsTxt = 'active';
    }
  }
}

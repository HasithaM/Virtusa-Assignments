import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AppRouter} from '../../appconfig/app-router';

@Component({
  selector: 'app-adminsidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.css']
})
export class AdminSidebarComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  public reloadAdmin() {
    AppRouter.reloadAdmin();
  }

  public reloadCars() {
    AppRouter.reloadAdminCars();
  }

  public reloadManageCars() {
    AppRouter.reloadAdminManageCars(0, 'create');
  }

  public reloadBooking() {
    AppRouter.reloadAdminBooking();
  }

  public reloadPayment() {
    AppRouter.reloadAdminPayment();
  }

  public reloadSettings() {
    AppRouter.reloadAdminSettings();
  }

  public reloadLogout() {
    AppRouter.reloadLogout();
  }

  public checkRoute(url: string) {
    if (this.router.url === url) {
      return true;
    } else {
      return false;
    }
  }

  public reloadRefund() {
    AppRouter.reloadAdminRefund();
  }
}

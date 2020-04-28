import {Component, OnInit} from '@angular/core';
import {CardoorLoginService} from '../service/cardoor-login.service';
import {AppRouter} from '../appconfig/app-router';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, public cardoorLoginService: CardoorLoginService) {
  }

  ngOnInit(): void {
  }

  public reloadHome() {
    AppRouter.reloadHome();
  }

  public reloadAbout() {
    AppRouter.reloadAbout();
  }

  public reloadContact() {
    AppRouter.reloadContact();
  }

  public reloadLogin() {
    AppRouter.reloadLogin();
  }

  public reloadAdmin() {
    AppRouter.reloadAdmin();
  }

  public reloadCars(brand: string) {
    AppRouter.reloadCars(brand);
  }

  public reloadBookingHistory() {
    AppRouter.reloadBookingHistory();
  }

  public reloadLogout() {
    AppRouter.reloadLogout();
  }

  public isActive(url: string): boolean {
    if (this.router.url.indexOf(url) > -1) {
      return true;
    } else {
      return false;
    }
  }
}

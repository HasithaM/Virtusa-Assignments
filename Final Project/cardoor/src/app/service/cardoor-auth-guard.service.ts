import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {CardoorLoginService} from './cardoor-login.service';

@Injectable({
  providedIn: 'root'
})
export class CardoorAuthGuardService implements CanActivate {

  constructor(private router: Router, private cardoorLoginService: CardoorLoginService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.cardoorLoginService.isUserLoggedIn()) {
      return true;
    } else {
      this.goToLogin();
      return false;
    }
  }

  goToLogin() {
    window.location.href = 'http://' + window.location.hostname + ':' + window.location.port + '/login';
  }
}

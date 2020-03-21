import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {CardoorLoginService} from './cardoor-login.service';
import {Approuter} from '../appconfig/approuter';

@Injectable({
  providedIn: 'root'
})
export class CardoorAuthGuardService implements CanActivate {

  constructor(private router: Router, private cardoorLoginService: CardoorLoginService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.cardoorLoginService.isUserLoggedIn()) {
      return true;
    } else {
      Approuter.reloadLogin();
      return false;
    }
  }
}

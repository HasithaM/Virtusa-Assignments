import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CardoorLoginService} from '../service/cardoor-login.service';
import {Approuter} from '../appconfig/approuter';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router,
              private cardoorLoginService: CardoorLoginService) {
  }

  ngOnInit(): void {
    this.cardoorLoginService.logout();
    /*this.router.navigate(['']);*/
    this.goToHome();
  }

  public goToHome() {
    Approuter.reloadHome();
  }
}

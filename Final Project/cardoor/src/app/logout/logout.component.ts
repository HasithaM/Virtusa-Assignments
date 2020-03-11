import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CardoorLoginService} from '../service/cardoor-login.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router, private cardoorLoginService: CardoorLoginService) {
  }

  ngOnInit(): void {
    this.cardoorLoginService.logout();
    /*this.router.navigate(['']);*/
    this.goToHome();
  }

  goToHome() {
    window.location.href = 'http://' + window.location.hostname + ':' + window.location.port;
  }
}

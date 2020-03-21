import {Component, OnInit} from '@angular/core';
import {CardoorLoginService} from '../service/cardoor-login.service';
import {Approuter} from '../appconfig/approuter';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public cardoorLoginService: CardoorLoginService) {
  }

  ngOnInit(): void {
  }

  public reloadHome() {
    Approuter.reloadHome();
  }

  public reloadAbout() {
    Approuter.reloadAbout();
  }

  public reloadContact() {
    Approuter.reloadContact();
  }

  public reloadLogin() {
    Approuter.reloadLogin();
  }

  public reloadAdmin() {
    Approuter.reloadAdmin();
  }
}

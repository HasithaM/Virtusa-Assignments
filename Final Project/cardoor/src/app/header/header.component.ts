import { Component, OnInit } from '@angular/core';
import {CardoorLoginService} from '../service/cardoor-login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public cardoorLoginService: CardoorLoginService) { }

  ngOnInit(): void {
  }

  reloadHome() {
    window.location.href = 'http://' + window.location.hostname + ':' + window.location.port;
  }

  reloadAbout() {
    window.location.href = 'http://' + window.location.hostname + ':' + window.location.port + '/about';
  }

  reloadBooking() {
    window.location.href = 'http://' + window.location.hostname + ':' + window.location.port + '/booking';
  }

  reloadContact() {
    window.location.href = 'http://' + window.location.hostname + ':' + window.location.port + '/contact';
  }

  reloadLogin() {
    window.location.href = 'http://' + window.location.hostname + ':' + window.location.port + '/login';
  }
}

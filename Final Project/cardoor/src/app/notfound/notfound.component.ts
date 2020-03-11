import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css']
})
export class NotfoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  reloadHome() {
    window.location.href = 'http://' + window.location.hostname + ':' + window.location.port;
  }
}

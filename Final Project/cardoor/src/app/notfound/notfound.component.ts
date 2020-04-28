import {Component, OnInit} from '@angular/core';
import {AppRouter} from '../appconfig/app-router';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css']
})
export class NotfoundComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  public reloadHome() {
    AppRouter.reloadHome();
  }
}

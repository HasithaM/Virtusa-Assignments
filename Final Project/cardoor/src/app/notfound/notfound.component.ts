import { Component, OnInit } from '@angular/core';
import {Approuter} from '../appconfig/approuter';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css']
})
export class NotfoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public reloadHome() {
    Approuter.reloadHome();
  }
}

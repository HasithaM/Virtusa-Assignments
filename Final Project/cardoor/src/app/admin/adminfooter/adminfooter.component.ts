import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminfooter',
  templateUrl: './adminfooter.component.html',
  styleUrls: ['./adminfooter.component.css']
})
export class AdminfooterComponent implements OnInit {

  currentYear: Date;

  constructor() {
    this.currentYear = new Date(Date.now());
  }

  ngOnInit(): void {
  }

}

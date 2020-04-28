import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminfooter',
  templateUrl: './admin-footer.component.html',
  styleUrls: ['./admin-footer.component.css']
})
export class AdminFooterComponent implements OnInit {

  currentYear: Date;

  constructor() {
    this.currentYear = new Date(Date.now());
  }

  ngOnInit(): void {
  }

}

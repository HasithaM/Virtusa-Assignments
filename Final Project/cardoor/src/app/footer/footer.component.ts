import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  currentYear: Date;

  constructor() {
    this.currentYear = new Date(Date.now());
  }

  ngOnInit(): void {
  }
}

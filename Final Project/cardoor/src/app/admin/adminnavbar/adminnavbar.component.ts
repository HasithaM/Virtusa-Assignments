import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-adminnavbar',
  templateUrl: './adminnavbar.component.html',
  styleUrls: ['./adminnavbar.component.css']
})
export class AdminnavbarComponent implements OnInit {

  pageName: string;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.checkPage();
  }

  public checkPage() {
    if (this.router.url === '/admin') {
      this.pageName = 'Dashboard';
    } else if (this.router.url === '/admin/cars') {
      this.pageName = 'All Cars';
    } else if (this.router.url === '/admin/cars/manage') {
      this.pageName = 'Manage Cars';
    } else if (this.router.url === '/admin/bookings') {
      this.pageName = 'All Bookings';
    } else if (this.router.url === '/admin/payments') {
      this.pageName = 'All Payments';
    }
  }
}

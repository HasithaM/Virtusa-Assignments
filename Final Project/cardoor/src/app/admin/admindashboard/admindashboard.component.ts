import {Component, OnInit} from '@angular/core';
import {CardoorLoginService} from '../../service/cardoor-login.service';
import {Approuter} from '../../appconfig/approuter';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {

  constructor(private cardoorLoginService: CardoorLoginService) {
    if (!this.cardoorLoginService.isUserAnAdmin()) {
      Approuter.reloadNotFound();
    }
  }

  ngOnInit(): void {
  }
}

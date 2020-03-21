import {Component, OnInit} from '@angular/core';
import {Approuter} from '../../appconfig/approuter';
import {CardoorLoginService} from '../../service/cardoor-login.service';

@Component({
  selector: 'app-carlist',
  templateUrl: './carlist.component.html',
  styleUrls: ['./carlist.component.css']
})
export class CarlistComponent implements OnInit {

  constructor(private cardoorLoginService: CardoorLoginService) {
  }

  ngOnInit(): void {
    if (!this.cardoorLoginService.isUserAnAdmin()) {
      Approuter.reloadNotFound();
    }
  }
}

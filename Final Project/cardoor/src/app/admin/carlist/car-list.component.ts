import {Component, OnInit} from '@angular/core';
import {CardoorLoginService} from '../../service/cardoor-login.service';
import {CardoorManagecarsService} from '../../service/cardoor-managecars.service';
import {ActivatedRoute} from '@angular/router';
import {AppRouter} from '../../appconfig/app-router';

@Component({
  selector: 'app-carlist',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  cars: any[];
  brandName: string;

  constructor(private activatedRoute: ActivatedRoute,
              private cardoorLoginService: CardoorLoginService,
              private cardoorManagecarsService: CardoorManagecarsService) {
  }

  ngOnInit(): void {
    /*if (!this.cardoorLoginService.isUserAnAdmin()) {
      AppRouter.reloadNotFound();
    }*/

    this.brandName = 'all';

    /*this.activatedRoute.queryParams.subscribe(params => {
      this.brandName = params.brand;
    }, error => {
      this.brandName = 'error';
    });*/

    this.getCars(this.brandName);
  }

  private getCars(brandName: string) {
    this.cars = [];

    if (this.brandName !== 'error') {
      this.cardoorManagecarsService.getCars(brandName)
        .subscribe(data => {
          console.log(JSON.stringify(data));

          this.cars = data;
        }, error => {
          console.log(JSON.stringify(error));
        });
    } else {
      this.cardoorManagecarsService.getCars('all')
        .subscribe(data => {
          console.log(JSON.stringify(data));

          this.cars = data;
        }, error => {
          console.log(JSON.stringify(error));
        });
    }
  }

  public updateCar(id: any) {
    AppRouter.reloadAdminManageCars(id, 'update');
  }

  public deleteCar(id: any) {
    AppRouter.reloadAdminManageCars(id, 'delete');
  }
}

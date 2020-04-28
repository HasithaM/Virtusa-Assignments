import {Component, OnInit} from '@angular/core';
import {CardoorManagecarsService} from '../service/cardoor-managecars.service';
import {ActivatedRoute} from '@angular/router';
import {CardoorTokenService} from '../service/cardoor-token.service';
import swal from 'sweetalert';
import {APIResponse} from '../model/apiresponse';
import {AppRouter} from '../appconfig/app-router';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  cars: any = [];
  apiResponse: APIResponse;

  tokenStatus: boolean;
  brandName: string;

  constructor(private activatedRoute: ActivatedRoute,
              private cardoorManagecarsService: CardoorManagecarsService,
              private cardoorTokenService: CardoorTokenService) {
  }

  async ngOnInit() /*: void*/ {
    this.tokenStatus = false;
    this.brandName = '';

    this.activatedRoute.queryParams.subscribe(params => {
      this.brandName = params.brand;
    }, error => {
      this.brandName = 'error';
    });

    await this.checkToken();
    this.getCars(this.brandName);
  }

  private getCars(brandName): void {
    this.cars = [];

    if (this.tokenStatus) {
      if (brandName !== 'error') {
        this.cardoorManagecarsService.getCars(brandName)
          .subscribe(data => {
            console.log('data: ' + JSON.stringify(data));
            this.cars = data;
          }, error => {
            console.log('error: ' + JSON.stringify(error));
          });
      } else {
        this.cardoorManagecarsService.getCars('all')
          .subscribe(data => {
            console.log('data: ' + JSON.stringify(data));
            this.cars = data;
          }, error => {
            console.log('error: ' + JSON.stringify(error));
          });
      }
    } else {
      swal({
        title: 'Oops!',
        text: 'Session Timed Out! Login Back!',
        icon: 'error',
        buttons: ['Cancel', 'OK'],
      })
        .then(result => {
          if (result) {
            this.goToLogout();
          } else {
            this.goToLogout();
          }
        });
    }
  }

  private async checkToken() {
    await this.cardoorTokenService.checkToken(
      localStorage.getItem('username'),
      localStorage.getItem('accessToken'),
      localStorage.getItem('refreshToken'))
      .toPromise()
      .then(data => {
        console.log('data: ' + data.message);

        this.apiResponse = data;

        if (this.apiResponse.message === 'Continue!') {
          console.log(this.apiResponse.message);

          this.tokenStatus = true;
        } else if (this.apiResponse.message === 'New Token!') {
          console.log('Old: ' + localStorage.getItem('accessToken'));

          // sessionStorage.setItem('accessToken', this.apiResponse.accessTokens.access_token);
          // sessionStorage.setItem('refreshToken', this.apiResponse.accessTokens.refresh_token);

          localStorage.removeItem('accessToken');
          localStorage.removeItem('refreshToken');

          localStorage.setItem('accessToken', this.apiResponse.accessTokens.access_token);
          localStorage.setItem('refreshToken', this.apiResponse.accessTokens.refresh_token);

          console.log('New: ' + localStorage.getItem('accessToken'));

          this.tokenStatus = true;
        } else if (this.apiResponse.message === 'Unsuccessful!') {
          this.tokenStatus = false;
        } else {
          this.tokenStatus = false;
        }
      }, error => {
        console.log('Error: ' + JSON.stringify(error));

        this.tokenStatus = false;
      });
  }

  public reloadBooking(id) {
    AppRouter.reloadBooking(id);
  }

  public carNotAvailable() {
    swal({
      title: 'Oops!',
      text: 'Sorry! Car is Not Available!',
      icon: 'error',
    });
  }

  public goToLogout() {
    AppRouter.reloadLogout();
  }

  public filterDeletedCars() {
    return this.cars.filter(x => x.status === true);
  }
}

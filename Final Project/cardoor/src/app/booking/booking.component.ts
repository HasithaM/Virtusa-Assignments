import {Component, OnInit} from '@angular/core';
import {CardoorManagecarsService} from '../service/cardoor-managecars.service';
import {ActivatedRoute} from '@angular/router';
import swal from 'sweetalert';
import {CardoorTokenService} from '../service/cardoor-token.service';
import {APIResponse} from '../model/apiresponse';
import {AppRouter} from '../appconfig/app-router';
import {isUndefined} from 'util';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  car: any = {};
  apiResponse: APIResponse;

  tokenStatus: boolean;

  pickUpLocation: any = 'Pickup Location';
  pickUpDate: any = '';
  returnDate: any = '';
  payingAmount: any = 'Choose';

  totalPayment: number;
  totalDays: number;

  constructor(private activatedRoute: ActivatedRoute,
              private cardoorManagecarsService: CardoorManagecarsService,
              private cardoorTokenService: CardoorTokenService) {
  }

  async ngOnInit() /*: void*/ {
    this.tokenStatus = false;
    let carId: number;

    this.activatedRoute.queryParams.subscribe(params => {
      carId = params.id;
    }, error => {
      carId = 0;
    });

    await this.checkToken();
    this.getCarById(carId);
  }

  private getCarById(carId): void {
    this.car = {};

    if (this.tokenStatus) {
      if (carId !== 0) {
        this.cardoorManagecarsService.getCarById(carId)
          .subscribe(data => {
            console.log('data: ' + JSON.stringify(data));
            this.car = data;
          }, error => {
            console.log('error: ' + JSON.stringify(error));
          });
      } else {
        swal({
          title: 'Oops!',
          text: 'Server Error! Going Back!',
          icon: 'error',
          buttons: ['Cancel', 'OK'],
        })
          .then(result => {
            if (result) {
              this.goToCars();
            } else {
              this.goToCars();
            }
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

  public completePayment(id: any, pickUpLocation: any, pickUpDate: any, returnDate: any, payingAmount: any, totalPayment: any) {
    if (this.pickUpLocation !== null && !isUndefined(this.pickUpLocation) && this.pickUpLocation.trim() !== ''
      && this.pickUpLocation !== 'Pickup Location'
      && this.pickUpDate !== null && !isUndefined(this.pickUpDate) && this.pickUpDate.trim() !== ''
      && this.returnDate !== null && !isUndefined(this.returnDate) && this.returnDate.trim() !== ''
      && this.payingAmount !== null && !isUndefined(this.payingAmount) && this.payingAmount.trim() !== ''
      && this.payingAmount !== 'Choose') {

      const pickUpDateF = formatDate(new Date(pickUpDate), 'yyyy-MM-dd', 'en_US');
      const returnDateF = formatDate(new Date(returnDate), 'yyyy-MM-dd', 'en_US');

      AppRouter.completePayment(id, pickUpLocation, pickUpDateF, returnDateF, payingAmount, totalPayment);
    } else {
      swal({
        title: 'Oops!',
        text: 'Please fill all the Details!',
        icon: 'error'
      });
    }
  }

  public calculateAmount(pricePerHour: any, pickUpDate: any, returnDate: any) {
    if (this.pickUpLocation !== null && !isUndefined(this.pickUpLocation) && this.pickUpLocation.trim() !== ''
      && this.pickUpLocation !== 'Pickup Location'
      && this.pickUpDate !== null && !isUndefined(this.pickUpDate) && this.pickUpDate.trim() !== ''
      && this.returnDate !== null && !isUndefined(this.returnDate) && this.returnDate.trim() !== '') {
      const fromDate = new Date(pickUpDate);
      const toDate = new Date(returnDate);

      this.totalDays = (toDate.getTime() - fromDate.getTime()) / (1000 * 3600 * 24);
      this.totalPayment = (pricePerHour * 24) * this.totalDays;
    } else {
      swal({
        title: 'Oops!',
        text: 'Please fill Pickup Location, Pickup Date and Return Date!',
        icon: 'error'
      });
    }
  }

  public goToCars() {
    AppRouter.reloadCars('all');
  }

  public goToLogout() {
    AppRouter.reloadLogout();
  }
}

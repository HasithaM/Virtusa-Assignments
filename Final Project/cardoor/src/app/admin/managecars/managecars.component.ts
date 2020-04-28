import {Component, OnInit} from '@angular/core';
import {CardoorManagecarsService} from '../../service/cardoor-managecars.service';
import swal from 'sweetalert';
import {CardoorTokenService} from '../../service/cardoor-token.service';
import {CardoorLoginService} from '../../service/cardoor-login.service';
import {AppRouter} from '../../appconfig/app-router';
import {CarModel} from '../../model/car-model';
import {Car} from '../../model/car';
import {APIResponse} from '../../model/apiresponse';
import {ActivatedRoute} from '@angular/router';
import {isUndefined} from 'util';

@Component({
  selector: 'app-managecars',
  templateUrl: './managecars.component.html',
  styleUrls: ['./managecars.component.css']
})
export class ManagecarsComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
              private cardoorManagecarsService: CardoorManagecarsService,
              private cardoorTokenService: CardoorTokenService,
              private cardoorLoginService: CardoorLoginService) {
  }

  selectedFileOne: File;
  selectedFileTwo: File;
  selectedFileThree: File;

  apiResponse: APIResponse;
  carModel: CarModel = new CarModel('', '');
  car: Car = new Car('', '', '', '', '', 0, 0,
    '', 0, '', this.carModel);

  carBrandNames = ['MERCEDES BENZ', 'BMW', 'AUDI', 'TOYOTA', 'NISSAN', 'MAZDA'];
  carGearTypes = ['MANUAL', 'AUTOMATIC'];
  carFuelTypes = ['PETROL', 'DIESEL', 'HYBRID'];

  carDisplayBrandName: string;
  carDisplayImage: string;

  tokenStatus: boolean;

  method: string;
  paramCarID: number;
  carData: any;

  ngOnInit(): void {
    this.tokenStatus = false;
    this.carData = [];

    if (!this.cardoorLoginService.isUserAnAdmin()) {
      AppRouter.reloadNotFound();
    }

    this.activatedRoute.queryParams.subscribe(params => {
      this.method = params.method;
      this.paramCarID = params.id;

      if (!isUndefined(this.method) && this.method !== null) {
        this.getCarById(this.paramCarID);
      }
    }, error => {
      this.method = 'error';
    });
  }

  public onFileChangedOne(event) {
    // Select File
    this.selectedFileOne = event.target.files[0];
  }

  public onFileChangedTwo(event) {
    // Select File
    this.selectedFileTwo = event.target.files[0];
  }

  public onFileChangedThree(event) {
    // Select File
    this.selectedFileThree = event.target.files[0];
  }

  public goToLogout() {
    AppRouter.reloadLogout();
  }

  async addCar() /*: void*/ {
    console.log('Calling Method Check Token: Token Status - ' + this.tokenStatus);
    await this.checkToken();
    console.log('Token Status: ' + this.tokenStatus);

    console.log('token: ' + localStorage.getItem('accessToken'));

    if (this.car.carBrandName !== null && !isUndefined(this.car.carBrandName) && this.car.carBrandName.trim() !== ''
      && this.car.carNumber !== null && !isUndefined(this.car.carNumber) && this.car.carNumber.trim() !== ''
      && this.car.fuelType !== null && !isUndefined(this.car.fuelType) && this.car.fuelType.trim() !== ''
      && this.car.gearType !== null && !isUndefined(this.car.gearType) && this.car.gearType.trim() !== ''
      && this.car.noOfPassengers !== null && !isUndefined(this.car.noOfPassengers) && this.car.noOfPassengers.trim() !== ''
      && this.car.doorsCount !== null && !isUndefined(this.car.doorsCount) && this.car.doorsCount !== 0
      && this.car.mileagePerGallon !== null && !isUndefined(this.car.mileagePerGallon) && this.car.mileagePerGallon !== 0
      && this.car.acNonAc !== null && !isUndefined(this.car.acNonAc) && this.car.acNonAc.trim() !== ''
      && this.car.bagsCanHold !== null && !isUndefined(this.car.bagsCanHold) && this.car.bagsCanHold !== 0
      && this.car.pricePerHour !== null && !isUndefined(this.car.pricePerHour) && this.car.pricePerHour.trim() !== ''
      && this.carModel.modelName !== null && !isUndefined(this.carModel.modelName) && this.carModel.modelName.trim() !== ''
      && this.carModel.modelColor !== null && !isUndefined(this.carModel.modelColor) && this.carModel.modelColor.trim() !== ''
      && this.selectedFileOne !== null && !isUndefined(this.selectedFileOne) && this.selectedFileOne.size > 0
      && this.selectedFileTwo !== null && !isUndefined(this.selectedFileTwo) && this.selectedFileTwo.size > 0
      && this.selectedFileThree !== null && !isUndefined(this.selectedFileThree) && this.selectedFileThree.size > 0) {

      console.log(this.selectedFileOne);

      const uploadCarData = new FormData();
      uploadCarData.append('car', JSON.stringify(this.car));
      uploadCarData.append('imageOne', this.selectedFileOne, this.selectedFileOne.name);
      uploadCarData.append('imageTwo', this.selectedFileTwo, this.selectedFileTwo.name);
      uploadCarData.append('imageThree', this.selectedFileThree, this.selectedFileThree.name);

      console.log(this.car);
      console.log(uploadCarData.get('car'));

      if (this.tokenStatus) {
        this.cardoorManagecarsService.addCar(uploadCarData)
          .subscribe(data => {
            console.log('Data: ' + JSON.stringify(data));

            if (data.message === 'Successful!') {
              swal({
                title: 'Successful!',
                text: 'Successfully Created!',
                icon: 'success'
              })
                .then(result => {
                  if (result) {
                    this.reloadCurrentPage();
                  } else {
                    this.reloadCurrentPage();
                  }
                });
              /*this.car = null;
              this.selectedFileOne = null;
              this.selectedFileTwo = null;
              this.selectedFileThree = null;*/

            } else if (data.message === 'Unsuccessful!') {
              swal({
                title: 'Oops!',
                text: 'Error while Creating! Please Try Again!',
                icon: 'error'
              });
            } else if (data.message === 'Car Exists!') {
              swal({
                title: 'Oops!',
                text: 'Car Already Exists!',
                icon: 'error'
              })
                .then(result => {
                  if (result) {
                    this.reloadCurrentPage();
                  } else {
                    this.reloadCurrentPage();
                  }
                });
            }
          }, error => {
            console.log(error);

            swal({
              title: 'Oops!',
              text: 'Error while Creating! Please Try Again!',
              icon: 'error'
            });
          });
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
    } else {
      swal({
        title: 'Oops!',
        text: 'Please fill all the Details!',
        icon: 'error'
      });
    }
  }

  async checkToken() {
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
          console.log('O: ' + localStorage.getItem('accessToken'));

          // sessionStorage.setItem('accessToken', this.apiResponse.accessTokens.access_token);
          // sessionStorage.setItem('refreshToken', this.apiResponse.accessTokens.refresh_token);

          localStorage.removeItem('accessToken');
          localStorage.removeItem('refreshToken');

          localStorage.setItem('accessToken', this.apiResponse.accessTokens.access_token);
          localStorage.setItem('refreshToken', this.apiResponse.accessTokens.refresh_token);

          console.log('N: ' + localStorage.getItem('accessToken'));

          this.tokenStatus = true;
        } else if (this.apiResponse.message === 'Unsuccessful!') {
          this.tokenStatus = false;
        } else {
          this.tokenStatus = false;
        }
      }, error => {
        console.log('Error: ' + error);

        this.tokenStatus = false;
      });
  }

  private getCarById(id: number) {
    this.cardoorManagecarsService.getCarById(id)
      .subscribe(data => {
        console.log(JSON.stringify(data));

        this.carData = data;

        this.car = this.carData;
        this.carModel.modelName = this.carData.carModel.modelName;
        this.carModel.modelColor = this.carData.carModel.modelColor;

        this.selectedFileOne = this.carData.carImages.imageOne;
        this.selectedFileTwo = this.carData.carImages.imageTwo;
        this.selectedFileThree = this.carData.carImages.imageThree;

        this.displayBrandDetails();
      }, error => {
        console.log(JSON.stringify(error));
      });
  }

  public displayBrandDetails() {
    if (this.car.carBrandName === 'MERCEDES BENZ') {
      this.carDisplayBrandName = 'MERCEDES BENZ';
      this.carDisplayImage = 'assets/admin/img/brands/benz.png';
    } else if (this.car.carBrandName === 'BMW') {
      this.carDisplayBrandName = 'BMW';
      this.carDisplayImage = 'assets/admin/img/brands/bmw.png';
    } else if (this.car.carBrandName === 'AUDI') {
      this.carDisplayBrandName = 'AUDI';
      this.carDisplayImage = 'assets/admin/img/brands/audi.png';
    } else if (this.car.carBrandName === 'TOYOTA') {
      this.carDisplayBrandName = 'TOYOTA';
      this.carDisplayImage = 'assets/admin/img/brands/toyota.png';
    } else if (this.car.carBrandName === 'NISSAN') {
      this.carDisplayBrandName = 'NISSAN';
      this.carDisplayImage = 'assets/admin/img/brands/nissan.png';
    } else if (this.car.carBrandName === 'MAZDA') {
      this.carDisplayBrandName = 'MAZDA';
      this.carDisplayImage = 'assets/admin/img/brands/mazda.png';
    } else {
      this.carDisplayBrandName = '';
      this.carDisplayImage = '';
    }
  }

  private reloadCurrentPage() {
    AppRouter.reloadAdminManageCars(0, 'create');
  }

  public deleteCar() {
    swal({
      title: 'Ready?',
      text: 'Are you sure you want to do this?',
      icon: 'warning',
      buttons: ['Oh noez!', 'Aww yiss!'],
      dangerMode: true,
    }).then(willDo => {
      if (willDo) {
        this.cardoorManagecarsService.deleteCar(this.paramCarID)
          .subscribe(data => {
            console.log(JSON.stringify(data));

            // if (data.status === 200) {
            swal({
              title: 'Successful!',
              text: 'Request Successful!',
              icon: 'success'
            }).then(okay => {
              this.reloadCurrentPage();
            });
            // } else {
            // swal({
            // title: 'Oops!',
            // text: 'Request Unsuccessful!',
            // icon: 'error'
            // });
            // }
          }, error => {
            console.log(JSON.stringify(error));

            swal({
              title: 'Oops!',
              text: 'Request Unsuccessful!',
              icon: 'error'
            });
          });
      } else {
        swal('Okay', 'You are Safe!');
      }
    });
  }

  public updateCar() {
    const uploadCarData = new FormData();
    uploadCarData.append('car', JSON.stringify(this.car));

    if (this.selectedFileOne.name !== null && !isUndefined(this.selectedFileOne.name)) {
      uploadCarData.append('imageOne', this.selectedFileOne, this.selectedFileOne.name);
    } else {
      uploadCarData.append('imageOne', null);
    }

    if (this.selectedFileTwo.name !== null && !isUndefined(this.selectedFileTwo.name)) {
      uploadCarData.append('imageTwo', this.selectedFileTwo, this.selectedFileTwo.name);
    } else {
      uploadCarData.append('imageTwo', null);
    }

    if (this.selectedFileThree.name !== null && !isUndefined(this.selectedFileThree.name)) {
      uploadCarData.append('imageThree', this.selectedFileThree, this.selectedFileThree.name);
    } else {
      uploadCarData.append('imageThree', null);
    }

    swal({
      title: 'Ready?',
      text: 'Are you sure you want to do this?',
      icon: 'warning',
      buttons: ['Oh noez!', 'Aww yiss!'],
      dangerMode: true,
    }).then(willDo => {
      if (willDo) {
        this.cardoorManagecarsService.updateCar(uploadCarData)
          .subscribe(data => {
            console.log(JSON.stringify(data));

            if (data.status === 200) {
              swal({
                title: 'Successful!',
                text: 'Request Successful!',
                icon: 'success'
              }).then(okay => {
                this.reloadCurrentPage();
              });
            } else {
              swal({
                title: 'Oops!',
                text: 'Request Unsuccessful!',
                icon: 'error'
              });
            }
          }, error => {
            console.log(JSON.stringify(error));

            swal({
              title: 'Oops!',
              text: 'Request Unsuccessful!',
              icon: 'error'
            });
          });
      } else {
        swal('Okay', 'You are Safe!');
      }
    });
  }
}

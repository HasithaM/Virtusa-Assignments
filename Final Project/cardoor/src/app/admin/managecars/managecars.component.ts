import {Component, OnInit} from '@angular/core';
import {CardoorManagecarsService} from '../../service/cardoor-managecars.service';
import {isUndefined} from 'util';
import swal from 'sweetalert';
import {CardoorTokenService} from '../../service/cardoor-token.service';
import {CardoorLoginService} from '../../service/cardoor-login.service';
import {Approuter} from '../../appconfig/approuter';
import {CarModel} from '../../model/car-model';
import {Car} from '../../model/car';
import {APIResponse} from '../../model/apiresponse';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-managecars',
  templateUrl: './managecars.component.html',
  styleUrls: ['./managecars.component.css']
})
export class ManagecarsComponent implements OnInit {

  constructor(private cardoorManagecarsService: CardoorManagecarsService,
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

  carBrandNames = [/*'Choose...',*/ 'MERCEDES BENZ', 'BMW', 'AUDI', 'TOYOTA', 'NISSAN', 'MAZDA'];
  carGearTypes = [/*'Choose...',*/ 'MANUAL', 'AUTOMATIC'];
  carFuelTypes = [/*'Choose...',*/ 'PETROL', 'DIESEL', 'HYBRID'];

  carDisplayBrandName: string;
  carDisplayImage: string;

  tokenStatus: boolean;

  ngOnInit(): void {
    this.tokenStatus = false;

    if (!this.cardoorLoginService.isUserAnAdmin()) {
      Approuter.reloadNotFound();
    }
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
    Approuter.reloadLogout();
  }

  async addCar() /*: void*/ {
    console.log('Calling Method Check Token: Token Status - ' + this.tokenStatus);
    await this.checkToken();
    console.log('Token Status: ' + this.tokenStatus);

    console.log(this.selectedFileOne);

    const uploadCarData = new FormData();
    uploadCarData.append('car', JSON.stringify(this.car));
    uploadCarData.append('imageOne', this.selectedFileOne, this.selectedFileOne.name);
    uploadCarData.append('imageTwo', this.selectedFileTwo, this.selectedFileTwo.name);
    uploadCarData.append('imageThree', this.selectedFileThree, this.selectedFileThree.name);

    console.log(this.car);
    console.log(uploadCarData.get('car'));

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

      if (this.tokenStatus) {
        this.cardoorManagecarsService.addCar(uploadCarData)
          .subscribe(data => {
            console.log('Data: ' + JSON.stringify(data));

            if (data.message === 'Successful!') {
              swal({
                title: 'Successful!',
                text: 'Successfully Created!',
                icon: 'success'
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

          console.log('N :' + localStorage.getItem('accessToken'));

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

  clear(form: NgForm) {
    form.resetForm();
  }
}

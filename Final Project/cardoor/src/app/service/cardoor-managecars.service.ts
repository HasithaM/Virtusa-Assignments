import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Urlconfiguration} from '../appconfig/urlconfiguration';
import {APIResponse} from '../model/apiresponse';
import {CardoorTokenService} from './cardoor-token.service';

@Injectable({
  providedIn: 'root'
})
export class CardoorManagecarsService {

  constructor(private httpClient: HttpClient,
              private cardoorTokenService: CardoorTokenService) {
  }


  public addCar(car) {
    return this.httpClient.post<any>(Urlconfiguration.URL_ADD_CAR, car/*, {
      headers: this.cardoorTokenService.createAuthorizationHeader()
    }*/);
  }

  public updateCar(car) {
    return this.httpClient.post<APIResponse>(Urlconfiguration.URL_UPDATE_CAR, car/*, {
      headers: this.cardoorTokenService.createAuthorizationHeader()
    }*/);
  }

  public deleteCar(car) {
    return this.httpClient.post<any>(Urlconfiguration.URL_DELETE_CAR, car/*, {
      headers: this.cardoorTokenService.createAuthorizationHeader()
    }*/);
  }

  public getCars(brandName) {
    return this.httpClient.get<any>(Urlconfiguration.URL_GET_CARS + brandName/*, {
      headers: this.cardoorTokenService.createAuthorizationHeader()
    }*/);
  }

  public getCarById(carId) {
    return this.httpClient.get<any>(Urlconfiguration.URL_GET_CAR_BY_ID + carId/*, {
      headers: this.cardoorTokenService.createAuthorizationHeader()
    }*/);
  }
}

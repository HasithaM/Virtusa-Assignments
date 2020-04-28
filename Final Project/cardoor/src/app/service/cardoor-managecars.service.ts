import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UrlConfiguration} from '../appconfig/url-configuration';
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
    return this.httpClient.post<any>(UrlConfiguration.URL_ADD_CAR, car/*, {
      headers: this.cardoorTokenService.createAuthorizationHeader()
    }*/);
  }

  public updateCar(car) {
    return this.httpClient.put<APIResponse>(UrlConfiguration.URL_UPDATE_CAR, car/*, {
      headers: this.cardoorTokenService.createAuthorizationHeader()
    }*/);
  }

  public deleteCar(carId) {
    return this.httpClient.get<APIResponse>(UrlConfiguration.URL_DELETE_CAR + carId/*, {
      headers: this.cardoorTokenService.createAuthorizationHeader()
    }*/);
  }

  public getCars(brandName) {
    return this.httpClient.get<any>(UrlConfiguration.URL_GET_CARS + brandName/*, {
      headers: this.cardoorTokenService.createAuthorizationHeader()
    }*/);
  }

  public getCarById(carId) {
    return this.httpClient.get<any>(UrlConfiguration.URL_GET_CAR_BY_ID + carId/*, {
      headers: this.cardoorTokenService.createAuthorizationHeader()
    }*/);
  }

  public countAllCars() {
    return this.httpClient.get<any>(UrlConfiguration.URL_COUNT_ALL_CARS);
  }
}

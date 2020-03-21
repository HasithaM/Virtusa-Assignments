import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Urlconfiguration} from '../appconfig/urlconfiguration';
import {APIResponse} from '../model/apiresponse';

@Injectable({
  providedIn: 'root'
})
export class CardoorLoginService {

  constructor(private httpClient: HttpClient) {
  }

  public authenticate(username, password) {
    return this.httpClient.get<APIResponse>(Urlconfiguration.URL_LOGIN_USER + username + '/' + password);
  }

  public isUserLoggedIn() {
    const user = localStorage.getItem('username'); // sessionStorage.getItem('username');
    return !(user === null);
  }

  public isUserAnAdmin() {
    const userRole = localStorage.getItem('userRole'); // sessionStorage.getItem('userRole');
    return (userRole === 'A');
  }

  public setUserData(username, parameter, accessToken, refreshToken) {
    // sessionStorage.setItem('username', this.username);
    // sessionStorage.setItem('userRole', this.apiResponse.parameter);
    // sessionStorage.setItem('accessToken', this.apiResponse.accessToken.access_token);
    // sessionStorage.setItem('refreshToken', this.apiResponse.accessToken.refresh_token);

    localStorage.setItem('username', username);
    localStorage.setItem('userRole', parameter);
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
  }

  public logout() {
    // sessionStorage.removeItem('username');
    // sessionStorage.removeItem('userRole');
    // sessionStorage.removeItem('accessToken');
    // sessionStorage.removeItem('refreshToken');
    // sessionStorage.clear();

    localStorage.removeItem('username');
    localStorage.removeItem('userRole');
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.clear();
  }
}

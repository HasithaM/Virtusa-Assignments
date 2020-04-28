import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {APIResponse} from '../model/apiresponse';
import {UrlConfiguration} from '../appconfig/url-configuration';

@Injectable({
  providedIn: 'root'
})
export class CardoorTokenService {

  constructor(private httpClient: HttpClient) {
  }

  public checkToken(username, accessToken, refreshToken) {
    return this.httpClient.get<APIResponse>(UrlConfiguration.URL_CHECK_TOKEN + username + '/' + accessToken + '/' + refreshToken);
  }

  public refreshToken(username, refreshToken) {
    return this.httpClient.get<APIResponse>(UrlConfiguration.URL_REFRESH_TOKEN + username + '/' + refreshToken);
  }

  /*public createAuthorizationHeader() {
    let httpHeaders = new HttpHeaders();

    httpHeaders = httpHeaders.append('Accept', 'application/json');
    httpHeaders = httpHeaders.append('Authorization', 'bearer ' + localStorage.getItem('accessToken'));

    return httpHeaders;
  }*/
}

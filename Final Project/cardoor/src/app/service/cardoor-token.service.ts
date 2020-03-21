import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {APIResponse} from '../model/apiresponse';

@Injectable({
  providedIn: 'root'
})
export class CardoorTokenService {

  constructor(private httpClient: HttpClient) {
  }

  public checkToken(username, accessToken, refreshToken) {
    return this.httpClient.get<APIResponse>('http://localhost:8595/user/checktoken/' + username + '/' + accessToken + '/' + refreshToken);
  }

  /*public createAuthorizationHeader() {
    let httpHeaders = new HttpHeaders();

    httpHeaders = httpHeaders.append('Accept', 'application/json');
    httpHeaders = httpHeaders.append('Authorization', 'bearer ' + localStorage.getItem('accessToken'));

    return httpHeaders;
  }*/
}

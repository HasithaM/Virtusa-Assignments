import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from './cardoor-register.service';

export class APIResponse {
  constructor(public status: number,
              public message: string,
              public accessTokens: AccessTokens) {
  }
}

export class AccessTokens {
  constructor(public access_token: string,
              public token_type: string,
              public refresh_token: string,
              public expires_in: number,
              public scope: string) {
  }
}

@Injectable({
  providedIn: 'root'
})
export class CardoorLoginService {

  constructor(private httpClient: HttpClient) {
  }

  public authenticate(username, password) {
    return this.httpClient.get<APIResponse>('http://localhost:8595/user/login/' + username + '/' + password);

    /*return this.httpClient.get<any>('http://localhost:7585/car/test', {
      headers: new HttpHeaders({'Authorization': 'bearer fc9136e2-c053-42db-a683-149ad52e0397', 'Access-Control-Allow-Origin': 'http://localhost:4200'})
    });*/
  }

  public isUserLoggedIn() {
    const user = sessionStorage.getItem('username');
    return !(user === null);
  }

  public logout() {
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('accessToken');
    sessionStorage.removeItem('refreshToken');
  }
}

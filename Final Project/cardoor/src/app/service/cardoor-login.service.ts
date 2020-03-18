import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

export class APIResponse {
  constructor(public status: number,
              public message: string,
              public parameter: string,
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

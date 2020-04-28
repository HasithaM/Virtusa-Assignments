import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UrlConfiguration} from '../appconfig/url-configuration';
import {User} from '../model/user';
import {APIResponse} from '../model/apiresponse';

@Injectable({
  providedIn: 'root'
})
export class CardoorRegisterService {

  constructor(private httpClient: HttpClient) {
  }

  public createUser(user) {
    return this.httpClient.post<APIResponse>(UrlConfiguration.URL_REGISTER_USER, user);
  }

  public getUserByEmail(user) {
    return this.httpClient.get<User>(UrlConfiguration.URL_GET_USER + user.emailAddress);
  }

  public getUserById(id) {
    return this.httpClient.get<User>(UrlConfiguration.URL_GET_USER_BY_ID + id);
  }

  /*public updateUser(user) {
    return this.httpClient.put<User>('http://localhost:8595/user/user', user);
  }

  public deleteUser(user) {
    return this.httpClient.delete<User>('http://localhost:8595/user/user', user);
  }*/

  public countAllUsers() {
    return this.httpClient.get<any>(UrlConfiguration.URL_COUNT_ALL_USERS);
  }
}

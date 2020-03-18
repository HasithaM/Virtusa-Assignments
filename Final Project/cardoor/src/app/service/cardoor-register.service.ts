import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {APIResponse} from './cardoor-login.service';

export class User {
  constructor(public firstName: string,
              public lastName: string,
              public username: string,
              public password: string,
              public emailAddress: string,
              public phoneNumber: string) {
  }
}

@Injectable({
  providedIn: 'root'
})
export class CardoorRegisterService {

  constructor(private httpClient: HttpClient) {
  }

  public createUser(user) {
    return this.httpClient.post<APIResponse>('http://localhost:8595/user/user', user);
  }

  public getUserByEmail(user) {
    return this.httpClient.get<User>('http://localhost:8595/user/email/' + user.emailAddress);
  }

  /*public updateUser(user) {
    return this.httpClient.put<User>('http://localhost:8595/user/user', user);
  }

  public deleteUser(user) {
    return this.httpClient.delete<User>('http://localhost:8595/user/user', user);
  }*/
}

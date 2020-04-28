import {Component, OnInit} from '@angular/core';
import {CardoorLoginService} from '../service/cardoor-login.service';
import {Router} from '@angular/router';
import swal from 'sweetalert';
import {isUndefined} from 'util';
import {APIResponse} from '../model/apiresponse';
import {AppRouter} from '../appconfig/app-router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username;
  password;
  invalidLogin = false;
  apiResponse: APIResponse;

  constructor(private router: Router,
              private cardoorLoginService: CardoorLoginService) {
  }

  ngOnInit(): void {
  }

  public reloadAbout() {
    AppRouter.reloadAbout();
  }

  public reloadContact() {
    AppRouter.reloadContact();
  }

  public reloadRegister() {
    AppRouter.reloadRegister();
  }

  public loginUser(): void {
    console.log('Token: ' + localStorage.getItem('accessToken'));
    if (this.username !== null && !isUndefined(this.username) && this.password !== null && !isUndefined(this.password)) {
      this.cardoorLoginService.authenticate(this.username, this.password)
        .subscribe(data => {
          console.log('Login: ' + JSON.stringify(data));

          this.apiResponse = data;

          if (this.apiResponse.message === 'Username or Password is Wrong!') {
            swal({
              title: 'Oops!',
              text: 'Username or Password is Wrong!',
              icon: 'error'
            });
          } else if (this.apiResponse.message === 'Successful!') {
            this.cardoorLoginService.setUserData(
              this.username,
              this.apiResponse.parameter,
              this.apiResponse.accessTokens.access_token,
              this.apiResponse.accessTokens.refresh_token);

            this.invalidLogin = false;
            /* this.router.navigate(['']); */

            if (this.apiResponse.parameter === 'U') {
              AppRouter.reloadHome();
            } else if (this.apiResponse.parameter === 'A') {
              AppRouter.reloadAdmin();
            }
          }
        }, error => {
          console.log(error);
          this.invalidLogin = true;

          swal({
            title: 'Oops!',
            text: 'Username or Password is Wrong!',
            icon: 'error'
          });
        });
    } else {
      swal({
        title: 'Oops!',
        text: 'Please fill all the Details!',
        icon: 'error'
      });
    }
  }
}

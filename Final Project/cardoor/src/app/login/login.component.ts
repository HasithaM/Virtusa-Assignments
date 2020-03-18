import {Component, OnInit} from '@angular/core';
import {APIResponse, CardoorLoginService} from '../service/cardoor-login.service';
import {Router} from '@angular/router';
import swal from 'sweetalert';
import {isUndefined} from 'util';

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

  constructor(private router: Router, private cardoorLoginService: CardoorLoginService) {
  }

  ngOnInit(): void {
  }

  reloadAbout() {
    window.location.href = 'http://' + window.location.hostname + ':' + window.location.port + '/about';
  }

  reloadContact() {
    window.location.href = 'http://' + window.location.hostname + ':' + window.location.port + '/contact';
  }

  reloadRegister() {
    window.location.href = 'http://' + window.location.hostname + ':' + window.location.port + '/register';
  }

  goToUserHome() {
    window.location.href = 'http://' + window.location.hostname + ':' + window.location.port;
  }

  goToAdminHome() {
    window.location.href = 'http://' + window.location.hostname + ':' + window.location.port + '/admin';
  }

  loginUser(): void {
    console.log(this.username);
    if (this.username !== null && !isUndefined(this.username) && this.password !== null && !isUndefined(this.password)) {
      this.cardoorLoginService.authenticate(this.username, this.password).subscribe(data => {
        this.apiResponse = data;

        if (data.message === 'Username or Password is Wrong!') {
          swal({
            title: 'Oops!',
            text: 'Username or Password is Wrong!',
            icon: 'error'
          });
        } else if (data.message === 'Successful!') {
          sessionStorage.setItem('username', this.username);
          sessionStorage.setItem('accessToken', this.apiResponse.accessTokens.access_token);
          sessionStorage.setItem('refreshToken', this.apiResponse.accessTokens.refresh_token);

          this.invalidLogin = false;
          /* this.router.navigate(['']); */

          if (data.parameter === 'U') {
            this.goToUserHome();
          } else if (data.parameter === 'A') {
            this.goToAdminHome();
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

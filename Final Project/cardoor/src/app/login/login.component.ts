import {Component, OnInit} from '@angular/core';
import {APIResponse, CardoorLoginService} from '../service/cardoor-login.service';
import {Router} from '@angular/router';

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

  goToHome() {
    window.location.href = 'http://' + window.location.hostname + ':' + window.location.port;
  }

  loginUser(): void {
    this.cardoorLoginService.authenticate(this.username, this.password).subscribe(data => {
      this.apiResponse = data;

      sessionStorage.setItem('username', this.username);
      sessionStorage.setItem('accessToken', this.apiResponse.accessTokens.access_token);
      sessionStorage.setItem('refreshToken', this.apiResponse.accessTokens.refresh_token);

      this.invalidLogin = false;
      /*this.router.navigate(['']);*/
      this.goToHome();
    }, error => {
      console.log(error);
      this.invalidLogin = true;
    });
  }
}

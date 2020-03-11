import {Component, OnInit} from '@angular/core';
import {CardoorRegisterService, User} from '../service/cardoor-register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User = new User('', '', '', '', '', '');

  constructor(private cardoorService: CardoorRegisterService) {
  }

  ngOnInit(): void {
  }

  reloadLogin() {
    window.location.href = 'http://' + window.location.hostname + ':' + window.location.port + '/login';
  }

  reloadAbout() {
    window.location.href = 'http://' + window.location.hostname + ':' + window.location.port + '/about';
  }

  reloadContact() {
    window.location.href = 'http://' + window.location.hostname + ':' + window.location.port + '/contact';
  }

  createUser(): void {
    this.cardoorService.createUser(this.user)
      .subscribe(data => {
        /*swall({
          title: 'Successfull!',
          text: 'Successfully Registered!',
          icon: 'success',
          button: 'Login',
        })
          .then( result => {
            this.reloadLogin();
          });*/
      }, error => {
        console.log(error);
      });
  }
}

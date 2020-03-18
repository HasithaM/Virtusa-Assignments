import {Component, OnInit} from '@angular/core';
import {CardoorRegisterService, User} from '../service/cardoor-register.service';
import swal from 'sweetalert';
import {isUndefined} from 'util';

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

  reloadHome() {
    window.location.href = 'http://' + window.location.hostname + ':' + window.location.port;
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
    if (this.user.firstName !== null && !isUndefined(this.user.firstName) && this.user.firstName.trim() !== ''
      && this.user.lastName !== null && !isUndefined(this.user.lastName) && this.user.lastName.trim() !== ''
      && this.user.username !== null && !isUndefined(this.user.username) && this.user.username.trim() !== ''
      && this.user.emailAddress !== null && !isUndefined(this.user.emailAddress) && this.user.emailAddress.trim() !== ''
      && this.user.password !== null && !isUndefined(this.user.password) && this.user.password.trim() !== ''
      && this.user.phoneNumber !== null && !isUndefined(this.user.phoneNumber) && this.user.phoneNumber.trim() !== '') {
      this.cardoorService.createUser(this.user)
        .subscribe(data => {
          if (data.message === 'Username is Taken!') {
            swal({
              title: 'Oops!',
              text: 'Username is Already Taken!',
              icon: 'error'
            });
          } else if (data.message === 'Email is Taken!') {
            swal({
              title: 'Oops!',
              text: 'Email is Already Taken!',
              icon: 'error'
            });
          } else if (data.message === 'Unsuccessful!') {
            swal({
              title: 'Oops!',
              text: 'Error while Registering! Please Try Again!',
              icon: 'error'
            });
          } else if (data.message === 'Unknown!') {
            swal({
              title: 'Oops!',
              text: 'Error while Registering! Please Try Again!',
              icon: 'error'
            });
          } else if (data.message === 'Successful!') {
            swal({
              title: 'Successfull!',
              text: 'Successfully Registered!',
              icon: 'success',
              buttons: ['Home', 'Login'],
            })
              .then(result => {
                if (result) {
                  this.reloadLogin();
                } else {
                  this.reloadHome();
                }
              });
          }
        }, error => {
          console.log(error);

          swal({
            title: 'Oops!',
            text: 'Error while Registering! Please Try Again!',
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

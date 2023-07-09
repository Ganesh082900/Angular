import { Component } from '@angular/core';
import { faUserGroup } from '@fortawesome/free-solid-svg-icons'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  signUpFormData = {
    email: '',
    password: ''
  };
   logo=faUserGroup
  signUpFormSubmit() {
    // Perform sign-up logic here
    console.log('login Sucess');
    console.log(this.signUpFormData);
  }
}


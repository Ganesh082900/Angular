import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// @NgModule({
//   imports: [
//     FormsModule
//   ],
//   declarations: [RegisterComponent]
// })

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  signUpFormData = {
    firstName: '',
    lastName: '',
    email: '',
    file: '',
    mobile: ''
  };
  onFileSelected(event: any) {
    const file = event.target.files[0];
    this.signUpFormData.file = file.name;
  }
  signUpFormSubmit() {
    // Perform sign-up logic here
    const jsonData = JSON.stringify(this.signUpFormData)
    console.log('Registration form submitted');
    console.log(this.signUpFormData);
  }
  clear() {
    setTimeout(() => {
      this.signUpFormData = {
        firstName: '',
        lastName: '',
        email: '',
        file: '',
        mobile: ''
      };
    },1000)

  }

}




import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-identity',
  templateUrl: './identity.component.html',
  styleUrls: ['./identity.component.css']
})
export class IdentityComponent {
  constructor(
    private router: Router
  ) {

  }
  profile(page: any) {
    console.log(page);
    this.router.navigate([page])
  }
  // <<<<<< Sigin and signOut >>>>>>>>>>>
  isLoggedIn: boolean = false;
  toggleLoginState() {

    const punch = this.isLoggedIn ? "Sigin-Out" : "Sign-In"
    console.log(new Date().toLocaleTimeString(), punch)
    
    this.isLoggedIn = !this.isLoggedIn;
  }

  // <<<<<<<<<<< CURRENT TIME >>>>>>>>>>
  currentTime: string = '';

  ngOnInit() {
    this.updateTime();
    // Update time every second (1000 milliseconds)
    setInterval(() => {
      this.updateTime();
    }, 1000);

  }

  updateTime() {
    const now = new Date();
    this.currentTime = now.toLocaleTimeString();
  }
}

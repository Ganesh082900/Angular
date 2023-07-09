import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { identity } from 'rxjs';
import { IdentityComponent } from './identity/identity.component';
import { MainComponent } from './main/main.component';
import { EmployeeProfileComponent } from './employee-profile/employee-profile.component';
import { CalenderComponent } from './calender/calender.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: "login", component: LoginComponent,
  },
  {
    path: '',pathMatch: 'full',redirectTo:'/login',
  },
 
  {
    path: "dashboard", component: MainComponent,
    children: [
      {
        path: "identity", component: IdentityComponent,
        children: [
          {
            path: "profile", component: EmployeeProfileComponent
          }, {
            path: "calender", component: CalenderComponent
          }, {
            path: "register", component: RegisterComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

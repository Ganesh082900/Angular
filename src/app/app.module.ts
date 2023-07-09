import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component'; 
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { CalenderComponent } from './calender/calender.component';
import { IdentityComponent } from './identity/identity.component';
import { MainComponent } from './main/main.component';
import { EmployeeProfileComponent } from './employee-profile/employee-profile.component';
import { AnalysisComponent } from './analysis/analysis.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    CalenderComponent,
    IdentityComponent,
    MainComponent,
    EmployeeProfileComponent,
    AnalysisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

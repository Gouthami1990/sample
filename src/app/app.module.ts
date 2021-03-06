import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import{EmployeeComponent} from './employee/employee.component';
import { LoginComponent } from './login/login.component';
import { SalariesComponent } from './salaries/salaries.component';


@NgModule({
  declarations: [
    AppComponent, EmployeeComponent, LoginComponent, SalariesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

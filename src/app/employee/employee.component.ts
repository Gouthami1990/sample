import {Component} from '@angular/core';
import { Alert } from 'selenium-webdriver';
@Component({
    selector:'my-employee',
    templateUrl:'./employee.component.html',
    styleUrls: ['./employee.component.css'] 
       
})
export class EmployeeComponent{
    fname:string="John";
    lname:string="Wick";
    age:number=20;
    salary:number=10000
    gender:string="male";
    onClick():void{
        console.log('Button Clicked');
    }

}
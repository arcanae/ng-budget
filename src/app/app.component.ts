import { Component } from '@angular/core';
import { Pay } from '../class/pay.class';
import { FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  date:string;
  desc:string = "";
  amount:number;
  type:string = "";
  display:boolean = false;


  myArray = [];

  move() {
    this.display = true;
  }

  submit() {
    this.myArray.push(new Pay (this.date, this.desc, this.amount, this.type));
    console.log(this.myArray);
  }

  rm(index:number){
    this.myArray.splice(index,1);
  }

  getCSSClasses(amount:number) {
    let cssClasses;
    if(amount < 0) {  
       cssClasses = {
         'red': true,
         'green': false 
       }	
    } else {  
       cssClasses = {
         'red': false,
        'green': true 
       }	
    }
    return cssClasses;
  }	
}

import { Component } from '@angular/core';
import { Pay } from '../class/pay.class';


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
  
  myArray = [];
  submit() {
    this.myArray.push(new Pay (this.date, this.desc, this.amount, this.type));
    console.log(this.myArray);
  }
}

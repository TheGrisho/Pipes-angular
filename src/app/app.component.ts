import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  
})
export class AppComponent {
  name: string="Marianne Acosta";
  array=[1,2,3,4,5,6,7,8,9,10]
  Pi: number= Math.PI;
  Percentage:number=0.15;
  salary:number=1200;
  date:Date = new Date();
  promise=new Promise<string>((resolve)=>{
    setTimeout(()=>{
      resolve("Data has come");
    }, 5000);
  });

  
  
  Hero ={
    name: "logan",
    data:"wolverine",
    site:"222.asdasd.asd",
    age:500,
    dir: {
      street:"lopezportillo",
      number: 20

    }
  
  }
}

import { Component } from '@angular/core';


@Component({
   
    template:   
      `  {{retrievedFromStorage}}
    <br>
    <ol>
    <a href="page-about/(food)"><li *ngFor="let foods of myfooditem" (click)="onSelect(foods)">{{foods.name}}</li></a>
    </ol>
    <br>
    `
})
export class HomeComponent { 
  myfooditem: Array<any>;
  

   constructor() {
       if (sessionStorage.getItem("food")) {
         this.myfooditem= JSON.parse(sessionStorage.getItem("food"));

       }
   }

   onSelect(foods) {

        sessionStorage.setItem("selectitem", foods.id)
        console.log(foods.id);
  }

}








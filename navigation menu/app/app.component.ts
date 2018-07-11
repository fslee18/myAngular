import { Component } from '@angular/core';

export class FoodItem {
  id: number;
  name: string;
  mfg: string;
  pkg: string;
  qty:number;
}



@Component({
    selector: 'app-root',
    template:   
      `<h1>Homework 2</h1>
    <nav>
    <a routerLink="/page-home" routerLinkActive="active">Home</a> |
    <a routerLink="/page-about" routerLinkActive="active">About</a>
    </nav>
    <router-outlet></router-outlet>
    <myfooter></myfooter>
    `
})
export class AppComponent { 

  
  myFood: FoodItem[]; 
  FOODITEMS: FoodItem[] = [
    { id: 1, name: "Cucumbers", mfg: "Hot House", pkg: "10 KG", qty: 6 },
    { id: 2, name: "Carrots", mfg: "Hot House", pkg: "8 KG", qty: 14 },
    { id: 3, name: "Cheese", mfg: "Hot House", pkg: "5 KG", qty: 20 },
    { id: 4, name: "French Fries", mfg: "McCain", pkg: "15 KG", qty: 8 }
  ];
    
  constructor() {
    // Create 
    if(sessionStorage.getItem("food") == null) {
      sessionStorage.setItem("food", JSON.stringify(this.FOODITEMS));
    }
    
  }

}








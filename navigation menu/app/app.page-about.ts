import { Component } from '@angular/core';

@Component({
    template: `This is About the food.{{retrievedFromStorage}}
    <table>
    <tr>
    <td>Product ID: </td>
    <td>{{something[myselectitem].id}}</td>
    </tr>
    <tr>
    <td>Product Name: </td>
    <td>{{something[myselectitem].name}}</td>
    </tr>
    <tr>
    <td>Manufacturer: </td>
    <td>{{something[myselectitem].mfg}}</td>
    </tr><tr>
    <td>Quantity: </td>
    <td>{{something[myselectitem].pkg}}</td>
    </tr>
    <tr>
    <td>Pack Size: </td>
    <td>{{something[myselectitem].qty}}</td>
    </tr>
    
    `
})
export class AboutComponent {
   something: Array<any>;
   myselectitem: number;

    constructor() {
        if (sessionStorage.getItem("food")) {
          this.something= JSON.parse(sessionStorage.getItem("food"));

        }
        if (sessionStorage.getItem("selectitem")) {
            this.myselectitem= JSON.parse(sessionStorage.getItem("selectitem"));
            this.myselectitem--;
            console.log("myselectitem is " + this.myselectitem)
        }

    }

  
}


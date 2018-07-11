import { Component } from '@angular/core';
import {  MyRemoteService } from './app.myremoteservice';


@Component({
    template: ` <br />
    Convert Celsius to Fahrenheit<input [(ngModel)]="getFah" type="text">
    <br />
    <button (click)="convertToF()">Convert</button><br/>
    <h3>{{ getFah }} Degrees Celsius is {{ resFah }} Degrees Fahrenheit</h3><br />
    Convert Fahreheit to Celsius<input [(ngModel)]="getCes" type="text">
    <br />
    <button (click)="convertToC()">Convert</button><br/>
    <h3>{{ getCes }} Degrees Fahrenheit is {{resCes }} Degrees Celsius</h3>
    `,
    providers: [MyRemoteService],
    styleUrls: ['./app.component.css']
})
export class HomeComponent {
    myF: Array<any>;
    myC: Array<any>;
    resFah: string;
    getFah: string;
    resCes: string;
    getCes: string;
    remoteService: MyRemoteService;

    constructor(_remoteService: MyRemoteService) {
this.remoteService = _remoteService;
}

convertToC() {

let Numeric_pattern=/^[+-]*[0-9]*[\.]?[0-9]*$/;

if (!Numeric_pattern.test(this.getCes)) {
    alert("please input numeric Fahreheit")
} else {
    
 
    this.remoteService.getCelsius(this.getCes)
    // Subscribe to observable.
    .subscribe(
        // Success.
        data => {
            this.myC = data
            console.log(JSON.stringify(data))
            this.resCes = data["Celsius"];
            let y = 0;
            console.log('data:' + data)
        },
        // Error.
        error => {
            console.log(error)
        },
        // Final Instructions.
        () => {
            console.log("Finished")
        });
    }
}


convertToF() {
   
let Numeric_pattern=/^[+-]*[0-9]*[\.]?[0-9]*$/;

if (!Numeric_pattern.test(this.getFah)) {
    alert("please input numeric Celsius")
} else {


this.remoteService.getFahrenheit(this.getFah)
// Subscribe to observable.
.subscribe(
    // Success.
    data => {
        this.myF = data
        console.log(JSON.stringify(data))
        this.resFah = data["Fahrenheit"];
        let y = 0;
        console.log('data:' + data)
    },
    // Error.
    error => {
        console.log(error)
    },
    // Final Instructions.
    () => {
        console.log("Finished")
    });
}
}
  
}


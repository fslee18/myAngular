import { Component } from '@angular/core';

@Component({
  selector: 'myfooter',
  template: `<h3>Today is {{ mydate | date: 'fullDate' }} </h3>`

})

export class footerDirective {

     mydate = new Date();
    
     
}
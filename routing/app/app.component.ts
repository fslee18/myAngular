import { Component } from '@angular/core';


@Component({
    selector: 'app-root',
    template:   
      `<h1>Homework 3</h1>
    <nav>
    <a routerLink="/page-home" routerLinkActive="active">Home</a> |
    <a routerLink="/page-feedback" routerLinkActive="active">Feedback</a>
    </nav>
    <router-outlet></router-outlet>
  
    `,
    styleUrls: ['./app.component.css']
})
export class AppComponent { 

  
}








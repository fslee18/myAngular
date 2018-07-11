import { Component } from '@angular/core';
import {  MyRemoteService } from './app.myremoteservice';

@Component({
   
    template:   
      `<br />
    Your Email Address: <br />
    <input type="text" [(ngModel)]="emailAddress" placeholder="your email@your email.com" ><br/>
    Feedback: <br />
    <textarea [(ngModel)]="feedbackMsg" row='20' col='20' placeholder="your feedback"></textarea><br />
    <button (click)="postFeedback()">Send</button>
    <br />
    
    <div *ngIf="feedbackResponseMsg">
    <h4>{{feedbackResponseMsg}}</h4><br/>
    <h4>{{feedbackResponseStatus}}</h4></div>
    <br/>
    `,
// Providers allow us to inject an object instance through the constructor.

    providers: [MyRemoteService],
    styleUrls: ['./app.component.css']
})

export class FeedbackComponent {
names: Array<any>;
remoteService: MyRemoteService;
emailAddress: string;
feedbackMsg: string;
feedbackResponseMsg: string;
feedbackResponseStatus: string;

// Since using a provider above we can receive service.
constructor(_remoteService: MyRemoteService) {
this.remoteService = _remoteService;
}



postFeedback() {  
// Create the JavaScript object in the format
// required by the server.
let FeedBackObject = {
"Email": this.emailAddress,
"Message": this.feedbackMsg
}
let Email_pattern  = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

console.log(this.emailAddress);
if (this.emailAddress == '' || this.feedbackMsg =='' || this.emailAddress== null || this.feedbackMsg== null) {
    alert('Email address and Feedback are required')
 
} else if (this.emailAddress != '' && this.emailAddress != null && !Email_pattern.test(this.emailAddress)) {
    alert('Email address format is not correct')  
    
} else {

this.remoteService.postName(FeedBackObject)
// Subscribe to observable.
.subscribe(

// Success.
data => {
    this.feedbackResponseMsg    = data["Message"];
    this.feedbackResponseStatus = data["Status"];
    console.log(data)
},
// Error.
error => {
    console.log(error)
},
// Final instructions.
() => {
    console.log("Finished")
});

}

}

}








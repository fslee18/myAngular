import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  // Multi-line content allowed with back ticks.
  templateUrl: './app.homework1.html'          
      
})

export class AppComponent { 
  public resultsum: number;
  public resultdif: number;
  public resultpro: number;
  public resultquo: number;
  public sumfact1: number;
  public sumfact2: number;
  public diffact1: number;
  public diffact2: number;
  public profact1: number;
  public profact2: number;
  public quofact1: number;
  public quofact2: number;

  doAddition() {
   
    this.resultsum = Number(this.sumfact1) + Number(this.sumfact2);
    
  }
  doDiff() {
      
    this.resultdif = Number(this.diffact1) - Number(this.diffact2);
  
  }

  doProduct() {
      
    this.resultpro = Number(this.profact1) * Number(this.profact2);
  
  }

  doQuotient() {
      
    this.resultquo = Number(this.quofact1) / Number(this.quofact2);
  
  }


}


    


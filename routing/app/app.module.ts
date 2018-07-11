import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { PageDefault }    from './app.pagedefault';
import { HomeComponent } from './app.page-home';
import { FeedbackComponent } from './app.page-feedback';
import { routing }        from './app.routing';
import { HttpModule, Http }    from '@angular/http';



@NgModule({
  declarations: [
    AppComponent, HomeComponent, FeedbackComponent, PageDefault
  ],
  imports: [
    BrowserModule, FormsModule, routing, HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

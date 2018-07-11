import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { footerDirective } from './footerDirective';
import { PageDefault }    from './app.pagedefault';
import { HomeComponent } from './app.page-home';
import { AboutComponent } from './app.page-about';
import { routing }        from './app.routing';



@NgModule({
  declarations: [
    AppComponent, footerDirective, HomeComponent, AboutComponent, PageDefault
  ],
  imports: [
    BrowserModule, FormsModule, routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

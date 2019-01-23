

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { HttpClientModule, HttpClient } from '@angular/common/http';


import { AppComponent } from './app.component';
import { routes } from './app.routing';
import { AppConfig } from './app.config';
import { ModalModule } from 'ngx-bootstrap';






@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule ,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ModalModule.forRoot()
  

  ],
  providers: [AppConfig ,{
    provide: LocationStrategy, useClass: HashLocationStrategy
  }
   



  ],
  bootstrap: [AppComponent]
})
export class AppModule {




}

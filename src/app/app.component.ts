
import { Component, ViewEncapsulation, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientModule, HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';



const API_URL = environment.apiUrl;

@Component({
  selector: 'app-root',




  encapsulation: ViewEncapsulation.None,
  template: `<router-outlet></router-outlet> `,
  styleUrls: ['./app.component.scss']
})

export class AppComponent {


  @HostListener("window:onbeforeunload", ["$event"])
  clearLocalStorage(event) {
    localStorage.clear();
  }



  constructor(router: Router, private http: HttpClient) {



  }

}

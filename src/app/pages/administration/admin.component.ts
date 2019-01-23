
import { Component, ViewEncapsulation, EventEmitter } from '@angular/core';
import { AppConfig } from "../../app.config";
import { environment } from "../../../environments/environment";




const API_URL = environment.apiUrl;





@Component({
  selector: 'kgs-admin',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  providers: []
})

export class AdminComponent {
  public config: any;
  public configFn: any;



  constructor(private _appConfig: AppConfig) {
    this.config = this._appConfig.config;
    this.configFn = this._appConfig;


  }








}

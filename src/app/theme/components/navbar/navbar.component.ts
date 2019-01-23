import { Component, ViewEncapsulation } from '@angular/core';
import { AppState } from '../../../app.state';


@Component({
  selector: 'kgs-navbar',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [  ]
})

export class NavbarComponent {
  public isMenuCollapsed: boolean = false;

  public userName: string;

    constructor(private _state:AppState) {
        this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
          this.isMenuCollapsed = isCollapsed;
        
        });

      this.userName = localStorage.getItem("fullName");
      var t = 1;
    }

    public closeSubMenus(){
   
    }

    public toggleMenu() {
        this.isMenuCollapsed = !this.isMenuCollapsed; 
        this._state.notifyDataChanged('menu.isCollapsed', this.isMenuCollapsed);        
    }

}

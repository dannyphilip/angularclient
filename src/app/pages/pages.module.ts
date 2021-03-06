

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};
import { ToastrModule } from 'ngx-toastr';
import { DirectivesModule } from '../theme/directives/directives.module';


import { PipesModule } from '../theme/pipes/pipes.module';
import { routing } from './pages.routing';


import { PagesComponent } from './pages.component';

import { MenuComponent } from '../theme/components/menu/menu.component';

import { NavbarComponent } from '../theme/components/navbar/navbar.component';

import { BreadcrumbComponent } from '../theme/components/breadcrumb/breadcrumb.component';
import { BackTopComponent } from '../theme/components/back-top/back-top.component';

//import { CanvasComponent } from './canvas/canvas.component';



@NgModule({
  imports: [
    CommonModule,
    PerfectScrollbarModule, 
    ToastrModule.forRoot(),   
    DirectivesModule,
 
    routing
  ],
  declarations: [ 
    PagesComponent,
    MenuComponent,

    NavbarComponent,
 
    BreadcrumbComponent,
    BackTopComponent,

  ],
  providers:[
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ]
})
export class PagesModule { }

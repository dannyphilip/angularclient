import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ProgressAnimate } from './progress-animate/progress-animate.directive';


@NgModule({
    imports: [ 
        CommonModule 
    ],
    declarations: [ 
    
       
        ProgressAnimate
       
    ],
  exports: [
    ProgressAnimate
      
    ]
})
export class DirectivesModule { }

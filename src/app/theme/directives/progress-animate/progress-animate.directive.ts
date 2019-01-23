import { Directive, ElementRef } from '@angular/core';

@Directive ({
  selector: '[progress-animate]'
})

export class ProgressAnimate {
    public element: any;

    constructor(private _elementRef: ElementRef) {
        this.element = jQuery(_elementRef.nativeElement);
    }

    ngOnInit(): void { 
        let elem = this.element,
            progress = 0,   
            timeout = 0,     
            increment = 1, 
            maxprogress = elem.attr('aria-valuenow'); 
        function animate() {        
            setTimeout(() => {
                progress += increment;
                if(progress < maxprogress) {
                    elem.css('width', progress+'%');
                    animate();
                }
            }, timeout);
        };
        animate();
    }

  

   
}

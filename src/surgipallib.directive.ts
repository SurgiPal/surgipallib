import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[sampleDirective]'
})
export class SurgipalLibDirective {

  constructor(private el: ElementRef) {
  }

}

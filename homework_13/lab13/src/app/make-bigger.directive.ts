import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMakeBigger]'
})
export class MakeBiggerDirective {

  constructor(private element:ElementRef,private renderer2:Renderer2) {
    // this.element.nativeElement.style.fontSize = 'none';
  }

}

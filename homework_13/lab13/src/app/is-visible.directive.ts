import { Directive,Input, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appIsVisible]'
})
export class IsVisibleDirective {

  @Input() appIsVisible: boolean;

  size : number;

  @HostListener('dblclick') bar() {
    this.size = this.size + 2;
    this.renderer2.setStyle(this.element.nativeElement, 'font-size', this.size + 'px');
  }

  constructor(private element:ElementRef,private renderer2:Renderer2) { 
  }

  ngOnInit() {
    this.size = parseInt(this.element.nativeElement.style.fontSize.substr(0, this.element.nativeElement.style.fontSize.length-2));
  }
}

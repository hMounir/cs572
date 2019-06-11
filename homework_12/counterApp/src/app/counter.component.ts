import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <div id="partOne">
      Counter Component: 
      <button (click)="decrease()">-</button>
      {{counterValue}}
      <button (click)="increase()">+</button> 
    </div>
    <div id="partTwo">
      <input type="number" [value]="counterValue" (input)="counterValue=$event.target.value" />
    </div>
  `,
  styles: []
})
export class CounterComponent implements OnInit {

  @Output() counterChange = new EventEmitter<number>();

  private _counterValue = 0;

  constructor() { }

  ngOnInit() { }

  public get counterValue() {
    return this._counterValue;
  }

  @Input('counterValue')
  public set counterValue(value: number) {
    this.counterChange.emit(value);
    this._counterValue = value;
  }
x
  decrease() {
    this.counterValue--;
  }

  increase() {
    this.counterValue++;
  }
}

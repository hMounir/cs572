import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <p>
      app works!
    </p>
    <app-counter [counterValue]="componentCounterValue1" (counterChange)="componentCounterValue1=$event"></app-counter>

    <br/>
    <app-counter [counterValue]="componentCounterValue2" (counterChange)="componentCounterValue2=$event"></app-counter>
  `,
  styles: []
})
export class AppComponent implements OnInit {

  componentCounterValue1 = 5;
  componentCounterValue2 = 10;

  constructor() { }

  ngOnInit() {
  }

}

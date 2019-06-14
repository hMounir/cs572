import { Component, OnInit,Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-smart',
  template: `
    <app-dumb [names]="names" [appIsVisible]="true"></app-dumb>

    <app-dumb [names]="testHidden" [appIsVisible]="false"></app-dumb>
  `
})
export class SmartComponent implements OnInit {

  @Input() names: string[];
  @Input() testHidden: string[];

  constructor() { 
    this.names = ['Hisham','Mounir','Ahmed'];
    this.testHidden = ['test'];
  }

  ngOnInit() {
  }

}

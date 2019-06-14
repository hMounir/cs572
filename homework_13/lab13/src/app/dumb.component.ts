import { Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'app-dumb',
  template: `
    <ul>
      <li *ngFor="let obj of parentValue">
        {{obj}}
      </li>
    </ul>
  `,
  styles: []
})
export class DumbComponent implements OnInit {

  @Input('names') parentValue: string[];  

  constructor() { }

  ngOnInit() {
  }

}

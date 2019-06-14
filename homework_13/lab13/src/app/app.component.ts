import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`p {color: blue}`, ],
  encapsulation : ViewEncapsulation.None
})
export class AppComponent {
  title = 'lab13';
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CounterComponent } from './counter.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    CounterComponent,
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

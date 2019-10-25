import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app.component';

@NgModule({
  // Component, Pipe or Directive
  declarations: [
    EventsAppComponent
  ],
  // Other Modules
  imports: [
    BrowserModule
  ],
  // Services
  providers: [],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

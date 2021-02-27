import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CompComponent } from './comp/comp.component';
import { Dashboard } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    CompComponent, 
    Dashboard
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

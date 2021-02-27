import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CompComponent } from './comp/comp.component';
import { Dashboard } from './dashboard/dashboard.component';
import { ProductList } from "./products/product-list.component"
import { ConvertToSpace } from './shared/pipes/convertToSpace.pipe'

@NgModule({
  declarations: [
    AppComponent,
    CompComponent, 
    Dashboard,
    ProductList,
    ConvertToSpace
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { CompComponent } from './comp/comp.component';
import { Dashboard } from './dashboard/dashboard.component';
import { ProductList } from "./products/product-list.component"
import { ConvertToSpace } from './shared/pipes/convertToSpace.pipe';
import { RatingComponent } from './rating/rating.component'
// import { Http2ServerResponse } from 'http';

@NgModule({
  declarations: [
    AppComponent,
    CompComponent, 
    Dashboard,
    ProductList,
    ConvertToSpace,
    RatingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

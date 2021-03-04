import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CompComponent } from './comp/comp.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductListComponent } from "./products/product-list.component"
import { ConvertToSpace } from './shared/pipes/convertToSpace.pipe';
import { RatingComponent } from './rating/rating.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleCardComponent } from './articles/article-card/article-card.component'
// import { Http2ServerResponse } from 'http';

@NgModule({
  declarations: [
    AppComponent,
    CompComponent, 
    DashboardComponent,
    ProductListComponent,
    RatingComponent,
    HomeComponent,
    PagenotfoundComponent,
    ConvertToSpace,
    NavigationComponent,
    ArticlesComponent,
    ArticleCardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    HttpClientModule,
     RouterModule.forRoot([
        {
         path: 'products',
         component: ProductListComponent
       },
       {
         path: 'dashboard',
         component: DashboardComponent
       },
         {
         path: 'comp',
         component: CompComponent
       },
       {
         path: 'home',
         component: HomeComponent
       },
       {
         path: '',
         redirectTo: 'home',
         pathMatch: 'full'
       },
       {
         path: '**',
         component: PagenotfoundComponent
       }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

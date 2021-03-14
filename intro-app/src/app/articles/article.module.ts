import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ArticlesComponent } from '../articles/articles.component';
import { ArticleCardComponent } from '../articles/article-card/article-card.component';
import { ArticleDetailComponent } from '../articles/article-detail/article-detail.component';



@NgModule({
  declarations: [
    ArticlesComponent,
    ArticleCardComponent,
    ArticleDetailComponent,
  ],
  imports: [
    CommonModule,
    FormsModule, 
    RouterModule.forChild([
       {
         path: 'articles',
         component:  ArticlesComponent
       },
 
      {
         path: 'articles/:title',
         component:  ArticleDetailComponent
       },
    ])
  ],
  exports: [ArticlesComponent],
})
export class ArticleModule { }






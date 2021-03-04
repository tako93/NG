import { Component, OnInit } from '@angular/core';
import { IArticle, IArticleResponce } from './article';
import { ArticleService } from './article.service';


@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})

export class ArticlesComponent implements OnInit {

   articles: IArticle[] = [];

  constructor(private _articleService: ArticleService) { }


   ngOnInit(): void {
    this._articleService
      .getArticles()
      .subscribe((response: IArticleResponce) => {
        console.log(response)
        
        if ((response.status = 'ok')) {
          this.articles = response.articles;
        }
      });
  }

}
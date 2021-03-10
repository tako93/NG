import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { ArticleService } from '../article.service'
import { IArticle, IArticleResponse } from '../article';
@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss']
})
export class ArticleDetailComponent implements OnInit {
  pageTitle: string = "article Detail";
  article?: IArticle;

  constructor(private route: ActivatedRoute, private _articleService: ArticleService) {

  }

  ngOnInit(): void {
    const title = this.route.snapshot.paramMap.get('title');
    this._articleService.getArticles("Apple").subscribe((response: IArticleResponse) => {
      if (response.status === 'ok' && title) {

        const currentArticle: IArticle | undefined = response.articles.find((item: IArticle) => {
          return item.title.match(title);
        });
        this.article = currentArticle;
      };
    });
 
    
  };

};

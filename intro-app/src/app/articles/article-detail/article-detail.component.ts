import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { ArticleService } from '../article.service'
import { IArticle, IArticleResponce } from '../article';
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
    this._articleService.getArticles("Apple", 18, 1).subscribe((response: IArticleResponce) => {
      if (response.status === 'ok' && title) {

        const currentArticle: IArticle | undefined = response.articles.find((item: IArticle) => {
          return item.title.match(title);
        });
        this.article = currentArticle;
      };
    });
    // if (title) {
    //   this._articleService.getArticle(title).subscribe((data) => {})
    // }
    
  };

};

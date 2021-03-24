  
import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FilterForm } from '../data/filter-form-shape.interface';

import { IArticle, IArticleResponse, IArticleResponseError } from './article';
import { ArticleService } from './article.service';
// import { FilterForm } from '../data/filter-form-shape.interface';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
})
export class ArticlesComponent implements OnInit, OnChanges, OnDestroy {
  articles: IArticle[] = []; //==npm===
  page: number = 1; //===npm====
  filterData: FilterForm = this._articleService.filterData;
  //   = {page: 1,
  //   pageSize: 20,
  //   qInTitle: 'google',
   
  // };
  constructor(
    private _articleService: ArticleService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // this.loadArticles();
    const result: IArticleResponse = this.route.snapshot.data[
      'articlesResponse'
    ];

    this.articles = result.articles;
    this.filterData = this._articleService.filterData
  }


  ngOnChanges(): void {
    console.log('changed')
   }
  ngOnDestroy(): void {
    console.log('destroy')
   } 


  private loadArticles() {
    const query: string = new URLSearchParams(
      this._articleService.filterData as any
    ).toString();


    // const params = {
    //    ...this.filterData,
    //     title: this.filterData.qInTitle,
    //     pageSize: this.filterData.pageSize,
    //     page: this.filterData.page,
    // }

    this.router.navigate([], {
      queryParamsHandling: 'merge',
      replaceUrl: true,
      queryParams: this.filterData
    })
    this._articleService.getArticlesCustom(query).subscribe(
      (response: IArticle[]) => {
        this.articles = response;
      },
      (err: IArticleResponseError) => {}
    );
  }
     

  onSubmit(form: NgForm) {
    this.loadArticles();
  }
}



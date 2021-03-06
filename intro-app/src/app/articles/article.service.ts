import { Injectable } from '@angular/core'
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators'

import { IArticle, IArticleResponce } from './article';

import {BASE_API_URL, API_KEY} from '../../config'

@Injectable({
    providedIn: 'root',
})

export class ArticleService{
    private baseUrl: string = BASE_API_URL;
  private apiKey: string = API_KEY;
  private articles: IArticle[] = [];

    constructor(private http: HttpClient) { };

   getArticles(query: string, pageSize: number, page: number): Observable<IArticleResponce> {
    return this.http.get<IArticleResponce>(
      `${this.baseUrl}/everything?apiKey=${this.apiKey}&q=${query}&pageSize=${pageSize}&page=${page}`
    ).pipe(tap((data) => {this.articles = data.articles}, catchError(this.handleError)));
  };

  // getArticle(articleId: string): Observable<IArticle>{
  //   return  response.articles.find((item: IArticle) => {
  //         return item.title.match(title);
  //       });
  //   // return this.http.get<IArticle>(`${this.baseUrl}/posts/${articleId}`);
  // }


  private handleError(error: HttpErrorResponse) {
    let errorMessage = '';

    if (error.error instanceof ErrorEvent) {
      errorMessage = `An error occured: ${error.error.message}`;
    } else {
      errorMessage = `Server returened code : ${error.status}, error message is: ${error.message}`
    }

    return throwError(errorMessage);
  }

}


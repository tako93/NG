import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

import { IArticleResponce } from './article';

import {BASE_API_URL, API_KEY} from '../../config'

@Injectable({
    providedIn: 'root',
})

export class ArticleService{
    private baseUrl: string = BASE_API_URL;
    private apiKey: string = API_KEY;

    constructor(private http: HttpClient) { };

   getArticles(): Observable<IArticleResponce> {
    return this.http.get<IArticleResponce>(
      `${this.baseUrl}/everything?apiKey=${this.apiKey}&q=Apple&pageSize=18&page=1`
    );
  }
    // getArticle(articleId: number): Observable<IArticleResponce[]>{
    //     return this.http.get<IArticleResponce[]>(`$(this.baseUrl)/posts/${articleId}`)
    // }

    // getArticleComments(articleId: number): Observable<IArticleResponce[]>{
    //     return this.http.get<IArticleResponce[]>(`$(this.baseUrl)/posts/${articleId}/comments`)
    // }
}


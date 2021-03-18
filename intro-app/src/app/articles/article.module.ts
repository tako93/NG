import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination'; //====npm===
import { ArticlesComponent } from './articles.component';
import { ArticleCardComponent } from './article-card/article-card.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { ArticleResolverService } from './article-resolver.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ArticleHeaderInterceptor } from './add-header.interceptor.service';
// import { CoreModule } from '../core/core.module';
// import { LogResponseInterceptor } from '../core/log-response.interceptor';
// import { CacheInterceptor } from '../core/cache.interceptor';

@NgModule({
  declarations: [
    ArticlesComponent,
    ArticleCardComponent,
    ArticleDetailComponent,
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    
    NgxPaginationModule,//====npm===
    RouterModule.forChild([
      {
        path: 'articles',
        component: ArticlesComponent,
        resolve: {
          articlesResponse: ArticleResolverService,
        },
      },
      {
        path: 'articles/:title',
        component: ArticleDetailComponent,
      },
    ]),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ArticleHeaderInterceptor,
      multi: true,
    },
    //  {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: LogResponseInterceptor,
    //   multi: true,
    // },
    //    {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: CacheInterceptor,
    //   multi: true,
    // },
  ],
  exports: [ArticlesComponent],
})
export class ArticleModule {}






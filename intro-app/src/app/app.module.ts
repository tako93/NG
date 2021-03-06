import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { ArticleModule } from './articles/article.module';
import { AuthModule } from './auth/auth.module';
import { ProductModule } from './products/product.module';
import { CoreModule } from './core/core.module';

import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './core/pagenotfound/pagenotfound.component';

import { ArticleResolverService } from './articles/article-resolver.service';
import { LogResponseInterceptor } from './core/log-response.interceptor';
import { CacheInterceptor } from './core/cache.interceptor';
import { AddAuthTokenInterceptor } from './core/add-auth-token.interceptor';

import { firebaseConfig } from '../firebaseConfig';
import { PublicModule } from './public/public.module';
// import { ProductAddComponent } from './products/product-add/product-add.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PagenotfoundComponent,
    // ProductAddComponent,

  ],
  imports: [
    CoreModule,
    BrowserModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    ArticleModule,
    AuthModule,
    // ProductModule,
    RouterModule.forRoot([
       {
        path: 'products',
        loadChildren: () =>
        import('./products/product.module').then((m) => m.ProductModule)
      },
      {
        path: 'home',
        component: HomeComponent,
        resolve: {
          articlesResponse: ArticleResolverService,
        },
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: '**',
        component: PagenotfoundComponent,
      },
    ]),
    PublicModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AddAuthTokenInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LogResponseInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CacheInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
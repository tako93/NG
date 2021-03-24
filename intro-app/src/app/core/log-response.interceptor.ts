import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpEventType,
} from '@angular/common/http';
// import { API_KEY } from 'src/config';



@Injectable({
    providedIn: 'root',
})


export class LogResponseInterceptor implements HttpInterceptor {
    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        console.log("LogResponseInterceptor", req.url);

        return next.handle(req).pipe(
            tap((event) => {
                if (event.type === HttpEventType.Response) {
                    console.log("LogResponseInterceptor DATA", event.body)
                }
            })
    
        );
    }
}


const cache = {}

// cache(url) = HTTPRESPONSE



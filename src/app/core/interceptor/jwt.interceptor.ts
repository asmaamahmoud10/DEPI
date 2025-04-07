import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('JwtInterceptor');

    
    request= request.clone({
      setHeaders:{
        'Authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFAYS5jb20iLCJpYXQiOjE3NDMwMzc2NTAsImV4cCI6MTc0MzA4MDg1MH0.BgL5QiZyAes_qCeAL91JnxgqJ_oFSgCtb0NWNfmVxCM'
      }
    })


    return next.handle(request);
  }
}

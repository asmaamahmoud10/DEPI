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

    
    const token = localStorage.getItem('token'); 

    if (token) {
      console.log('Token found:', token);
      request = request.clone({
        setHeaders: {
          'Authorization': `Bearer ${token}` // add the token to the request header
        }
      });
    }


/* 

    request= request.clone({
      setHeaders:{
        'Authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFAYS5jb20iLCJpYXQiOjE3NDQxMzU5MzUsImV4cCI6MTc0NDE3OTEzNX0.JzL3aWT907Lu4SUAJNn-FQhyKRoCPNzuEFAwFFX2FiQ'
      }
    })
    console.log('Authorization Header:', request.headers.get('Authorization')); */


    return next.handle(request);
  }
}

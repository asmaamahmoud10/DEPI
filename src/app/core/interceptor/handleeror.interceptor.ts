import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { catchError, map, Observable, tap, throwError } from 'rxjs';

@Injectable()
export class HandleerorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    //them request vao header 
    return next.handle(request).pipe(catchError((error)=>{
      console.log('Error',error);
      //throw error;
      //condtion to handle error navigate to the error page status code 401,403
      //navigate to login page and remove token from local storage
      return throwError(error);
    }),
    tap((event)=>{
      console.log('side effect',event);
    }),
    map((event)=>{
      console.log('logical ',event);// this is the response from the server 
      return event;
    })
  );
  }
}

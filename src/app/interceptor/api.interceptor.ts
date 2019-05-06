import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../user/auth.service';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
    constructor(public auth: AuthService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        req = req.clone({
            setHeaders: {
              Authorization: `Basic ${this.auth.getUserToken()}`
            }
          });  
         // console.log('ParamInterceptor '+JSON.stringify(req));  
         
          return next.handle(req);
    }
}

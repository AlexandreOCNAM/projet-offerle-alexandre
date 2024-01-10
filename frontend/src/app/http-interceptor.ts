import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ApiService } from './_core/services/api.service';
import { AuthService } from './_core/services/auth.service';

@Injectable()
export class ApiHttpInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log('intercepting')
    console.log(localStorage.getItem('tokenExpiration')!, Date.now().toString());
    const token: string = localStorage.getItem('token')!;
    if (localStorage.getItem('tokenExpiration')! < Date.now().toString()) {
      console.log('token expired');
      localStorage.removeItem('tokenExpiration');
      this.authService.refresh();
    }
    if (token) {
      const cloned = req.clone({
        headers: req.headers.set('Authorization', 'Bearer ' + token),
      });
      return next.handle(cloned);
    } else {
      return next.handle(req);
    }
  }
}

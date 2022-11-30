import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { LoginServiceService } from './login-service.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorserviceService implements HttpInterceptor{

  constructor(private injector: Injector) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authService = this.injector.get(LoginServiceService);
    let tokenizedreq = req.clone({
        headers: req.headers.set('Authorization', 'bearer ' + authService.getToken())
    })

    return next.handle(tokenizedreq);
}
}

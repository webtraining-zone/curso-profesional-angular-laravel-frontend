import {Injectable} from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';

import {Observable} from 'rxjs';

/** Pass untouched request through to the next request handler. */
@Injectable(
)
export class InjectRequestsHeadersInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {

    request = request.clone({
      setHeaders: {
        'Content-Type': 'application/json',
        // Authorization: `Bearer ${this.auth.getToken()}`
      },
    });

    return next.handle(request);
  }
}

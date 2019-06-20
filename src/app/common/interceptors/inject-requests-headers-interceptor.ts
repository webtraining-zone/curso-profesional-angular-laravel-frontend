import {Injectable} from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';

import {Observable} from 'rxjs';

import {SessionStorageService} from 'ngx-webstorage';

/** Pass untouched request through to the next request handler. */
@Injectable(
)
export class InjectRequestsHeadersInterceptor implements HttpInterceptor {

  constructor(public sessionStorage: SessionStorageService) {

  }

  getToken() {
    const user = this.sessionStorage.retrieve('user');
    if (!!user && !!user.token) {
      return user.token;
    }
    return false;
  }

  intercept(request: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {

    const headers = {
      'Content-Type': 'application/json',
    };

    const token = this.getToken();

    if (token) {
      request = request.clone({
        setHeaders: {
          ...headers,
          Authorization: `Bearer ${token}`,
        },
      });
    } else {
      request = request.clone({
        setHeaders: headers,
      });
    }

    return next.handle(request);
  }
}

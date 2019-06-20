/* "Barrel" of Http Interceptors */
import {HTTP_INTERCEPTORS} from '@angular/common/http';

import {InjectRequestsHeadersInterceptor} from './inject-requests-headers-interceptor';

/** Http interceptor providers in outside-in order */
export const httpInterceptorProviders = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: InjectRequestsHeadersInterceptor,
    multi: true,
  },
];

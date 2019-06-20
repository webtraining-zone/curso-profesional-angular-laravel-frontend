import {Injectable} from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthenticationService} from '../services/authentication.service';

@Injectable({
  providedIn: 'root',
})
export class PublicGuard implements CanActivate {

  constructor(
    public authenticationService: AuthenticationService,
    public router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.authenticationService.isLoggedIn()) {
      return true;
    }

    console.log('You are logged in!');
    this.router.navigate(['/auth-home']);
    return false;
  }

}

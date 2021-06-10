import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpService } from '../http/http.service';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkLogin(state.url);
  }
  constructor(public authService: AuthService, public httpService: HttpService, public router: Router) {}
  checkLogin(url: string): true|UrlTree {
    if (this.httpService.loginInfo?.uname) {
      return true;
    }
    this.authService.redirectUrl = url;
    console.log(this.authService.redirectUrl);
    return this.router.parseUrl('/login');
  }
}

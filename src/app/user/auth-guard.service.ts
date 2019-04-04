import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot, RouterStateSnapshot, Router,
  CanActivate
} from '@angular/router';

import { AuthService } from './auth.service';
//import { url } from 'inspector';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService,
    private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let loggin = this.checkLoggedIn(state.url);

    console.log(' loggin ' + route.url + ' login:' + loggin);
    let urlSnap = route.url;
    if (urlSnap.length > 1 && urlSnap[1].toString() === 'edit') {
      if (loggin) { return true; }
      else {
        this.router.navigate(['/login']);
        return false;

      }
    }

    if (urlSnap.length > 1 && urlSnap[1].toString() === 'registration') {
      if (!loggin) { return true; }
      else {
        this.router.navigate(['/login/edit']);
        return false;

      }
    }
  }

  checkLoggedIn(url: string): boolean {
    if (this.authService.isLoggedIn()) {
      return true;
    }

    // Retain the attempted URL for redirection
    //this.authService.redirectUrl = url;
    //this.router.navigate(['/login']);
    return false;
  }
}

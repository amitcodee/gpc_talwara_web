import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {

  constructor(private authService: AuthService,
              private router: Router
  ) {}

  canActivate(): boolean | UrlTree {
    if (this.authService.isLoggedIn) {
      return true;
    } else {
      // Redirect the user to the login page
      return this.router.parseUrl('/login');
    }
  }
}

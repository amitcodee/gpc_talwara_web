import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot, authS: AuthService): boolean {
    // Check the user's role here

    if (authS.isAuthenticated$) {
      return true; // User has the required role, allow access to the route
    }

    // User doesn't have the required role, redirect to a different route
    this.router.navigate(['/login']);
    return false;
  }
}

// Replace this function with your own logic to get the user's role
function getUserRole(): string {
  // Implement your logic to get the user's role here
  // For example, you can retrieve it from a JWT token or from a backend API
  return 'admin'; // Replace with the actual user's role
}

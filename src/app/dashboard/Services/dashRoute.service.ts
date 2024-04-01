import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RouteService {
  getRoutes(userRole: string): any[] {
    if (userRole === 'admin') {
      return [
        { path: 'main', displayName: 'Dashboard', icon: 'dashboard' },
        { path: 'stdetail', displayName: 'Users', icon: 'people' },
        { path: 'noticeboard', displayName: 'Notice Board', icon: 'settings' }
      ];
    } else {
      return [
        { path: '/dashboard', displayName: 'Dashboard', icon: 'dashboard' },
        { path: '/profile', displayName: 'Profile', icon: 'person' }
      ];
    }
  }
}

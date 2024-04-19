import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class DetailsGuardService {

constructor(private as: AuthService) { }

canActivate(): boolean {
  let role = this.as.getRoleOfUser();
  if(role === 'staff' || role === 'admin') {
  return true;
  }
else
  return false;}
}

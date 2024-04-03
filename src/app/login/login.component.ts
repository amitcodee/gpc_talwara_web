import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  showPassword = false;

  togglePassword() {
    this.showPassword = !this.showPassword;
  }
  signInForm : FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  constructor(
    private _auth: AuthService,
    private router: Router,) {}

  login() {
    try {
     this._auth.logIn(
        this.signInForm.value.email,
        this.signInForm.value.password
        );
      console.log('Logged in:');
    } catch (error) {
      console.error('Login error:', error);
      // Handle login errors appropriately (e.g., display user-friendly messages)
    }
  }

}


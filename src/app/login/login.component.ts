import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  async login() {
    try {
      const userCredential = await this.afAuth.signInWithEmailAndPassword(this.email, this.password);
      console.log('Logged in:', userCredential.user);
      this.router.navigate(['/protected-route']); // Or redirect to any other page
    } catch (error) {
      console.error('Login error:', error);
      // Handle login errors appropriately (e.g., display user-friendly messages)
    }
  }
}

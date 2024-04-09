import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {
  showPassword = false;
  signingIn: boolean = false;

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  registrationForm : FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  }); // Use FormGroup for better form control and validation

  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  ngOnInit() {

  }

  async signup() {
    if (this.registrationForm.valid) { // Check form validity before proceeding
      this.signingIn = true;
      try {
        const userCredential = await this.afAuth.createUserWithEmailAndPassword(
          this.registrationForm.value.email,
          this.registrationForm.value.password
        );
        console.log('Signed up:', userCredential.user);

        // Handle signup success (e.g., redirect, send verification email)
        this.router.navigate(['/dashboard']); // Or redirect to any other page

      } catch (error) {
        console.error('Signup error:', error);
        // Handle signup errors appropriately (e.g., display error messages)
      }
    } else {
      // Handle invalid form (e.g., highlight errors, display warnings)
    }
  }
}

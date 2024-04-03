import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { GoogleAuthProvider } from '@firebase/auth';
import { BehaviorSubject } from 'rxjs';

interface User {
  uid: string;
  email: string;
  displayName?: string;
  photoURL?: string;
  role?: string;
  // Include other relevant user data
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();
  private currentUser: User | null = null;

  constructor(
    private afAuth :AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router,
  ) {}

  async signUp(email: string, password: string) {
    try {
      const userCredential = await this.afAuth.signInWithEmailAndPassword(email, password);
      // Optionally, store additional user data in Firestore here
      const user = userCredential.user;
      if (user) {
        await this.afs.collection('users').doc(user.uid).set({
          email: user.email,
          // Other user data
        });
      }
      this.router.navigate(['/home']); // Or redirect to a different page
    } catch (error) {
      console.error(error);
      // Handle errors appropriately, e.g., display an error message to the user
    }
  }

  async logIn(email: string, password: string) {
    try {
      const userCredential = await this.afAuth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
          if (userCredential.user) {
            this.currentUser = {
              uid: userCredential.user.uid,
              email: userCredential.user.email || '',
              displayName: userCredential.user.displayName || '',
              photoURL: userCredential.user.photoURL || '',
              role: this.getRoleOfUser(),
              // Include other user data
            };
          }
        });


      this.router.navigate(['/dashboard']).then(
        () => {
          window.location.reload();
        }

      ); // Or redirect to a different page
    } catch (error) {
      console.error(error);
      // Handle errors appropriately, e.g., display an error message to the user
    }
  }

  async forgotPassword(email: string) {
    try {
      await this.afAuth.sendPasswordResetEmail(email);
      // Inform the user that a password reset email has been sent
    } catch (error) {
      console.error(error);
      // Handle errors appropriately, e.g., display an error message to the user
    }
  }

  async GoogleSignIn() {
    try {
      const provider = new GoogleAuthProvider();
      const userCredential = await this.afAuth.signInWithPopup(provider);
      this.router.navigate(['/home']); // Or redirect to a different page
    } catch (error) {
      console.error(error);
      // Handle errors appropriately, e.g., display an error message to the user
    }
  }

  async SignInAnonymously() {
    try {
      const userCredential = await this.afAuth.signInAnonymously();
      this.router.navigate(['/home']); // Or redirect to a different page
    } catch (error) {
      console.error(error);
      // Handle errors appropriately, e.g., display an error message to the user
    }
  }

  get isLoggedIn(): boolean {
    return !!this.currentUser;
  }

  getRoleOfUser(): string {
    // Implement your logic to determine user role based on available data
    // (e.g., Firestore, custom claims)
    if (this.currentUser && this.currentUser.email === 'admin@example.com') {
      return 'admin';
    } else {
      return 'user';
    }
  }

  async logout() {
    try {
      await this.afAuth.signOut();
      this.currentUser = null;
      this.router.navigate(['/login']); // Or redirect to login page
    } catch (error) {
      console.error(error);
      // Handle errors appropriately, e.g., display an error message to the user
    }
  }

  async refreshToken(): Promise<string | null> {
    try {
      const user = await this.afAuth.currentUser;
      if (user) {
        const result = await user.getIdTokenResult(true); // Force refresh
        return result.token;
      } else {
        console.error('No user logged in to refresh token');
        return null;
      }
    } catch (error) {
      console.error('Error refreshing token:', error);
      return null;
    }
  }

  async deleteUserAccount(): Promise<void> {
    const user = await this.afAuth.currentUser;
    if (user) {
      try {
        await user.delete();
        // Optionally, delete user data from Firestore
        this.logout(); // Automatically log out after deletion
      } catch (error) {
        console.error('Error deleting user account:', error);
      }
    } else {
      console.error('No user logged in to delete account');
    }
  }

  async updateEmail(newEmail: string): Promise<void> {
    const user = await this.afAuth.currentUser;
    if (user) {
      try {
        await user.updateEmail(newEmail);
        // Optionally, update user data in Firestore
      } catch (error) {
        console.error('Error updating email:', error);
      }
    } else {
      console.error('No user logged in to update email');
    }
  }




}

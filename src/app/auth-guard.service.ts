// import { Injectable } from '@angular/core';
// import { CanActivate, Router } from '@angular/router';
// import { AngularFireAuth } from '@angular/fire/auth';
// import { Observable } from 'rxjs';
// import { map, take, tap } from 'rxjs/operators';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthGuard implements CanActivate {

//   constructor(private afAuth: AngularFireAuth, private router: Router) {}

//   canActivate(): Observable<boolean> {
//     return this.afAuth.authState.pipe(
//       take(1),
//       map(user => !!user),
//       tap(loggedIn => {
//         if (!loggedIn) {
//           this.router.navigate(['/login']);
//         }
//       })
//     );
//   }
// }

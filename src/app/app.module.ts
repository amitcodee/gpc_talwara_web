import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LanguageService } from './front-end/services/language/language.service';
import { ScrollService } from './front-end/services/scroll/scroll.service';
import { TextSizeService } from './front-end/services/text-size/text-size.service';
import { ThemeService } from './front-end/services/theme/theme.service';
import { TitleService } from './front-end/services/title/title.service';
import { FrontEndModule } from './front-end/front-end.module';
import { AppRoutingModule } from './app.routes';
import { DashboardModule } from './dashboard/dashboard.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { StudentDetailsModule } from './dashboard/student-details/student-details.module';

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';

const firebaseConfig = {
  // Your Firebase project configuration
  apiKey: "AIzaSyBdvU9YtJXAK3P_Ujpga21cP--uA4PR8ag",
  authDomain: "test-183e7.firebaseapp.com",
  projectId: "test-183e7",
  storageBucket: "test-183e7.appspot.com",
  messagingSenderId: "623710803667",
  appId: "1:623710803667:web:f90f78747116f30f7fe626",
  measurementId: "G-NGVYP15BG7"
};

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent
  ], // Add your component declarations here
  imports: [
    BrowserModule,
    FrontEndModule,
    DashboardModule,
    StudentDetailsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule,
    AngularFireModule.initializeApp(firebaseConfig),
  ], // Add your module imports here
  exports: [], // Add your exports here
  providers: [
    LanguageService,
    ScrollService,
    TextSizeService,
    ThemeService,
    TitleService,
    provideAnimationsAsync()
  ], // Add your services/providers here
  bootstrap: [AppComponent]
})
export class AppModule { }

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
import { StudentDetailsModule } from './student-details/student-details.module';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

// for Router import:
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';

// for Core import:
import { LoadingBarModule } from '@ngx-loading-bar/core';

import { AngularFireModule } from '@angular/fire/compat';
import { getDatabase, provideDatabase } from '@angular/fire/database'
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AuthService } from './services/auth.service';
import { MaterialModule } from './material.module';

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
    RegisterComponent,
    LoginComponent
  ], // Add your component declarations here
  imports: [
    BrowserModule,
    FrontEndModule,
    DashboardModule,
    StudentDetailsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule,
    MatProgressSpinnerModule,
    AngularFireModule.initializeApp(firebaseConfig),
    provideDatabase(() => getDatabase()),

        // for Router use:
    LoadingBarRouterModule,
        // for Core use:
    LoadingBarModule,
    MaterialModule
  ], // Add your module imports here
  exports: [], // Add your exports here
  providers: [
    LanguageService,
    ScrollService,
    TextSizeService,
    ThemeService,
    TitleService,
    AuthService,
    provideAnimationsAsync(),
  ], // Add your services/providers here
  bootstrap: [AppComponent]
})
export class AppModule { }

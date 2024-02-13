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

@NgModule({
  declarations: [
    AppComponent
  ], // Add your component declarations here
  imports: [
    BrowserModule,
    FrontEndModule,
    DashboardModule,
    StudentDetailsModule,
    AppRoutingModule
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

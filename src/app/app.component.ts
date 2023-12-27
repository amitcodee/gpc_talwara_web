import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet,RouterLink } from '@angular/router';
import { HeaderComponent } from "./header-footer/header/header.component";
//import AOS from 'aos';
import { HeroSectionComponent } from "./home/hero-section/hero-section.component";
import { FooterComponent } from "./header-footer/footer/footer.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, RouterLink, HeaderComponent, HeroSectionComponent, FooterComponent]
})
export class AppComponent implements OnInit{
  ngOnInit() {
//    AOS.init();
  }
  title = 'Gpc Talwara';
}

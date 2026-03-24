import { Component,  ViewChild, ElementRef, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.scss'
})
export class NavigationBarComponent {
  @ViewChild('work', { static: false }) workSection!: ElementRef;
  @ViewChild('about', { static: false }) aboutSection!: ElementRef;
  @ViewChild('connect', { static: false }) connectSection!: ElementRef;
  @ViewChild('main', { static: false }) mainSection!: ElementRef;

  isMobileMenuOpen = false;

  constructor(
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        const element = document.getElementById(fragment);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }

  


  

}

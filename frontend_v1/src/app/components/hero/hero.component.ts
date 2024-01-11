import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { interval } from 'rxjs';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { ThemeService } from '../../cores/services/theme.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  _theme = inject(ThemeService);
  currThemeDark?: any = this._theme.signalThemeDark();

  // Icons Manager - Socials
  faLinkedin = faLinkedin;
  faGithub = faGithub;
  faEnve = faEnvelope;

  public skillRotate = [
    {
      id: 1,
      skill: 'frontend developer',
    },
    {
      id: 2,
      skill: 'backend developer',
    },
    {
      id: 3,
      skill: 'fullstack developer',
    },
    {
      id: 4,
      skill: 'game developer',
    },
  ];
  public currentIndex = 1;
  public animationDuration = 1; // Change this to adjust animation speed
  private slideChange$ = interval(2000); // Change this to adjust slide interval

  constructor() {
    this.slideChange$.subscribe(() => {
      this.currentIndex =
        (this.currentIndex + 1) % (this.skillRotate.length + 1);
    });

  }
}

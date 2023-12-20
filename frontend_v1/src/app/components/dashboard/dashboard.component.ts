import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faLinkedin,
  faGithub,
  faUnity,
  faHtml5,
  faCss3,
  faJs,
  faNodeJs,
  faReact,
  faAngular,
  faPhp,
  faLaravel,
  faDocker,

} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { interval } from 'rxjs';
import { ThemeService } from '../../cores/services/theme.service';
import { MTheme } from '../../cores/models/theme.models';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
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

  // Icons Manager - Socials
  faLinkedin = faLinkedin;
  faGithub = faGithub;
  faEnve = faEnvelope;

  // Icons Manager - Tech
  faUnity = faUnity;
  faHtml5 = faHtml5;
  faCss = faCss3;
  techStack = [faUnity,]
  

  // Injection
  _theme = inject(ThemeService);
  _cdr = inject(ChangeDetectorRef);
  currThemeDark!: any;

  ngOnInit(): void {
    this.slideChange$.subscribe(() => {
      this.currentIndex =
        (this.currentIndex + 1) % (this.skillRotate.length + 1);
    });

    this._theme.$currThemeDark.subscribe((data: MTheme) => {
      this.currThemeDark = data.theme.currThemeDark;
      this._cdr.detectChanges();
    });
  }
}

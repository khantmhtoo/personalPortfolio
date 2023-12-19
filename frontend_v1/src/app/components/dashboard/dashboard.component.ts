import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  skillRotate = [
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
  currentIndex = 1;
  animationDuration = 1; // Change this to adjust animation speed

  private slideChange$ = interval(2000); // Change this to adjust slide interval

  ngOnInit(): void {
    this.slideChange$.subscribe(() => {
      this.currentIndex =
        (this.currentIndex + 1) % (this.skillRotate.length + 1);
    });
  }
}

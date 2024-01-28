import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeService } from '../../cores/services/theme.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss',
})
export class ResumeComponent {
  _router = inject(Router);
  _themeService = inject(ThemeService);
  currThemeDark?: any = this._themeService.signalThemeDark();

  onResume() {
    this._router.navigate(['resume/detail']);
  }
}

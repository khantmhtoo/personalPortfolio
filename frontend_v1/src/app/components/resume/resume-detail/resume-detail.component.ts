import { Component, inject } from '@angular/core';
import { MCResume, resumeData } from '../static_data/resume.data';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../../cores/services/theme.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resume-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resume-detail.component.html',
  styleUrl: './resume-detail.component.scss',
})
export class ResumeDetailComponent {  
  _router = inject(Router);
  resumeData: MCResume = resumeData;
  
  _themeService = inject(ThemeService);
  currThemeDark?: any = this._themeService.signalThemeDark();
  
  onBack(): void {
    this._router.navigate(['/dashboard']);
  }
}

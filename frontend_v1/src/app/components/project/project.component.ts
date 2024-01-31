import { Component, inject } from '@angular/core';
import { ProjectlistComponent } from './projectlist/projectlist.component';
import { ThemeService } from '../../cores/services/theme.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule, ProjectlistComponent],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
})
export class ProjectComponent {
  _router = inject(Router);
  _themeService = inject(ThemeService);
  currThemeDark?: any = this._themeService.signalThemeDark();

  onBack(): void {
    this._router.navigate(['/dashboard']);
  }
}

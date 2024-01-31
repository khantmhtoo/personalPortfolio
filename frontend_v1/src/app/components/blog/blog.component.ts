import { Component, inject } from '@angular/core';
import { BloglistComponent } from './bloglist/bloglist.component';
import { ThemeService } from '../../cores/services/theme.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, BloglistComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss',
})
export class BlogComponent {
  _router = inject(Router);
  _themeService = inject(ThemeService);
  currThemeDark?: any = this._themeService.signalThemeDark();

  onBack(): void {
    this._router.navigate(['/dashboard']);
  }
}

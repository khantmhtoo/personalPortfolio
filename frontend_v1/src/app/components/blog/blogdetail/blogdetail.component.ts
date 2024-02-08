import { Component, inject } from '@angular/core';
import { BlogService } from '../services/blog.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, filter } from 'rxjs';
import { ThemeService } from '../../../cores/services/theme.service';
import { MCBlog } from '../models/blog.model';

@Component({
  selector: 'app-blogdetail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blogdetail.component.html',
  styleUrl: './blogdetail.component.scss',
})
export class BlogdetailComponent {
  _blogService = inject(BlogService);
  _themeService = inject(ThemeService);

  _activatedRoute = inject(ActivatedRoute);
  _router = inject(Router);

  selectedData: MCBlog | undefined;
  selectedDataSub!: Subscription;
  currThemeDark?: any = this._themeService.signalThemeDark();

  onAccess(): void {
    this._activatedRoute.params.subscribe((params) => {
      const itemId = params['id'];
      this._blogService.getBlogList();
      this._blogService.getBlog(itemId);
      this.selectedDataSub = this._blogService.$selectedBlog.subscribe(
        (data: MCBlog | undefined) => {
          this.selectedData = data;
        }
      );
      if (!this.selectedData) {
        this._router.navigate(['**']);
      }
    });
  }

  onBack(): void {
    this._router.navigate(['/blog']);
  }

  ngOnInit(): void {
    this.onAccess();
  }

  ngOnDestroy(): void {
    if (this.selectedDataSub) {
      this.selectedDataSub.unsubscribe();
    }
  }
}

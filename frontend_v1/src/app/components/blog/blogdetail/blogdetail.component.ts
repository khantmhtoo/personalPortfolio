import { Component, inject } from '@angular/core';
import { BlogService } from '../services/blog.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { MCBlog } from '../../../fixtures/testFakeDataType';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-blogdetail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blogdetail.component.html',
  styleUrl: './blogdetail.component.scss'
})
export class BlogdetailComponent {
  _blogService = inject(BlogService);
  _activatedRoute = inject(ActivatedRoute);
  _router = inject(Router);
  selectedData: MCBlog | undefined;
  selectedDataSub!: Subscription;

  ngOnInit(): void {
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

  ngOnDestroy(): void {
    if (this.selectedDataSub) {
      this.selectedDataSub.unsubscribe();
    }
  }
}

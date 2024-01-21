import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { BlogService } from '../services/blog.service';
import { MCBlog } from '../../../fixtures/testFakeDataType';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-bloglist',
  standalone: true,
  imports: [],
  templateUrl: './bloglist.component.html',
  styleUrl: './bloglist.component.scss',
})
export class BloglistComponent implements OnInit, OnDestroy {
  _blogService = inject(BlogService);
  blogList!: MCBlog[];
  blogListSubs!: Subscription;

  onClick(id: string) {
    console.log('Clicked on blog');
  }

  ngOnInit(): void {
    this._blogService.getProjectList();
    this.blogListSubs = this._blogService.$blogList.subscribe((data: any) => {
      this.blogList = data;
    });
  }
  
  ngOnDestroy(): void {
    if (this.blogListSubs) {
      this.blogListSubs.unsubscribe();
    }
  }
}

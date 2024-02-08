import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { BlogService } from '../services/blog.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MCBlog } from '../models/blog.model';

@Component({
  selector: 'app-bloglist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bloglist.component.html',
  styleUrl: './bloglist.component.scss',
})
export class BloglistComponent implements OnInit, OnDestroy {
  _blogService = inject(BlogService);
  _router = inject(Router);
  blogList!: MCBlog[];
  blogListSubs!: Subscription;

  onClick(id: string) {
    this._router.navigate([`blog/details/${id}`]);
  }

  routeToLink() {
    this._router.navigate([`blog`]);
  }

  ngOnInit(): void {
    this._blogService.getBlogList();
    this.blogListSubs = this._blogService.$blogList.subscribe((data: any) => {
      this.blogList = data.Blog;
    });
  }

  ngOnDestroy(): void {
    if (this.blogListSubs) {
      this.blogListSubs.unsubscribe();
    }
  }
}

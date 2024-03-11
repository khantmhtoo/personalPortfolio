import { Injectable, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MBlog, MCBlog } from '../models/blog.model';
import { ApiService } from '../../../cores/services/api.service';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private blogList: MBlog = new MBlog();
  private blogListBS = new BehaviorSubject<MBlog | null>(this.blogList);
  public $blogList = this.blogListBS.asObservable();

  private selectedBlog!: MCBlog | undefined;
  private selectedBlogBS = new BehaviorSubject(this.selectedBlog);
  public $selectedBlog = this.selectedBlogBS.asObservable();

  _api = inject(ApiService)

  getBlogList() {
    this._api.getData('blog').subscribe((data: any) => {
      this.blogList.getBlogs(data)
      this.blogListBS.next(this.blogList);
    })

  }

  getBlog(id: string) {
    this.selectedBlog = this.blogList.getBlogById(id)

    if (this.$selectedBlog) {
      this.selectedBlogBS.next(this.selectedBlog);
    }
  }
}

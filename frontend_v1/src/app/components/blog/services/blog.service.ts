import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { testFakeDataBlog } from '../../../fixtures/testFakeData';
import { MBlog, MCBlog } from '../models/blog.model';

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

  getBlogList() {
    this.blogList.getBlogs(testFakeDataBlog)
    this.blogListBS.next(this.blogList);
  }

  getBlog(id: string) {
    this.selectedBlog = this.blogList.getBlogById(id)

    if (this.$selectedBlog) {
      this.selectedBlogBS.next(this.selectedBlog);
    }
  }
}

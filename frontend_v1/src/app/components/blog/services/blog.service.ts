import { Injectable } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { BehaviorSubject } from 'rxjs';
import { MCBlog } from '../../../fixtures/testFakeDataType';
import { testFakeDataBlog } from '../../../fixtures/testFakeData';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private blogList: MCBlog[] = [];
  private blogListBS = new BehaviorSubject(this.blogList);
  public $blogList = this.blogListBS.asObservable();

  private selectedBlog!: MCBlog | undefined;
  private selectedBlogBS = new BehaviorSubject(this.selectedBlog);
  public $selectedBlog = this.selectedBlogBS.asObservable();


  getBlogList() {
    this.blogList = testFakeDataBlog;
    this.blogListBS.next(this.blogList);
  }

  getBlog(id: string) {
    this.selectedBlog = this.blogList.find((blog) => blog.id === id);

    if (this.$selectedBlog) {
      this.selectedBlogBS.next(this.selectedBlog);
    }
  }
}

import { Component } from '@angular/core';
import { BloglistComponent } from './bloglist/bloglist.component';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [BloglistComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {

}

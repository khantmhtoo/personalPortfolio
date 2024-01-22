import { Routes } from '@angular/router';
import { BlogComponent } from '../blog.component';

export const BLOG_ROUTES: Routes = [
  {
    path: '',
    component: BlogComponent,
  },
  {
    path: 'details/:id',
    loadComponent: () =>
      import('../blogdetail/blogdetail.component').then(
        (mod) => mod.BlogdetailComponent
      ),
  },
];

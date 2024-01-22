import { Routes } from '@angular/router';
import { DashboardComponent } from '../components/dashboard/dashboard.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'blog',
    loadChildren: () =>
      import('../components/blog/routes/blog.rotues').then(
        (mod) => mod.BLOG_ROUTES
      ),
  },
  {
    path: 'project',
    loadChildren: () =>
      import('../components/project/routes/project.routes').then(
        (mod) => mod.PROJECT_ROUTES
      ),
  },
  {
    path: '**',
    loadComponent: () =>
      import('../cores/components/error/error.component').then(
        (mod) => mod.ErrorComponent
      ),
  },
];

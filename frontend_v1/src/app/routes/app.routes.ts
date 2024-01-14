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
    loadComponent: () =>
      import('../components/blog/blog.component').then(
        (mod) => mod.BlogComponent
      ),
  },
  {
    path: 'project',
    loadComponent: () =>
      import('../components/project/project.component').then(
        (mod) => mod.ProjectComponent
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

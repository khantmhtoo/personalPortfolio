import { Routes } from '@angular/router';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { projectGuard } from '../cores/guards/project.guard';

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
    path: 'project/details/:id',
    canActivate: [projectGuard],
    loadComponent: () =>
      import(
        '../components/project/projectdetail/projectdetail.component'
      ).then((mod) => mod.ProjectdetailComponent),
  },
  {
    path: '**',
    loadComponent: () =>
      import('../cores/components/error/error.component').then(
        (mod) => mod.ErrorComponent
      ),
  },
];

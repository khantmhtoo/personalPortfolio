import { Routes } from '@angular/router';
import { ProjectComponent } from '../project.component';

export const PROJECT_ROUTES: Routes = [
  {
    path: '',
    component: ProjectComponent
  },
  {
    path: 'details/:id',
    loadComponent: () =>
      import(
        '../projectdetail/projectdetail.component'
      ).then((mod) => mod.ProjectdetailComponent),
  },
];

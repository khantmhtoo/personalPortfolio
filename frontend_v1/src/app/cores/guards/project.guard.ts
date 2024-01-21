import { CanActivateFn, Router } from '@angular/router';
import { ProjectService } from '../../components/project/services/project.service';
import { inject } from '@angular/core';

export const projectGuard: CanActivateFn = (route, state) => {
  const _projectService: ProjectService = inject(ProjectService);
  const _router: Router = inject(Router);

  console.log('This is signal', _projectService.signalSelectedProject());
  if (_projectService.signalSelectedProject()) {
    return true;
  } else {
    return _router.createUrlTree(['**']);
  }
};

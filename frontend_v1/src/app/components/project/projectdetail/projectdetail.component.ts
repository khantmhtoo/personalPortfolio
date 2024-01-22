import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ProjectService } from '../services/project.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { MCProject } from '../../../fixtures/testFakeDataType';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-projectdetail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projectdetail.component.html',
  styleUrl: './projectdetail.component.scss',
})
export class ProjectdetailComponent implements OnInit, OnDestroy {
  _projectService = inject(ProjectService);
  _activatedRoute = inject(ActivatedRoute);
  _router = inject(Router);
  selectedData: MCProject | undefined;
  selectedDataSub!: Subscription;

  ngOnInit(): void {
    this._activatedRoute.params.subscribe((params) => {
      const itemId = params['id'];
      this._projectService.getProjectList();
      this._projectService.getProject(itemId);
      this.selectedDataSub = this._projectService.$selectedProject.subscribe(
        (data: MCProject | undefined) => {
          this.selectedData = data;
        }
      );

      if (!this.selectedData) {
        this._router.navigate(['**']);
      }
    });
  }

  ngOnDestroy(): void {
    if (this.selectedDataSub) {
      this.selectedDataSub.unsubscribe();
    }
  }
}

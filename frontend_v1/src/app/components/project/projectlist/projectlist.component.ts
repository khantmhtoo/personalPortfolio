import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProjectService } from '../services/project.service';
import { MCProject } from '../../../fixtures/testFakeDataType';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projectlist',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './projectlist.component.html',
  styleUrl: './projectlist.component.scss',
})
export class ProjectlistComponent implements OnInit, OnDestroy {
  _projectService = inject(ProjectService);
  _router = inject(Router);
  projectList!: MCProject[];
  projectListSubs!: Subscription;

  public onClick(id: string) {
    console.log('Access project details.');
    this._projectService.getProject(id);
    this._router.navigate([`project/details/${id}`])
  }

  ngOnInit(): void {
    this._projectService.getProjectList();
    this.projectListSubs = this._projectService.$projectList.subscribe(
      (data: any) => {
        this.projectList = data;
      }
    );
  }

  ngOnDestroy(): void {
    if (this.projectListSubs) {
      this.projectListSubs.unsubscribe();
    }
  }
}

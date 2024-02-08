import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProjectService } from '../services/project.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { MCProject } from '../models/project.model';

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

  public routeToLink() {
    this._router.navigate([`project`]);
  }

  public onClick(id: string) {
    this._router.navigate([`project/details/${id}`]);
  }

  ngOnInit(): void {
    this._projectService.getProjectList();
    this.projectListSubs = this._projectService.$projectList.subscribe(
      (data: any) => {
        this.projectList = data.Project;
      }
    );
  }

  ngOnDestroy(): void {
    if (this.projectListSubs) {
      this.projectListSubs.unsubscribe();
    }
  }
}

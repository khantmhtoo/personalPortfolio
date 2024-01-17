import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProjectService } from '../services/project.service';
import { MCProject } from '../../../fixtures/testFakeDataType';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-projectlist',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './projectlist.component.html',
  styleUrl: './projectlist.component.scss',
})
export class ProjectlistComponent implements OnInit, OnDestroy {
  _projectService = inject(ProjectService);
  projectList!: MCProject[];
  projectListSubs!: Subscription;

  public onClick(id: string) {
    console.log('Access project details.');
    console.log(id);
    console.log(this._projectService.getProject(id));
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

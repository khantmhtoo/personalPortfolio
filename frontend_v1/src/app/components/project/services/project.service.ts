import { Injectable } from '@angular/core';
import { testFakeDataProject } from '../../../fixtures/testFakeData';
import { MCProject } from '../../../fixtures/testFakeDataType';
import { BehaviorSubject } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private projectList: MCProject[] = [];
  private projectListBS = new BehaviorSubject(this.projectList);
  public $projectList = this.projectListBS.asObservable();

  private selectedProject!: MCProject | undefined;
  private selectedProjectBS = new BehaviorSubject(this.selectedProject);
  public $selectedProject = this.selectedProjectBS.asObservable();

  public signalSelectedProject = toSignal(this.$selectedProject, {
    initialValue: undefined,
  });

  // Need to persist this data
  getProjectList() {
    this.projectList = testFakeDataProject;
    this.projectListBS.next(this.projectList);
  }

  getProject(id: string) {
    this.selectedProject = this.projectList.find(
      (project) => project.id === id
    );

    if (this.$selectedProject) {
      this.selectedProjectBS.next(this.selectedProject);
    }
  }
}

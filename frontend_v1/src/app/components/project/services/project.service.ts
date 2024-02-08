import { Injectable } from '@angular/core';
import { testFakeDataProject } from '../../../fixtures/testFakeData';
import { BehaviorSubject } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { MCProject, MProject } from '../models/project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private projectList: MProject = new MProject();
  private projectListBS = new BehaviorSubject<MProject | null>(
    this.projectList
  );
  public $projectList = this.projectListBS.asObservable();

  private selectedProject!: MCProject | undefined;
  private selectedProjectBS = new BehaviorSubject<MCProject | undefined>(
    this.selectedProject
  );
  public $selectedProject = this.selectedProjectBS.asObservable();

  public signalSelectedProject = toSignal(this.$selectedProject, {
    initialValue: undefined,
  });

  // Need to persist this data
  getProjectList() {
    this.projectList.getProjects(testFakeDataProject);
    this.projectListBS.next(this.projectList);
  }

  getProject(id: string) {
    this.selectedProject = this.projectList.getProjectById(id)

    if (this.$selectedProject) {
      this.selectedProjectBS.next(this.selectedProject);
    }
  }
}

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

  // Probably have a single target here

  getProjectList() {
    this.projectList = testFakeDataProject;
    this.projectListBS.next(this.projectList);
  }

  getProject(id: string) {
    return this.projectList.find((project) => project.id === id);
  }
}

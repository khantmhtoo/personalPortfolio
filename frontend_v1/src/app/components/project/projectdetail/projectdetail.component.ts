import { Component, OnInit, inject } from '@angular/core';
import { ProjectService } from '../services/project.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projectdetail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projectdetail.component.html',
  styleUrl: './projectdetail.component.scss'
})
export class ProjectdetailComponent implements OnInit{
  _projectService = inject(ProjectService)
  selectedData: any;

  ngOnInit(): void {
    this._projectService.$selectedProject.subscribe((data: any) => {
      this.selectedData = data
    })
  }
}

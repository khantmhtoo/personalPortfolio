import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ProjectService } from '../services/project.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { MCProject } from '../../../fixtures/testFakeDataType';
import { Subscription } from 'rxjs';
import { ThemeService } from '../../../cores/services/theme.service';
import { AccordionModule } from 'primeng/accordion';

@Component({
  selector: 'app-projectdetail',
  standalone: true,
  imports: [CommonModule, AccordionModule],
  templateUrl: './projectdetail.component.html',
  styleUrl: './projectdetail.component.scss',
})
export class ProjectdetailComponent implements OnInit, OnDestroy {
  _projectService = inject(ProjectService);
  _themeService = inject(ThemeService);
  
  _activatedRoute = inject(ActivatedRoute);
  _router = inject(Router);

  selectedData: MCProject | undefined;
  selectedDataSub!: Subscription;
  currThemeDark?: any = this._themeService.signalThemeDark();

  onAccess(): void {
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

  onBack(): void {
    this._router.navigate(['/project']);
  }

  ngOnInit(): void {
    this.onAccess();
  }

  ngOnDestroy(): void {
    if (this.selectedDataSub) {
      this.selectedDataSub.unsubscribe();
    }
  }
}

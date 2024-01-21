import { Component } from '@angular/core';
import { ProjectlistComponent } from './projectlist/projectlist.component';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [ProjectlistComponent],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {

}

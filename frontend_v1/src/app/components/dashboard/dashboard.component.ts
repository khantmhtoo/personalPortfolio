import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { BloglistComponent } from '../blog/bloglist/bloglist.component';
import { ProjectlistComponent } from '../project/projectlist/projectlist.component';
import { TechStackComponent } from '../tech-stack/tech-stack.component';
import { ContactComponent } from '../contact/contact.component';
import { ResumeComponent } from '../resume/resume.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    BloglistComponent,
    ProjectlistComponent,
    TechStackComponent,
    ContactComponent,
    ResumeComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {}

import { Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { ContactComponent } from '../components/contact/contact.component';
import { AboutComponent } from '../components/about/about.component';
import { ProjectsComponent } from '../components/projects/projects.component';
import { SkillsComponent } from '../components/skills/skills.component';
import { ResumeComponent } from '../components/resume/resume.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },  {
    path: 'skills',
    component: SkillsComponent
  }
  ,  {
    path: 'resume',
    component: ResumeComponent
  }
];

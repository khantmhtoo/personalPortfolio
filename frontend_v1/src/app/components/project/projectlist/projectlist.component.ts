import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faUnity,
  faHtml5,
  faCss3,
  faJs,
  faNodeJs,
  faReact,
  faAngular,
  faPhp,
  faLaravel,
  faDocker,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-projectlist',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './projectlist.component.html',
  styleUrl: './projectlist.component.scss',
})
export class ProjectlistComponent {
  // Icons Manager
  faUnity = faUnity;
  faHtml5 = faHtml5;
  faCss = faCss3;
  faJs = faJs;
  faNodeJs = faNodeJs;
  faReact = faReact;
  faAngular = faAngular;
  faPhp = faPhp;
  faLaravel = faLaravel;
  faDocker = faDocker;
  techStack = [
    faHtml5,
    faCss3,
    faJs,
    faNodeJs,
    faAngular,
    faReact,
    faPhp,
    faLaravel,
    faUnity,
    faDocker,
  ];

  testFakeData = [
    {
      projectTitle: 'Awesome Task Manager',
      shortDescription:
        'Connect and share with friends through a dynamic dashboard that integrates social media feeds, personalized content, and real-time updates.',
      techStack: [faAngular, faNodeJs, faUnity, faReact],
    },
    {
      projectTitle: 'Interactive Social Dashboard',
      shortDescription:
        'Developed a feature-rich task management application using Angular and Node.js. Led a cross-functional team in delivering a user-friendly solution for efficient task organization and collaboration. Achieved a 20% increase in team productivity based on user feedback.x',
      techStack: [faAngular, faNodeJs, faUnity, faReact],
    },
    {
      projectTitle: 'Interactive Social Dashboard',
      shortDescription:
        'Developed a feature-rich task management application using Angular and Node.js. Led a cross-functional team in delivering a user-friendly solution for efficient task organization and collaboration. Achieved a 20% increase in team productivity based on user feedback.x',
      techStack: [faAngular, faNodeJs, faUnity, faReact],
    },
    {
      projectTitle: 'Interactive Social Dashboard',
      shortDescription:
        'Developed a feature-rich task management application using Angular and Node.js. Led a cross-functional team in delivering a user-friendly solution for efficient task organization and collaboration. Achieved a 20% increase in team productivity based on user feedback.x',
      techStack: [faAngular, faNodeJs, faUnity, faReact],
    },
    {
      projectTitle: 'Interactive Social Dashboard',
      shortDescription:
        'Developed a feature-rich task management application using Angular and Node.js. Led a cross-functional team in delivering a user-friendly solution for efficient task organization and collaboration. Achieved a 20% increase in team productivity based on user feedback.x',
      techStack: [faAngular, faNodeJs, faUnity, faReact],
    },
  ];
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faUnity,
  faReact,
  faPhp,
  faHtml5,
  faCss3,
  faNode,
  faAngular,
  faJs,
  faLaravel,
  faPython,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-tech-stack',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './tech-stack.component.html',
  styleUrl: './tech-stack.component.scss',
})
export class TechStackComponent {
  techStack = [
    faHtml5,
    faCss3,
    faJs,
    faNode,
    faAngular,
    faUnity,
    faReact,
    faPhp,
    faLaravel,
    faPython,
    faGithub,
  ];
}

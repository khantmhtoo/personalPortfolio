import {
  faAngular,
  faNodeJs,
  faUnity,
  faReact,
} from '@fortawesome/free-brands-svg-icons';
import { MCProject } from './testFakeDataType';

export const testFakeDataProject: MCProject[] = [
  {
    id: '000000001',
    projectTitle: 'Awesome Task Manager',
    shortDescription:
      'Connect and share with friends through a dynamic dashboard that integrates social media feeds, personalized content, and real-time updates.',
    techStack: [faAngular, faNodeJs, faUnity, faReact],
    imgLink: '../../../../assets/wallPaperNavScreen.jpg',
  },
  {
    id: '000000002',
    projectTitle: 'Interactive Social Dashboard',
    shortDescription:
      'Led a cross-functional team in delivering a user-friendly solution for efficient task organization and collaboration. Achieved a 20% increase in team productivity based on user feedback.x',
    techStack: [faAngular, faNodeJs, faUnity, faReact],
  },
];

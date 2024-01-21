import {
  faAngular,
  faNodeJs,
  faUnity,
  faReact,
} from '@fortawesome/free-brands-svg-icons';
import { MCBlog, MCProject } from './testFakeDataType';

export const testFakeDataProject: MCProject[] = [
  {
    id: '000000001',
    projectTitle: 'Awesome Task Manager',
    shortDescription:
      'Connect and share with friends through a dynamic dashboard that integrates social media feeds, personalized content, and real-time updates.',
    techStack: [faAngular, faNodeJs, faUnity, faReact],
    imgLink: '../../../../assets/wallPaperNavScreen.jpg',
  },
];

export const testFakeDataBlog: MCBlog[] = [

];

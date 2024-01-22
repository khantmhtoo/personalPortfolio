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
  {
    id: '000000002',
    projectTitle: 'Awesome Task Manager',
    shortDescription:
      'Connect and share with friends through a dynamic dashboard that integrates social media feeds, personalized content, and real-time updates.',
    techStack: [faAngular, faNodeJs, faUnity, faReact],
    imgLink: '../../../../assets/wallPaperNavScreen.jpg',
  },
];

export const testFakeDataBlog: MCBlog[] = [
  {
    id: '100000000',
    blogTitle: 'Understanding Unity State Machines',
    summary:
      'Understanding Unity State Machines is a comprehensive exploration of the fundamental concept of state machines in Unity game development.',
    author: 'John Doe',
    date: '2024-01-21',
    content: [
      {
        section: 'Introduction to State Machines',
        description:
          "Unity's State Machine Behaviors enable developers to model complex behaviors by defining states, transitions, and associated actions.",
      },
      {
        section: 'States and Transitions',
        description:
          'Use the Animator window to visually define states and transitions, allowing for efficient control of game logic flow.',
      },
      {
        section: 'Events and Triggers',
        description:
          'Learn to use events and triggers for initiating state transitions based on in-game events, enhancing interactivity.',
      },
      {
        section: 'Best Practices',
        description:
          'Discover best practices for organizing and optimizing state machines, including naming conventions and structuring Animator Controllers.',
      },
      {
        section: 'Real-world Examples',
        description:
          'Explore practical examples of using Unity state machines in scenarios such as character animations and NPC behaviors.',
      },
      {
        section: 'Conclusion',
        description:
          "Whether you're a novice or an experienced Unity developer, mastering state machines is crucial for creating engaging games. Follow along as we dive deep into Unity state machines.",
      },
    ],
    tags: ['Unity', 'Game Development', 'State Machines'],
  },
];

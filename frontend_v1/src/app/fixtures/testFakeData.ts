import {
  faAngular,
  faNodeJs,
  faUnity,
  faReact,
} from '@fortawesome/free-brands-svg-icons';
import { MCBlog, MCProject } from './testFakeDataType';

// Later Change This -- What we will do is get the completed data based on the id
export const testFakeDataProject: MCProject[] = [
  {
    id: '000000001',
    projectTitle: 'Awesome Task Manager',
    overallSummary: `The Awesome Task Manager streamlines task management with a dynamic dashboard, integrating social feeds and real-time updates for effortless organization. Stay connected with friends while managing tasks seamlessly.`,
    status: 'Completed',
    position: 'Engineer UI',
    company: 'N/A',
    section: {
      sectionTitle: 'Dynamic Dashboard for Task Management',
      descriptionSection: [
        {
          title: 'Overview',
          content: `
            The Awesome Task Manager is designed to provide a seamless experience for task management. 
            With a dynamic dashboard that integrates social media feeds, personalized content, and real-time updates, 
            it's the perfect tool for staying organized and connected with friends.
          `,
        },
        {
          title: 'Key Features',
          content: `
            - Dynamic Dashboard
            - Social Media Integration
            - Personalized Content
            - Real-time Updates
          `,
        },
        {
          title: 'Technologies Used',
          content: `
            - Angular for the frontend
            - Node.js for the backend
            - Unity for interactive elements
            - React for additional UI components
          `,
        },
        // Add more sections as needed
      ],
    },
    techStack: [faAngular, faNodeJs, faUnity, faReact],
    imgLink: '../../../../assets/wallPaperNavScreen.jpg',
    moreDetails: {
      keyFeatures: [
        'Dynamic Dashboard',
        'Social Media Integration',
        'Personalized Content',
        'Real-time Updates',
      ],
      technologiesUsed: [
        'Angular for the frontend',
        'Node.js for the backend',
        'Unity for interactive elements',
        'React for additional UI components',
      ],
      imagePath: '../../../../assets/screenshots/taskManagerScreenshot.jpg',
    },
  },
];

export const testFakeDataBlog: MCBlog[] = [
  {
    id: '100000000',
    blogTitle: 'Understanding Unity State Machines',
    summary:
      'Understanding Unity State Machines is a comprehensive exploration of the fundamental concept of state machines in Unity game development.',
    author: 'Khant',
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

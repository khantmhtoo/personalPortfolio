import { MCBlog } from '../components/blog/models/blog.model';
import { MCProject } from '../components/project/models/project.model';

// Later Change This -- What we will do is get the completed data based on the id
export const testFakeDataProject: MCProject[] = [
  {
    id: '000000001',
    projectTitle: 'Awesome Task Manager',
    overallSummary: `The Awesome Task Manager streamlines task management with a dynamic dashboard, integrating social feeds and real-time updates for effortless organization. Stay connected with friends while managing tasks seamlessly.`,
    status: 'Completed',
    position: 'Engineer UI',
    company: 'N/A',
    date: '2024-01-21',
    type: 'Work Project',
    imgLink: '../../../../assets/wallPaperNavScreen.jpg',
    content: [
      {
        visuals: '../../../../assets/wallPaperNavScreen.jpg',
        section: 'Overview',
        description:
          "The Awesome Task Manager is designed to provide a seamless experience for task management.  With a dynamic dashboard that integrates social media feeds, personalized content, and real-time updates, it's the perfect tool for staying organized and connected with friends.",
        subContent: [
          {
            section: 'Key Features',
            descriptions: [
              {
                subSection: 'Dynamic Dashboard',
                subDescription:
                  'Dynamic dashboard: Real-time, customizable data visualization for quick and interactive insights.',
              },
              {
                subSection: 'Social Media Integration',
                subDescription:
                  'Seamless integration of social media platforms for enhanced connectivity and engagement.',
              },
              {
                subSection: 'Personalized Content',
                subDescription:
                  'Tailored content delivery based on user preferences for a personalized experience.',
              },
              {
                subSection: 'Real-time Updates',
                subDescription:
                  'Instant and live updates to keep users informed and up-to-date on relevant information.',
              },
            ],
          },
        ],
      },
    ],
    techStack: ['Angular', 'Node.js', 'Unity', 'React', 'HTML', 'CSS'],
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

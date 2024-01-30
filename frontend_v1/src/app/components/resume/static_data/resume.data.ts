export type MCResume = {
  name?: string;
  overview?: string;
  email?: string;
  experience?: constantData[];
  education?: constantData[];
  languages?: string[];
  skills?: any;
};

type constantData = {
  name?: string;
  location?: string;
  position?: string;
  date?: string;
  description?: string[];
};

export const resumeData: MCResume = {
  name: 'Khant Min Htoo',
  overview:
    'Adaptable full-stack developer with diverse experience across tech-related fields. Proven ability to thrive in dynamic work environments. Eager to explore new opportunities, expand technology expertise, and further hone skills in pursuit of continuous growth.',
  email: 'khantmhtoo1294@gmail.com',
  experience: [
    {
      name: 'Frontiir',
      location: 'San Jose',
      position: 'Fullstack Intern',
      date: 'May 2023 - August 2023',
      description: [
        'Developed a specialized HR transfers module within the internal application using the Angular framework to manage all employee transfer states',
        'Applied MVC architecture and SMART concepts to establish scalability, reusability and maintainability of the application',
        'Gained hands-on experience, enhancing practical application development skill in Routing, Components, Services, Interface, RxJS, and more with in the Angular framework',
        'Demonstrated effective collaborative problem-solving within a team environment throughout the internship',
        'Built robust API using Laravel as Backend, contributing to comprehensive skill set and gaining valuable backend development experience',
      ],
    },
  ],
  education: [
    {
      name: 'San Jose State University',
      location: 'San Jose',
      position: 'B.S in Computer Networking and System Management',
      date: 'August 2017 - August 2022',
      description: ['Minor in Business Management'],
    },
  ],
  languages: ['Burmese, English'],
  skills: [
    {
      name: 'programming',
      skill: [
        'HTML',
        'CSS',
        'JavaScript',
        'TypeScript',
        'Angular',
        'React',
        'Laravel',
        'PHP',
        'Docker',
        'GIT',
        'JIRA',
        'Postman',
        'Testing Libraries',
      ],
    },
    {
      name: 'technician',
      skill: ['QC Management', 'RMA Management'],
    },
    {
      name: 'others',
      skill: [
        'Fast Learner',
        'Positive Attitude',
        'Teamwork',
        'Time Management',
        'Manufacturing Concepts',
      ],
    },
  ],
};

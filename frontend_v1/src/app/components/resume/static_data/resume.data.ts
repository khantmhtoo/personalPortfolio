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
    {
      name: 'CHEM USA',
      location: 'Newark',
      position: 'RMA & QC/QA Technician',
      date: 'December 2022 - May 2023',
      description: [
        'Enhanced and maintained records for over 100 finished products daily',
        'Executed RMA and OS procedures for 50-100 products daily',
        'Conducted quality verification on final product performances prior to shipment',
      ],
    },
    {
      name: 'Antra',
      location: 'Remote',
      position: 'Angular Developer Intern',
      date: 'July 2022 - February 2023',
      description: [
        'Gained fundamental hands-on experience in Angular framework, laying a solid foundation for continued growth in SPA development',
        'Collaborated in a small team of 4-5 members in successfully building a robust Frontend Application',
        'Actively contributed ideas for additional product features in collaboration with various teams',
        'Initiated and implemented solutions to enhance application efficiency, by leveraging features like Lazy Loading, NgZone, and other Angular framework features',
        'Collaborated effectively with the Backend team as an API tester',
      ],
    },
    {
      name: 'San Jose State University',
      location: 'San Jose',
      position: 'Teacher Assistant',
      date: 'January 2022 - May 2022',
      description: [
        'Produced and delivered comprehensive course materials to a diverse group of over a dozen students, tailoring content for effective learning experiences',
        'Offered constructive feedback and guidance on students’ work, fostering continuous improvement in the quality of their assignments',
        'Actively assisted students with course assignments and projects, encouraging self-development by providing clarity on the purpose and objectives of each task',
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
};

import { IconDefinition } from '@fortawesome/free-brands-svg-icons';

export type MCProject = {
  id: string;
  projectTitle: string;
  overallSummary: string;
  status: string;
  position: string;
  company: string;
  section: {
    sectionTitle: string;
    descriptionSection: {
      title: string;
      content: string;
    }[];
  };
  techStack: IconDefinition[]; // Assuming 'faAngular', 'faNodeJs', etc., are strings
  imgLink: string;
  moreDetails: {
    keyFeatures: string[];
    technologiesUsed: string[];
    imagePath: string;
    // Add more details as needed
  };
};

type content = {
  section: string;
  description: string;
  visuals?: string;
};

export type MCBlog = {
  id: string;
  blogTitle: string;
  summary: string;
  author?: string;
  date: string;
  content: content[];
  tags: string[];
};

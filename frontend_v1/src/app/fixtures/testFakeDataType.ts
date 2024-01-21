import { IconDefinition } from '@fortawesome/free-brands-svg-icons';

export type MCProject = {
  id: string;
  projectTitle: string;
  shortDescription: string;
  techStack: IconDefinition[];
  imgLink?: string;
};

export type MCBlog = {
  id: string;
  blogTitle: string;
  summary: string;
};

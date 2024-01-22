import { IconDefinition } from '@fortawesome/free-brands-svg-icons';

export type MCProject = {
  id: string;
  projectTitle: string;
  shortDescription: string;
  techStack: IconDefinition[];
  imgLink?: string;
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

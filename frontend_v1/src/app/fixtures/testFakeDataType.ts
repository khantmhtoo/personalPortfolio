type content = {
  section: string;
  description: any;
  visuals?: string;
  subContent?: any;
};

export type MCProject = {
  id: string;
  projectTitle: string;
  overallSummary: string;
  status: string;
  position: string;
  company: string;
  type: string;
  date: string;
  content: content[];
  imgLink: string;
  techStack: string[];
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

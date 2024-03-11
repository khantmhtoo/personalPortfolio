export type MCProject = {
  id: string;
  projectTitle: string;
  summary: string;
  status: string;
  position: string;
  company: string;
  type: string;
  date: string;
  content: content[];
  imgLink: string;
  techStack: string[];
};

type content = {
  section: string;
  description: any;
  visuals?: string;
  subContent?: any;
};



export class MProject {
    private projectList: MCProject[] = []

    get Project() {
        return this.projectList;
    }

    getProjects(datas: MCProject[]) {
        this.projectList = datas
    } 

    getProjectById(id: string) {
        return this.projectList.find((project: MCProject) => project.id === id);
      }
    

    deleteProject(id: string) {}

    updateProject(data: MCProject) {}
  
    createProject(data: MCProject) {}
}
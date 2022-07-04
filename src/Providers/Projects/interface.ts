export interface IProjects {
  name: string;
  aplication: string;
  repository: string;
  img: any;
  description: string;
}

export interface IProjectsContextType {
  projects: IProjects[];
}

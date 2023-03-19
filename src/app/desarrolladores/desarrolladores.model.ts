export interface Developer {
    name: string;
    phone: string;
    projects: Project[];
}
  
export  interface Project {
    title: string;
    image: string;
    description: string;
    deployedUrl: string;
}
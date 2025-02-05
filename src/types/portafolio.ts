export interface Experience {
    title: string;
    company: string;
    period: string;
    description: string[];
  }
  
  export interface Project {
    title: string;
    description: string;
    image: string;
    link: string;
    technologies?: string[];
  }
  
  export interface Skill {
    category: string;
    items: string[];
  }
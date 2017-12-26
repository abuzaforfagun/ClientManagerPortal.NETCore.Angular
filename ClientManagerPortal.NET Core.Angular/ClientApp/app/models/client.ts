import { Project } from "./project";

export interface Client{
    id: number,
    name: string,
    projects: Project[]
}
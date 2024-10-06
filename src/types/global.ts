import { ID } from "./id";

export type Global = ID & {
    duration: string;
    location: string;
    title: string;
    description: string;
    image: string;
    technologies?: string[];
    extraLinks?: Link[];
    created_at?: string;
    landingDescription: string;
}

export type Link = {
    title: string;
    url: string;
    github?: boolean;
}
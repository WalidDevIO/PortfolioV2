import { ID } from "./id";

export type Global = ID & {
    duration: string;
    location: string;
    title: string;
    description: string;
    image: string;
    technologies?: string[];
    extraLinks?: {
        title: string;
        url: string;
        github?: boolean;
    }[];
    created_at?: string;
    landingDescription: string;
}
export type Global = {
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
}
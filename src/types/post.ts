import { ID } from './id'

export type Post = ID & {
    created_at?: string;
    published: boolean;
    title: string;
    content: string;
    slug: string;
    description: string;
}
import { ID } from './id'

export type Post = ID & {
    created_at?: string;
    title: string;
    content: string;
    slug: string;
}
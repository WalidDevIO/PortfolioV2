import { Global } from "./global";

export type Projet = Global & {
    littleDescription: string;
    github: string | null;
}
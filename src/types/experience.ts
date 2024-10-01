import { Global } from "./global";

export type Experience = Global & {
    type: "Alternance" | "Stage" | "Contrat de travail";
}
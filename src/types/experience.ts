import { Global } from "./global";

export type Experience = Global & {
    type: ExperienceType;
}

export type ExperienceType = "Alternance" | "Stage" | "Contrat de travail";
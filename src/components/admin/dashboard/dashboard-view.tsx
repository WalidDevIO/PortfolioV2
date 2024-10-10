import { getSkills } from "@/actions/getSkills"
import { Entries } from "./entries"
import { getProjects } from "@/actions/getProjects"
import { getExperiences } from "@/actions/getExperiences"
import { getFormations } from "@/actions/getFormations"

export async function DashboardView() {
    const data = {
        skills: { title: "Compétences", entries: await getSkills() },
        projects: { title: "Projets", entries: await getProjects() },
        experiences: { title: "Expériences", entries: await getExperiences() },
        formations: { title: "Formations", entries: await getFormations() },
    }
    return <Entries initialData={data} />
}
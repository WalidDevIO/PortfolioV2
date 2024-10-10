import { getProjects } from "@/actions/getProjects";
import { GlobalCards } from "@/components/ui/cards";

export async function ProjectsCards() {
    const projects = await getProjects();
    return (
        <GlobalCards cards={projects} />
    );
}
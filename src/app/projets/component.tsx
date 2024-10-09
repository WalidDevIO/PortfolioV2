import { getProjects } from "@/actions/getProjects";
import { GlobalCards } from "@/components/ui/cards";

export default async function ProjetsCard() {
    const projects = await getProjects();
    return (
        <GlobalCards cards={projects} />
    );
}
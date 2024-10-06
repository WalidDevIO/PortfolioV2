import { GlobalCards } from "@/components/ui/cards";
import { getProjects } from "@/actions/getProjects";
import { Projet } from "@/types/projet";

export default async function Projets() {

    const projets: Projet[] = await getProjects()

    return (
        <div>
            <GlobalCards cards={projets} />
        </div>
    );
}
import { ProjetsCards } from "@/components/projets/projets-cards"; 
import { getProjects } from "@/actions/api";
export default async function Projets() {

    const projets = await getProjects();

    return (
        <div>
            <ProjetsCards projets={projets} />
        </div>
    );
}
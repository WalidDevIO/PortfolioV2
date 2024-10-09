import { GlobalCards } from "@/components/ui/cards";
import { Projet } from "@/types/projet";
//import { useEffect, useState } from "react";
import { getProjects } from "@/actions/getProjects";

export default async function Projets() {
    const projets: Projet[] = await getProjects();

    /*const getProjects = async (): Promise<Projet[]> => {
        const projects = await fetch('/api/projects');
        const data = await projects.json();
        return data as Projet[];
    }

    const [projets, setProjets] = useState<Projet[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            const projects = await getProjects();
            setProjets(projects);
            setLoading(false);
        };
        fetchProjects();
    }, []);*/

    return (
        <div>
            <GlobalCards cards={projets} loading={false} />
        </div>
    );
}
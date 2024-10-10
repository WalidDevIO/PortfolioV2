import { CardsLoader } from "@/components/loaders/cards-loader";
import dynamic from "next/dynamic";

const ProjectsCards = dynamic(async () => (await import("@/components/projects/projects-cards")).ProjectsCards, {
    loading: () => <CardsLoader />
})

export default function Projets() {
    return (
        <div>
            <ProjectsCards />
        </div>
    );
}
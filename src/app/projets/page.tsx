import { Suspense } from "react";
import { CardsLoader } from "@/components/loaders/cards-loader";
import { ProjectsCards } from "@/components/projects/projects-cards";

export default function Projets() {
    return (
        <div>
            <Suspense fallback={<CardsLoader />}>
                <ProjectsCards />
            </Suspense>
        </div>
    );
}
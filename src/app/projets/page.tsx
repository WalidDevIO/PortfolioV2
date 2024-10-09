import { GlobalCards } from "@/components/ui/cards";
import { getProjects } from "@/actions/getProjects";
import { Suspense } from "react";
import CardsLoader from "@/components/loaders/cards-loader";

export default function Projets() {
    return (
        <div>
            <Suspense fallback={<CardsLoader />}>
                <GlobalCards fetchCards={getProjects} />
            </Suspense>
        </div>
    );
}
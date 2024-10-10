import { Suspense } from "react";
import { CardsLoader } from "@/components/loaders/cards-loader";
import { ExperiencesCards } from "@/components/experiences/experiences-cards";

export default function Experiences() {
    return (
        <div>
            <Suspense fallback={<CardsLoader />}>
                <ExperiencesCards />
            </Suspense>
        </div>
    );
}
import { GlobalCards } from "@/components/ui/cards";
import { getExperiences } from "@/actions/getExperiences";
import { Suspense } from "react";
import CardsLoader from "@/components/loaders/cards-loader";

export default function Experiences() {
    return (
        <div>
            <Suspense fallback={<CardsLoader />}>
                <GlobalCards fetchCards={getExperiences} />
            </Suspense>
        </div>
    );
}
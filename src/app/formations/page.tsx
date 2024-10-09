import { GlobalCards } from "@/components/ui/cards";
import { getFormations } from "@/actions/getFormations";
import { Suspense } from "react";
import CardsLoader from "@/components/loaders/cards-loader";

export default function Formations() {
    return (
        <div>
            <Suspense fallback={<CardsLoader />}>
                <GlobalCards fetchCards={getFormations} />
            </Suspense>
        </div>
    );
}
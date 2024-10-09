import { Suspense } from "react";
import CardsLoader from "@/components/loaders/cards-loader";
import FormationCard from "./component";

export default function Formations() {
    return (
        <div>
            <Suspense fallback={<CardsLoader />}>
                <FormationCard />
            </Suspense>
        </div>
    );
}
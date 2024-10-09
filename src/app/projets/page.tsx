import { Suspense } from "react";
import CardsLoader from "@/components/loaders/cards-loader";
import ProjetsCard from "./component";

export default function Projets() {
    return (
        <div>
            <Suspense fallback={<CardsLoader />}>
                <ProjetsCard />
            </Suspense>
        </div>
    );
}
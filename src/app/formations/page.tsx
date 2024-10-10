import { Suspense } from "react";
import { CardsLoader } from "@/components/loaders/cards-loader";
import { FormationsCards } from "@/components/formations/formations-cards";

export default function Formations() {
    return (
        <div>
            <Suspense fallback={<CardsLoader />}>
                <FormationsCards />
            </Suspense>
        </div>
    );
}
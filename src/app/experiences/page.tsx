import { Suspense } from "react";
import CardsLoader from "@/components/loaders/cards-loader";
import ExperienceCard from "./component";

export default function Experiences() {
    return (
        <div>
            <Suspense fallback={<CardsLoader />}>
                <ExperienceCard />
            </Suspense>
        </div>
    );
}
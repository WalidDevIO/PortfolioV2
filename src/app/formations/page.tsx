import { CardsLoader } from "@/components/loaders/cards-loader";
import dynamic from "next/dynamic";

const FormationsCards = dynamic(async () => (await import("@/components/formations/formations-cards")).FormationsCards, {
    loading: () => <CardsLoader />
})

export default function Formations() {
    return (
        <div>
            <FormationsCards />
        </div>
    );
}
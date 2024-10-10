import dynamic from 'next/dynamic';
import {CardsLoader} from "@/components/loaders/cards-loader";

const ExperienceCard = dynamic(async () => (await import('@/components/experiences/experiences-cards')).ExperiencesCards, {
    loading: () => <CardsLoader />,
});

export default function Experiences() {
    return (
        <div>
            <ExperienceCard />
        </div>
    );
}
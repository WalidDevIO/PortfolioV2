import { GlobalCards } from "@/components/ui/cards";
import { getExperiences } from "@/actions/getExperiences";
export async function ExperiencesCards() {

    const experiences = await getExperiences();
    return (
        <GlobalCards cards={experiences} />
    );
}
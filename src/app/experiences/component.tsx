import { GlobalCards } from "@/components/ui/cards";
import { getExperiences } from "@/actions/getExperiences";
export default async function ExperienceCard() {

    const experiences = await getExperiences();
    return (
        <GlobalCards cards={experiences} />
    );
}
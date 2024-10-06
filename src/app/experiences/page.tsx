import { GlobalCards } from "@/components/ui/cards";
import { Experience } from "@/types/experience";
import { getExperiences } from "@/actions/getExperiences"

export default async function Experiences() {
    
    const experiences: Experience[] = await getExperiences()

    return (
        <div>
            <GlobalCards cards={experiences} />
        </div>
    );
}
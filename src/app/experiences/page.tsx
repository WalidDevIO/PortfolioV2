import { GlobalCards } from "@/components/global/cards";
import { getExperiences } from "@/actions/api";
export default async function Experiences() {

    const experiences = await getExperiences();
    return (
        <div>
            <GlobalCards cards={experiences} />
        </div>
    );
}
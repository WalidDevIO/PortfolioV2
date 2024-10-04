import { getFormations } from "@/actions/api";
import { GlobalCards } from "@/components/global/cards";
export default async function Formations() {

    const formations = await getFormations();
    return (
        <div>
            <GlobalCards cards={formations} />
        </div>
    );
}
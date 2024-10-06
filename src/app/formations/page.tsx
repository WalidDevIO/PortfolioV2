import { GlobalCards } from "@/components/ui/cards";
import { Formation } from "@/types/formation";
import { getFormations } from "@/actions/getFormations";

export default async function Formations() {

    const formations: Formation[] = await getFormations()

    return (
        <div>
            <GlobalCards cards={formations} />
        </div>
    );
}
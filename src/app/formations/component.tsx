import { getFormations } from "@/actions/getFormations";
import { GlobalCards } from "@/components/ui/cards";

export default async function FormationCard() {
    const formations = await getFormations();
    return (
        <GlobalCards cards={formations} />
    );
}
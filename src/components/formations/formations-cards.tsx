import { getFormations } from "@/actions/getFormations";
import { GlobalCards } from "@/components/ui/cards";

export async function FormationsCards() {
    const formations = await getFormations();
    return (
        <GlobalCards cards={formations} />
    );
}
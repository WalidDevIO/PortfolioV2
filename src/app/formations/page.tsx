import { datas } from "@/datas/datas";
import { GlobalCards } from "@/components/global/cards";
export default function Formations() {

    const formations = datas.formations;
    return (
        <div>
            <GlobalCards cards={formations} />
        </div>
    );
}
import { datas } from "@/datas/datas";
import { GlobalCards } from "@/components/global/cards";
export default function Experiences() {

    const experiences = datas.experiences;
    return (
        <div>
            <GlobalCards cards={experiences} />
        </div>
    );
}
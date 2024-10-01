import { ProjetsCards } from "@/components/projets/projets-cards";
import {datas} from "@/datas/datas";
export default function Projets() {

    const projets = datas.projects;

    return (
        <div>
            <ProjetsCards projets={projets} />
        </div>
    );
}
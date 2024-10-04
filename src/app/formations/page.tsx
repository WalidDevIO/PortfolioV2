"use client"

import { GlobalCards } from "@/components/global/cards";
import { Loader } from "@/components/general/loader";
import { useEffect, useState } from "react";
import { Formation } from "@/types/formation";

const getFormations = async () => {
    const response = await fetch("/api/formations");
    const data = await response.json();
    return data;
}

export default function Formations() {

    const [formations, setFormations] = useState<Formation[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    useEffect(() => {
        getFormations().then(setFormations);
        setLoading(false);
    }, []);

    if(loading) return <Loader />;

    return (
        <div>
            <GlobalCards cards={formations} />
        </div>
    );
}
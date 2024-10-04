"use client"

import { ProjetsCards } from "@/components/projets/projets-cards";
import { Loader } from "@/components/general/loader";
import { useEffect, useState } from "react";
import { Projet } from "@/types/projet";

const getProjets = async () => {
    const response = await fetch("/api/projects");
    const data = await response.json();
    return data;
}

export default function Projets() {

    const [projets, setProjets] = useState<Projet[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    useEffect(() => {
        Promise.all([getProjets()]).then(([projets]) => {
            setProjets(projets)
        }).finally(() => setLoading(false))
    }, []);

    if (loading) return <Loader />;

    return (
        <div>
            <ProjetsCards projets={projets} />
        </div>
    );
}
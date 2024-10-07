"use client"

import { GlobalCards } from "@/components/ui/cards";
import { Formation } from "@/types/formation";
import { useEffect, useState } from "react";

export default function Formations() {

    const getFormations = async (): Promise<Formation[]> => {
        const formations = await fetch('/api/formations');
        const data = await formations.json();
        return data as Formation[];
    }

    const [formations, setFormations] = useState<Formation[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchFormations = async () => {
            const formations = await getFormations();
            setFormations(formations);
            setLoading(false);
        };
        fetchFormations();
    }, []);

    return (
        <div>
            <GlobalCards cards={formations} loading={loading} />
        </div>
    );
}
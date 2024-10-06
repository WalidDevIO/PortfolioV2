"use client"

import { GlobalCards } from "@/components/ui/cards";
import { Loader } from "@/components/general/loader";
import { useEffect, useState } from "react";
import { Experience } from "@/types/experience";

const getExperiences = async () => {
    const response = await fetch("/api/experiences");
    const data = await response.json();
    return data;
}

export default function Experiences() {

    const [experiences, setExperiences] = useState<Experience[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    useEffect(() => {
        Promise.all([getExperiences()]).then(([experiences]) => {
            setExperiences(experiences)
        }).finally(() => setLoading(false))
    }, []);

    if (loading) return <Loader />;

    return (
        <div>
            <GlobalCards cards={experiences} />
        </div>
    );
}
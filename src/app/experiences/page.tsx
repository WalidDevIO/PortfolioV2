"use client"

import { GlobalCards } from "@/components/ui/cards";
import { Experience } from "@/types/experience";
import { useEffect, useState } from "react";

export default function Experiences() {

    const getExperiences = async () => {
        const experiences = await fetch('/api/experiences');
        const data = await experiences.json();
        return data as Experience[];
    }

    const [experiences, setExperiences] = useState<Experience[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchExperiences = async () => {
            const experiences = await getExperiences();
            setExperiences(experiences);
            setLoading(false);
        };
        fetchExperiences();
    }, []);

    return (
        <div>
            <GlobalCards cards={experiences} loading={loading} />
        </div>
    );
}
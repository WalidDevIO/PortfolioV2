"use client"

import { Experience, ExperienceType } from "@/types/experience";
import { useState } from "react";
import { ExperienceForm } from "@/components/forms/ExperienceForm";

export default function AddExperiencePage() {

    const experience: Experience = {
        duration: "",
        location: "",
        title: "",
        description: "",
        image: "",
        landingDescription: "",
        technologies: [],
        extraLinks: [],
        type: "Contrat de travail" as ExperienceType,
    }

    const [error, setError] = useState<string>("");
    const [success, setSuccess] = useState<string>("");

    const handleSubmit = async (data: Experience) => {
        const response = await fetch("/api/experiences", {
            method: "POST",
            body: JSON.stringify(data)
        });

        if (response.ok) {
            setSuccess("Expérience ajoutée avec succès");
        } else {
            setError("Erreur lors de l'ajout de l'expérience");
        }
    }

    return (
        <div className="w-full flex flex-col justify-center items-center mt-8 gap-4">
            <ExperienceForm experience={experience} onSubmit={handleSubmit} flash={{ error: error, success: success }} />
        </div>
    );
}

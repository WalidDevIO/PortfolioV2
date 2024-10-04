"use client"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Experience, ExperienceType } from "@/types/experience";
import { useState } from "react";
import { useRouter } from "next/navigation";
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
    const router = useRouter();

    const handleSubmit = async (data: Experience) => {
        const response = await fetch("/api/experiences", {
            method: "POST",
            body: JSON.stringify(data)
        });

        if (response.ok) {
            setSuccess("Expérience ajoutée avec succès");
            setTimeout(() => {
                router.push("/admin/dashboard");
            }, 1000);
        } else {
            setError("Erreur lors de l'ajout de l'expérience");
        }
    }

    return (
        <div className="w-full flex flex-col justify-center items-center mt-8 gap-4">
            {error && (
                <Alert>
                    <AlertTitle>Erreur</AlertTitle>
                    <AlertDescription>{error}</AlertDescription>
                </Alert>
            )}
            {success && (
                <Alert>
                    <AlertTitle>Succès</AlertTitle>
                    <AlertDescription>{success}</AlertDescription>
                </Alert>
            )}
            <ExperienceForm experience={experience} onSubmit={handleSubmit} />
        </div>
    );
}

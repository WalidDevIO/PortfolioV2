"use client"

import { FormationForm } from "@/components/forms/FormationForm";
import { Formation } from "@/types/formation";
import { useState } from "react";

export default function AddFormationPage() {

    const formation: Formation = {
        duration: "",
        location: "",
        title: "",
        description: "",
        image: "",
        landingDescription: "",
        technologies: [],
        extraLinks: [],
        speciality: "",
    }

    const [error, setError] = useState<string>("");
    const [success, setSuccess] = useState<string>("");

    const handleSubmit = async (data: Formation) => {
        const response = await fetch("/api/formations", {
            method: "POST",
            body: JSON.stringify(data)
        });

        if (response.ok) {
            setSuccess("Formation ajoutée avec succès");
        } else {
            setError("Erreur lors de l'ajout de la formation");
        }
    }

    return (
        <div className="w-full flex flex-col justify-center items-center mt-8 gap-4">
            <FormationForm formation={formation} onSubmit={handleSubmit} flash={{ error: error, success: success }} />
        </div>
    );
}

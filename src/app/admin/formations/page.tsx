"use client"

import { FormationForm } from "@/components/forms/FormationForm";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Formation } from "@/types/formation";
import { useState } from "react";
import { useRouter } from "next/navigation";

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
    const router = useRouter();

    const handleSubmit = async (data: Formation) => {
        const response = await fetch("/api/formations", {
            method: "POST",
            body: JSON.stringify(data)
        });

        if (response.ok) {
            setSuccess("Formation ajoutée avec succès");
            setTimeout(() => {
                router.push("/admin/dashboard");
            }, 1000);
        } else {
            setError("Erreur lors de l'ajout de la formation");
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
            <FormationForm formation={formation} onSubmit={handleSubmit} />
        </div>
    );
}

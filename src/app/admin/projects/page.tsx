"use client"

import { ProjectForm } from "@/components/forms/ProjectForm";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Projet } from "@/types/projet";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddProjectPage() {

    const project: Projet = {
        duration: "",
        location: "",
        title: "",
        description: "",
        image: "",
        landingDescription: "",
        technologies: [],
        extraLinks: [],
        littleDescription: "",
    }

    const [error, setError] = useState<string>("");
    const [success, setSuccess] = useState<string>("");
    const router = useRouter();

    const handleSubmit = async (data: Projet) => {
        const response = await fetch("/api/projects", {
            method: "POST",
            body: JSON.stringify(data)
        });

        if (response.ok) {
            setSuccess("Projet ajouté avec succès");
            setTimeout(() => {
                router.push("/admin/dashboard");
            }, 1000);
        } else {
            setError("Erreur lors de l'ajout du projet");
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
            <ProjectForm project={project} onSubmit={handleSubmit} />
        </div>
    );
}

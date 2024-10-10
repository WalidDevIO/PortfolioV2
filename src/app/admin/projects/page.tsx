"use client"

import { ProjectForm } from "@/components/forms/project-form";
import { Projet } from "@/types/projet";
import { useState } from "react";

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

    const handleSubmit = async (data: Projet) => {
        const response = await fetch("/api/projects", {
            method: "POST",
            body: JSON.stringify(data)
        });

        if (response.ok) {
            setSuccess("Projet ajouté avec succès");
        } else {
            setError("Erreur lors de l'ajout du projet");
        }
    }

    return (
        <div className="w-full flex flex-col justify-center items-center mt-8 gap-4">
            <ProjectForm project={project} onSubmit={handleSubmit} flash={{ error: error, success: success }} />
        </div>
    );
}
